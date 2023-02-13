import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: SIZES.l,
    fontWeight: "800",
  },
  listStyle: {
    height: screenHeight / 3,
  },
});
export default styles;
