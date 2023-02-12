import { View, Text, Image } from "react-native";
import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./Style";
import { screenHeight } from "../../style/metrics";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
const RegisterScreen = () => {
  const { card, img, inputOne, inputTwo, inputThree, signupBtn, signupBtnTxt } =
    styles;
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
          <Input inputStyle={inputThree} placeholder="Confirm Password" />
          <Button
            btnStyle={signupBtn}
            title="Signup"
            txtStyle={signupBtnTxt}
            onPress={() => console.log("Hello")}
          />
        </Card>
      </View>
    </Wrapper>
  );
};

export default RegisterScreen;
