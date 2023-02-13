import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
const styles = StyleSheet.create({
  header: {
    width: screenWidth,
    height: screenHeight / 15,
    justifyContent: "space-between",
    backgroundColor: COLORS.lightRed,
    flexDirection: "row",
  },
  headerImg: {
    width: "10%",
    height: "70%",
    top: 5,
  },
});
export default styles;
