import {KeyboardAvoidingView, Platform, ScrollView, View, StyleSheet} from 'react-native';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Button} from 'react-native-paper';
import {router} from 'expo-router';
import lightColors from "@/themes/colors";
import PageHeader from "@/components/header/PageHeader";
import {setToken, setUser} from "@/components/utils/localStorage";
import LoginForm from "@/components/auth/LoginForm";
import {api} from "@/components/utils/api";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  password: yup.string().required('Password is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
}).required();

export default function Register() {

  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await api.post('/auth/login', data);
      const userData = JSON.parse(response.data);
      await setUser(userData);
      await setToken(userData.accessToken);
      // Update Firebase notifications when user data is available
      router.navigate('/(tabs)');
    } catch (e) {
      console.error('Error during login:', e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView contentContainerStyle={{flex: 1, padding: 20}}>
        <View style={styles.container}>
          <PageHeader title="Gati per dergesat?" description="Vendos të dhënat"/>
          <LoginForm control={control} errors={errors}/>
        </View>
        <Button style={{marginTop: 'auto', width: '100%', marginBottom: 30}}
                loading={isSubmitting}
                mode="contained"
                onPress={handleSubmit(onSubmit)}>
          Vazhdo
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: lightColors.background
  }
})
