import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsScreen from "../../screens/meals/MealsScreen";
import AppNav from "../stack/AppStack";
import styles from "./Style";
import { COLORS, screenHeight } from "../../style";
import Ionicons from "@expo/vector-icons/Ionicons";

const AppTabs = createBottomTabNavigator();

const TabNav = () => {
  const { barStyle } = styles;
  return (
    <AppTabs.Navigator screenOptions={{ headerShown: false }}>
      <AppTabs.Screen
        name="App"
        component={AppNav}
        options={{
          tabBarStyle: {
            backgroundColor: COLORS.red,
            height: screenHeight / 15,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarActiveBackgroundColor: COLORS.red,
          tabBarActiveTintColor: COLORS.red,
          tabBarInactiveTintColor: COLORS.red,
          tabBarInactiveBackgroundColor: COLORS.red,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="home"
                color={focused ? COLORS.white : COLORS.grey}
                size={30}
              />
            );
          },
          tabBarIconStyle: { top: screenHeight / 60 },
          lazy: false,
        }}
      />
      <AppTabs.Screen
        options={{
          tabBarStyle: {
            backgroundColor: COLORS.red,
            height: screenHeight / 15,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarActiveBackgroundColor: COLORS.red,
          tabBarActiveTintColor: COLORS.red,
          tabBarInactiveTintColor: COLORS.red,
          tabBarInactiveBackgroundColor: COLORS.red,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="book"
                color={focused ? COLORS.white : COLORS.grey}
                size={30}
              />
            );
          },
          tabBarIconStyle: { top: screenHeight / 60 },
          lazy: false,
        }}
        name="Meals"
        component={MealsScreen}
      />
    </AppTabs.Navigator>
  );
};

export default TabNav;
