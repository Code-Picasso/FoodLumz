import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
import { isAndroid } from "../../style/metrics";
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
    height: isAndroid ? "70%" : "75%",
    top: 5,
  },
  chef: {
    fontSize: SIZES.l,
    fontWeight: "800",
    bottom: screenHeight / 25,
    color: COLORS.red,
  },
  menu: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 15,
  },
});
export default styles;
