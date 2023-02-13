import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./Style";

import Wrapper from "../../components/wrapper/Wrapper";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import TopDeals from "../../components/topDeals/TopDeals";

const HomeScreen = () => {
  const images = useState();
  const { header, headerImg } = styles;
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
      <View
        style={{
          flex: 1,
        }}
      >
        <TopDeals />
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
