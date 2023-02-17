import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppStack = createNativeStackNavigator();

import HomeScreen from "../../screens/home/HomeScreen";
import DetailScreen from "../../screens/detail/DetailScreen";
import SuccessScreen from "../../screens/success/SuccessScreen";
import CartScreen from "../../screens/cart/CartScreen";

const AppNav = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Group>
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Detail" component={DetailScreen} />
        <AppStack.Screen name="Success" component={SuccessScreen} />
        <AppStack.Screen name="Cart" component={CartScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};

export default AppNav;
