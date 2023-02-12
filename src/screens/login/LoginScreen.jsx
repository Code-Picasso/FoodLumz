import { View, Text, Image } from "react-native";
import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./Style";
import { screenHeight } from "../../style/metrics";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
const LoginScreen = () => {
  const { card, img, inputOne, inputTwo, loginBtn, loginBtnTxt } = styles;
  return (
    <Wrapper>
      <View style={{ flex: 0.2, marginTop: screenHeight / 12 }}>
        <Image source={require("../../imgs/spalsh-img.png")} style={img} />
      </View>
      <View
        style={{
          flex: 0.5,
          marginTop: 30,
        }}
      >
        <Card cardStyle={card}>
          <Input inputStyle={inputOne} />
          <Input inputStyle={inputTwo} />
        </Card>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;
