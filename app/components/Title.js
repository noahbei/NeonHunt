import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';

const Title = (props) => {
  return (
    <Text style={styles.text}>Neon Hunt</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: '#fff',
    textShadowColor: '#f194ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    
    
  },
});

export default Title;