import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Style";
import Wrapper from "../../components/wrapper/Wrapper";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import Spicey from "../../components/menu-1/Spicey";
import Snacks from "../../components/menu-2/Snacks";
import Burgers from "./../../components/menu-3/Burgers";
const MealsScreen = () => {
  const { header, headerImg, menu } = styles;
  return (
    <Wrapper>
      <Header header={header} headerImg={headerImg}>
        <Button btnStyle={{ bottom: "2%", left: 15 }}>
          <Ionicons name="exit" size={24} color="#d3d3d3" />
        </Button>

        <Image
          source={require("../../imgs/spalsh-img.png")}
          style={headerImg}
        />
        <Button btnStyle={{ bottom: "2%", right: 15 }}>
          <Ionicons name="cart" size={24} color="#ffffff" />
        </Button>
      </Header>
      <View>
        <Text style={menu}>Our Menu</Text>
        <Spicey />
        <Snacks />
        <Burgers />
      </View>
    </Wrapper>
  );
};

export default MealsScreen;
