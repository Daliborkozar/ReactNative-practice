import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    height: 100,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#ffffff",
  },
});

export default Header;
