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
  special: {
    width: "60%",
    marginLeft: screenWidth / 5,
    height: screenHeight / 4,
    borderRadius: 20,
  },
  chefDescription: {
    margin: 10,
    padding: 20,
    color: COLORS.grey,
    fontWeight: "600",
  },
});
export default styles;
