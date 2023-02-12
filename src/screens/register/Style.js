import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
import { isIos } from "../../style/metrics";
const styles = StyleSheet.create({
  card: {
    width: screenWidth / 1.2,
    height: screenHeight / 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.red,
    borderRadius: 20,
    flex: 1,
  },
  img: {
    width: isIos ? screenWidth / 1.85 : screenWidth / 1.4,
    height: isIos ? screenHeight / 3.75 : screenHeight / 3.1,
  },
  inputOne: {
    width: "80%",
    borderBottomColor: COLORS.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    padding: 10,
    color: COLORS.white,
    fontSize: SIZES.m,
  },
  inputTwo: {
    width: "80%",
    borderBottomColor: COLORS.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    padding: 10,
    color: COLORS.white,
    fontSize: SIZES.m,
  },
  inputThree: {
    width: "80%",
    borderBottomColor: COLORS.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    padding: 10,
    color: COLORS.white,
    fontSize: SIZES.m,
  },
  signupBtn: {
    width: "80%",
    height: "18%",
    backgroundColor: COLORS.pink,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  signupBtnTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
    fontfamily: "Inter_700Bold",
  },
});
export default styles;
