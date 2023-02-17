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
import { screenHeight, screenWidth } from "../../style/metrics";
const DetailScreen = () => {
  const { header, headerImg, detailImg, mealDesc } = styles;
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
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          marginTop: screenHeight / 10,
        }}
      >
        <Image source={require("../../imgs/cat-img4.jpg")} style={detailImg} />
        <Text style={mealDesc}>
          Occaecat esse sunt nulla est quis incididunt velit pariatur deserunt
          sunt pariatur. Ad adipisicing do nisi consequat commodo culpa officia.
          Occaecat Lorem occaecat pariatur do. Ut eu ex proident mollit minim
          deserunt ea adipisicing officia sunt et cillum. Veniam veniam culpa
          exercitation laborum qui anim. Veniam adipisicing occaecat duis veniam
          reprehenderit laborum reprehenderit et. Non cillum ea dolore ex velit
          nostrud minim proident officia do laborum enim qui ullamco.
        </Text>
      </View>
    </Wrapper>
  );
};

export default DetailScreen;
