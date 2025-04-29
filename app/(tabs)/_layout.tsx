import User from '@/assets/images/user.svg';
import Orders from '@/assets/images/orders.svg';
import Home from '@/assets/images/home.svg';
import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import {Image} from 'expo-image';
import Index from "@/app/(tabs)/index";
import Order from "@/app/(tabs)/orders";
import Settings from "@/app/(tabs)/settings";
import lightColors from "@/themes/colors";

function getIconByName(name: string) {
  const icons = {
    'index': Home,
    'order': Orders,
    'settings': User,
  };
  return icons[name];
}

function TabBarIcon({name, color}: { name: string; color: string }) {
  const icon = getIconByName(name);
  const style = name === "order" ? {width: 28, height: 28} : {
    tintColor: color,
    width: 28,
    height: 28,
  };

  return (
    <Image
      source={icon}
      contentFit="cover"
      transition={1000}
      style={style}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          style={{backgroundColor: lightColors.blackDark, height: 80}}
          activeIndicatorStyle={{
            backgroundColor: lightColors.primary,
          }}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Index}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <TabBarIcon name="index" color={color}/>;
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => {
            return <TabBarIcon name="order" color={color}/>;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => {
            return <TabBarIcon name="settings" color={color}/>;
          },
        }}
      />
    </Tab.Navigator>
  );
}
