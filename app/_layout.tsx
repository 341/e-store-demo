import React, {useEffect} from 'react';
import {View} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

import {ApplicationProvider, Button, Icon, IconRegistry, Layout} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import { default as theme } from '../components/theme/custom-theme.json'; // <-- Import app theme

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  let [fontsLoaded, error] = useFonts({});

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  if (!fontsLoaded) {
    return <View/>;
  } else {
    return <RootLayoutNav/>
  }
}

function RootLayoutNav() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button>HOME</Button>
            <Icon name='facebook'/>
          </View>
        </Layout>
      </ApplicationProvider>
    </>
  );
}
