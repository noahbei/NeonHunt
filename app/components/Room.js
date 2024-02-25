import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Room = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [currentPlayers, setCurrentPlayers] = useState(props.currentPlayers);

  const handlePress = async () => {
    try {
      const response = await fetch(`http://localhost:3000/rooms/${props.id}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: props.id,
        }),
      });

      if (response.ok) {
        // Update the UI or perform any other actions upon successful join
        setIsSelected(true);
        setCurrentPlayers(currentPlayers + 1);
      } else {
        console.error('Failed to join room:', response.statusText);
      }
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  useEffect(() => {
    // Polling interval to check for the current number of players
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/rooms/${props.id}/playerCount`);
        if (response.ok) {
          const data = await response.json();
          setCurrentPlayers(data.currentPlayers);
          
          // Check if the room is full (3 players) and navigate to the ready screen
          if (data.currentPlayers === 3) {
            // Navigate to the ready screen or perform any other actions
            // You may need to use navigation library or context for navigation
            // For simplicity, I'll just log a message here
            console.log(`Room ${props.id} is filled up. Navigate to the ready screen.`);
          }
        } else {
          console.error('Failed to fetch player count:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching player count:', error);
      }
    }, 1000); // Poll every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(pollInterval);
  }, [props.id]);

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.item, isSelected && styles.selectedItem]}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Room Number: {props.id}</Text>
      </View>
      <View style={styles.playerCount}>
        <Text style={styles.itemText}>{currentPlayers} / 3</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
});

export default Room;
