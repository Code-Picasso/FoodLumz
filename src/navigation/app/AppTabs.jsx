import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsScreen from "../../screens/meals/MealsScreen";
import AppNav from "../stack/AppStack";

const AppTabs = createBottomTabNavigator();

const TabNav = () => {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="App" component={AppNav} />
      <AppTabs.Screen name="Meals" component={MealsScreen} />
    </AppTabs.Navigator>
  );
};

export default TabNav;
