import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import MealItem from "../mealItem/MealItem";
import { useNavigation } from "@react-navigation/native";
import { screenHeight } from "../../style";
import styles from "./Style";
import { SNACKS } from "./../../data/menu";
const Snacks = () => {
  const { listStyle, text } = styles;
  const { navigate } = useNavigation();

  return (
    <>
      <Text style={text}>Snacks</Text>
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={listStyle}
        horizontal
        data={SNACKS}
        renderItem={(item) => {
          return (
            <MealItem
              description={item.item.description}
              img={item.item.image}
              price={item.item.price}
              onPress={() => {
                navigate("Detail"),
                  {
                    mealId: item.item.id,
                    mealImg: item.item.image,
                    mealDesc: item.item.description,
                  };
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default Snacks;
