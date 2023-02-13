import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Style";
const Header = ({ children, header, headerImg }) => {
  return <View style={header}>{children}</View>;
};

export default Header;
