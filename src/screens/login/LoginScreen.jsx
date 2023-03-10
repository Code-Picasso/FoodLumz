import { View, Text, Image } from "react-native";
import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./Style";
import { screenHeight } from "../../style/metrics";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const { navigate } = useNavigation();
  const {
    card,
    img,
    inputOne,
    inputTwo,
    loginBtn,
    loginBtnTxt,
    signUpBtn,
    signUpBtnTxt,
  } = styles;
  return (
    <Wrapper>
      <View
        style={{
          flex: 0.2,
          marginTop: screenHeight / 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../../imgs/spalsh-img.png")} style={img} />
      </View>
      <View
        style={{
          flex: 0.5,
          marginTop: 30,
        }}
      >
        <Card cardStyle={card}>
          <Input inputStyle={inputOne} placeholder="Name" />
          <Input inputStyle={inputTwo} placeholder="Password" />
          <Button
            btnStyle={loginBtn}
            title="Login"
            txtStyle={loginBtnTxt}
            onPress={() => navigate("Register")}
          />
          <Button
            btnStyle={signUpBtn}
            title="Signup"
            txtStyle={signUpBtnTxt}
            onPress={() => navigate("Register")}
          />
        </Card>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;
