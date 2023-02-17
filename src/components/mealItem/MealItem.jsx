import { View, Text, Image } from "react-native";
import React from "react";
import Button from "./../button/Button";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";
const MealItem = ({ img, description, onPress, price }) => {
  const { container, cover, short, priceTag } = styles;
  return (
    <Button onPress={onPress} btnStyle={container}>
      <Image source={img} style={cover} />
      <Text numberOfLines={2} style={short}>
        {description}
      </Text>
      <Text style={priceTag}>{price}</Text>
    </Button>
  );
};

export default MealItem;
