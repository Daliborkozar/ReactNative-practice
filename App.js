import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import List from "./components/List";
import Header from "./components/Header";

export default function App() {
  const [goal, setAddGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [isSelected, setSelection] = useState(false);

  const handleInput = (eText) => {
    setAddGoal(eText);
  };

  const handleAdd = () => {
    setGoalList([...goalList, goal]);
    setAddGoal("");
  };

  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    flex: 1,
  },
});
