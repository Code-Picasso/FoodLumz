import { StyleSheet } from "react-native";
import { COLORS, SIZES, screenHeight, screenWidth } from "../../style/index";
import { isIos } from "../../style/metrics";
const styles = StyleSheet.create({
  card: {
    width: screenWidth / 1.2,
    height: screenHeight / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.red,
    borderRadius: 20,
  },
  img: {
    width: isIos ? screenWidth / 1.85 : screenWidth / 1.4,
    height: isIos ? screenHeight / 3.75 : screenHeight / 3.1,
  },
  inputOne: {
    width: "80%",
    height: 20,
    borderBottomColor: COLORS.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  inputTwo: {
    width: "80%",
    height: 20,
    borderBottomColor: COLORS.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  loginBtn: {},
  loginBtnTxt: {},
});
export default styles;
