import {KeyboardAvoidingView, Platform, ScrollView, View, StyleSheet} from 'react-native';
import {Text} from "react-native-paper";
import lightColors from "@/themes/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 500
  },
  orderStatus: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  orderButton: {
    marginLeft: 'auto'
  }
});

export default function Index() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: lightColors.background}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20, backgroundColor: lightColors.background}}>
        <View style={styles.container}>
          <Text>asdf</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


