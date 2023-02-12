import { TextInput } from "react-native";
import React from "react";

const Input = ({ inputStyle, placeholder }) => {
  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholder}
      placeholderTextColor="#fff"
    />
  );
};

export default Input;
