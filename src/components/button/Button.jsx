import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, btnStyle, txtStyle, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle} activeOpacity={0.8}>
      <Text style={txtStyle}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
