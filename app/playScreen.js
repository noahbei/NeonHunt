import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image} from 'react-native';
import { Link } from 'expo-router';
import Item from './components/Item'
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Item text={'Task1'}></Item>
      <Item text={'Task2'}></Item>
      <Item text={'Task3'}></Item>
      <Button
          title="take picture"
          color="#f194ff"
          
      />
      <Link href="/finishScreen" asChild>
        <Button
            title="done -- go to end page"
            color="#f194ff"
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
