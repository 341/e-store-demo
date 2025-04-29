import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import lightColors from '@/themes/colors';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

const LoadingSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={lightColors.primary} />
  </View>
);

export default LoadingSpinner;
