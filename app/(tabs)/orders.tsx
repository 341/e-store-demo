import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import lightColors from "@/themes/colors";

const stylesCounter = StyleSheet.create({
  container: {},
  content: {
    marginLeft: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    borderRadius: '50%',
    lineHeight: 20,
    width: 20,
    height: 20,
    backgroundColor: lightColors.gray,
    color: lightColors.white
  },
  active: {
    backgroundColor: lightColors.primary,
  }
});
const Counter = ({active, children}: { active: boolean, children: any }) => {
  return <View style={[stylesCounter.container]}>
    <Text style={[stylesCounter.content, active && stylesCounter.active]}>
      {children}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 14,
  },
  buttons: {
    marginRight: 10,
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 40,
    borderColor: lightColors.gray,
    color: lightColors.gray,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: 'rgba(255, 182, 33, 0.15)', // Example active background color
    borderColor: '#F6A730', // Example active border color
  }
});

export default function Orders() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: lightColors.background}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Porosite</Text>
          <View>
            <Icon source="magnify" size={20} color="white"/>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
