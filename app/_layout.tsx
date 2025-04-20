import React, {useEffect} from 'react';
import {View, SafeAreaView} from "react-native";
import {Stack} from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import {default as theme} from '../components/theme/custom-theme.json';
import {StatusBar} from "expo-status-bar";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  let [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

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
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
          <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="auth/login" options={{headerShown: false}}/>
            <Stack.Screen name="+not-found"/>
          </Stack>
        </SafeAreaView>
        <StatusBar style="auto"/>
      </ApplicationProvider>
    </>
  );
}
