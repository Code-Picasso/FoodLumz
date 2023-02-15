import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2,
    height: screenHeight / 2,
    margin: 10,
    borderRadius: 20,
    backgroundColor: COLORS.grey,
  },
  cover: {
    width: "100%",
    height: "40%",
    borderRadius: 20,
  },
  short: {
    fontSize: SIZES.m,
    fontWeight: "600",
    color: "#eee",
    // zIndex: 10000000,
    padding: 2,
  },
  priceTag: {
    fontSize: SIZES.m,
    fontWeight: "800",
    color: COLORS.green,
    padding: 1,
  },
});
export default styles;
