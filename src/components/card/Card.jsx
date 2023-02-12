import { View, Text } from "react-native";
import React from "react";

const Card = ({ children, cardStyle }) => {
  return <View style={cardStyle}>{children}</View>;
};

export default Card;
