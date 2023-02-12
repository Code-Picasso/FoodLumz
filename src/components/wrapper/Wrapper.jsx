import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import isIos from "../../style/metrics";
const Wrapper = ({ children }) => {
  return (
    <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar style="dark" />
        {children}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Wrapper;
