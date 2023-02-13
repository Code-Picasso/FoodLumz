import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import isIos, { isAndroid } from "../../style/metrics";
const Wrapper = ({ children }) => {
  return (
    <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false}>
      <SafeAreaView style={{ paddingTop: isAndroid ? 25 : 0 }}>
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          enabled
          behavior="position"
        >
          <StatusBar style="dark" />
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Wrapper;
