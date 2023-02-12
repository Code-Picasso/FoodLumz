import { View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { isIos } from "../../style/metrics";

const Card = ({ children, cardStyle }) => {
  return <View style={cardStyle}>{children}</View>;
};

export default Card;
