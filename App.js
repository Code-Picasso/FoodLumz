import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

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
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello</Text>
      </View>
    );
  }
};
