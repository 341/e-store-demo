import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Image} from "expo-image";
import InputText from '@/components/form/InputText';
import Check from '@/assets/images/check.svg';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default function PasswordForm({control, errors}: { control: any, errors: any }) {
  return (
    <View style={styles.container}>
      <InputText control={control} errors={errors} name="password" label="Fjalëkalimi" autoCapitalize="none"
                 secureTextEntry/>
      <View style={{flexDirection: "row", width: '100%'}}>
        <Image
          style={styles.image}
          source={Check}
          contentFit="cover"
          transition={1000}
        />
        <Text>
          8 karaktere
        </Text>
      </View>
      <View style={{flexDirection: "row", width: '100%', marginBottom: 20}}>
        <Image
          style={styles.image}
          source={Check}
          contentFit="cover"
          transition={1000}
        />
        <Text>
          të përmbajë numer, shkronjë të madhe/vogël
        </Text>
      </View>
      <InputText control={control} errors={errors} name="confirmPassword" label="Vertetoni fjalëkalimin"
                 autoCapitalize="none"
                 secureTextEntry/>
    </View>)
}
