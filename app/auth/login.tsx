import {KeyboardAvoidingView, Platform, ScrollView, View, StyleSheet} from 'react-native';
import {Button} from "@ui-kitten/components";
import {router} from 'expo-router';

export default function Login() {
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
      <ScrollView contentContainerStyle={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
        <View style={styles.container}>

        </View>
        <Button style={{marginTop: 'auto', width: '100%', marginBottom: 20}}
                onPress={() => router.push("/")}>
          Vazhdo
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    height: "100%",
    padding: 0,
  },
  image: {
    marginTop: '10%',
    height: 200,
    width: 200,
    marginBottom: 20
  },
})
