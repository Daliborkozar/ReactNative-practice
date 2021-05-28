import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [goal, setAddGoal] = useState('')
  const [goalList, setGoalList] = useState([])
  const [isSelected, setSelection] = useState(false);

  const handleInput = (eText) => {
    setAddGoal(eText)
  }

  const handleAdd = () => {

    setGoalList([...goalList, goal])
    setAddGoal('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.goalAddcontainer}>
        <TextInput
          style={styles.textinp}
          placeholder='add goal'
          value={goal}
          onChangeText={handleInput} />
        <Button title="ADD" onPress={handleAdd} />
      </View>
      <View>
        <ScrollView>
        {goalList.map((item, i) => (
          <View style={styles.goaltextWrap} key={i}>
            <Text style={styles.goalText}>{item}</Text>
          </View>

        ))
        }
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  },
  textinp: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    flex: 1,

  },
  goalAddcontainer: {
    display: 'flex',
    flexDirection: 'row',

  },
  goaltextWrap: {
    padding: 10
  },
  goalText: {
    fontSize: 20,
    alignItems: 'center'
  },

});
