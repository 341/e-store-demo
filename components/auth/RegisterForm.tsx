import {View, StyleSheet} from 'react-native';
import InputText from '@/components/form/InputText';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 50
    },
});

export default function RegisterForm({control, errors, style}: { control?: any, errors?: any, style?: any }) {
    return (
        <View style={[styles.container, style]}>
            <InputText control={control} errors={errors} name='firstName' label='First Name'/>
            <InputText control={control} errors={errors} name='lastName' label='Last Name'/>
            <InputText control={control} errors={errors} name='email' label='Email' inputMode='email'
                       autoComplete='email'
                       keyboardType='email-address'
                       autoCapitalize="none"/>
            <InputText control={control} errors={errors} name='phoneNumber' label='Nr i telefonit'/>
        </View>
    );
}
