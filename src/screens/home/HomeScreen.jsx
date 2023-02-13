import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./Style";
import Wrapper from "../../components/wrapper/Wrapper";
import Header from "../../components/header/Header";
import { screenWidth } from "../../style";

const HomeScreen = () => {
  const { header, headerImg } = styles;
  return (
    <Wrapper>
      <Header header={header} headerImg={headerImg}>
        <View style={{ left: 10, top: "3%" }}>
          <Ionicons name="exit" size={24} color="#d3d3d3" />
        </View>
        <Image
          source={require("../../imgs/spalsh-img.png")}
          style={headerImg}
        />
        <View style={{ top: "3%", right: 10 }}>
          <Ionicons name="cart" size={24} color="#ffffff" />
        </View>
      </Header>
      <View>
        <Text>Hello</Text>
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
