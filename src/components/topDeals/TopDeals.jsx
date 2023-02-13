import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import { DEALS } from "../../data/specialDeals";
import MealItem from "../mealItem/MealItem";
import { useNavigation } from "@react-navigation/native";
import { screenHeight } from "../../style";
import styles from "./Style";
const TopDeals = () => {
  const { listStyle, text } = styles;
  const { navigate } = useNavigation();
  //   const RenderTopDeals = useCallback(() => {
  //     return (
  //       <MealItem
  //         description={item.description}
  //         img={item.image}
  //         onPress={() => {
  //           cons.log("hello");
  //         }}
  //         price={item.price}
  //       />
  //     );
  //   }, []);

  return (
    <>
      <Text style={text}>TopDeals</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={listStyle}
        horizontal
        data={DEALS}
        renderItem={(item) => {
          return (
            <MealItem
              description={item.item.description}
              img={item.item.image}
              price={item.item.price}
              onPress={() => navigate("Detail")}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default TopDeals;