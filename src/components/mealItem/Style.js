import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2,
    height: screenHeight / 2,
    margin: 10,
    borderRadius: 20,
  },
  cover: {
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  short: {
    fontSize: SIZES.m,
    fontWeight: "600",
    color: COLORS.grey,
  },
  priceTag: {
    fontSize: SIZES.m,
    fontWeight: "800",
    color: COLORS.grey,
  },
});
export default styles;
