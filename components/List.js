import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const List = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.goaltextWrap} key={props.index}>

        <Text style={styles.goalText}>{props.text}</Text>

      </View>
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({

  goaltextWrap: {
    padding: 10,
    backgroundColor: '#808080'
  },
  goalText: {
    fontSize: 20,
    alignItems: 'center'
  },

});

