import {StyleSheet, View} from "react-native";
import {router} from 'expo-router';
import {Button} from "@ui-kitten/components";
import Slider from "@/components/slider";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightColors.background
  },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  buttonLogin: {
    marginBottom: 20
  }
})

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Slider/>
      <View style={styles.button}>
        <Button mode="contained" style={styles.buttonLogin} onPress={() => router.navigate("/auth/login")}>
          Login
        </Button>
        <Button mode="outlined" onPress={() => router.navigate("/auth/register")}>
          Register
        </Button>
      </View>
    </View>
  );
}
