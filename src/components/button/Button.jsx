import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, btnStyle, txtStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={txtStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
