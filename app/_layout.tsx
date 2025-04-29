import React, {useEffect} from 'react';
import {View} from "react-native";
import {Stack} from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {AuthProvider, useAuth} from '@/components/contexts/AuthContext';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import theme from '@/themes/theme';
import lightColors from "@/themes/colors";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
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
    return <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  }
}

function RootLayoutNav() {
  const { loading, user } = useAuth();

  if (loading && !user) return null;
  return (
      <PaperProvider theme={theme}>
          <SafeAreaView style={{flex: 1, height: '100%', width: '100%', backgroundColor: lightColors.background}}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="auth/login"/>
              <Stack.Screen name="auth/password"/>
              <Stack.Screen name="auth/register"/>
              <Stack.Screen name="privacy"/>
              <Stack.Screen name="help"/>
            </Stack>
          </SafeAreaView>
      </PaperProvider>
  );
}
