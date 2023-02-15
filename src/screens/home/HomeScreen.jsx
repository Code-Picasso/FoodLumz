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
  const { header, headerImg, chef, special, chefDescription } = styles;
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
        <View style={{ marginTop: "20%", margin: 10, marginTop: 50, flex: 1 }}>
          <Text style={chef}>Chef's Special</Text>
          <Image source={require("../../imgs/cat-img5.jpg")} style={special} />
          <Text numberOfLines={4} style={chefDescription}>
            Incididunt dolore mollit commodo eu sint et. Officia adipisicing
            occaecat exercitation pariatur pariatur in sint ut amet sunt nostrud
            anim Lorem quis. Ad sunt cupidatat voluptate ad amet enim dolor non.
            Sit officia magna Lorem labore deserunt eu dolore incididunt non
            incididunt id consequat nostrud fugiat. Mollit pariatur consectetur
            aliqua est laboris laboris eiusmod. Dolor consectetur reprehenderit
            aute commodo ipsum adipisicing magna in mollit do consequat
            incididunt irure.
          </Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
