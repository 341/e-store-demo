import {StyleSheet, View} from "react-native";
import Slider from "@/components/slider";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Slider/>
    </View>
  );
}
