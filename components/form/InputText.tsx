import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Controller} from 'react-hook-form';
import theme from '@/themes/theme';
import lightColors from "@/themes/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 5,
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: 5,
  },
});

export default function InputText({control, register, name, label, errors, ...inputProps}: any) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            mode={'outlined'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            textColor={lightColors.primary}
            label={label}
            outlineColor={lightColors.gray}
            {...inputProps}
          />
        )}
        name={name}
      />
      {errors[name]?.message && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
    </View>)
}
