import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppNavigator from "./src/navigation/index/Index";

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Why</Text>
      </View>
    );
  } else {
    return <AppNavigator />;
  }
};
