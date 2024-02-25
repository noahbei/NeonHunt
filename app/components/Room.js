import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Room = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.item, isSelected && styles.selectedItem]}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Room Number: {props.id}</Text>
      </View>
      <View style={styles.playerCount}>
        <Text style={styles.itemText}>{props.currentPlayers} / 4</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ADD8E6',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectedItem: {
    backgroundColor: '#FFD700', // Change color for selected item
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  playerCount: {
    width: 40,
    marginLeft: 10
  },
});

export default Room;