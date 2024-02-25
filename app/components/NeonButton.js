import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';

const NeonButton = (props) => {
  return (
      <Pressable style={styles.pressable} onPress={props.onPressFunction}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#8796D9',
    borderRadius: 62,
    padding: 20,
    width: "45%",
    display: "flex",
    alignItems: "center"
  },
  
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  }
});

export default NeonButton;