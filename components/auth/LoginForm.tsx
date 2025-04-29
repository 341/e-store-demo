import {View, StyleSheet} from 'react-native';
import InputText from '@/components/form/InputText';
import React from "react";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 50
  },
});

export default function LoginForm({control, errors}: { control: any, errors: any }) {
  return (
    <View style={styles.container}>
      <InputText control={control} errors={errors} name='email' label='Email' inputMode='email'
                 autoCapitalize="none"
                 autoComplete='email'
                 keyboardType='email-address' />
      <InputText control={control} errors={errors} name="password" label="Fjalëkalimi" autoCapitalize="none" secureTextEntry/>
    </View>
  );
}
