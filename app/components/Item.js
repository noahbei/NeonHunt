import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const Item = (props) => {
  const [image, setImage] = useState(null);
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circular}>
          <Text style={styles.text}>{props.num}</Text>
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
      {!image && <Button
          title="take picture"
          color="#f194ff"
          onPress={takePhoto}
      />}
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ADD8E6',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%'
  },
  itemLeft: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',
  },
  circular: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 10,
    marginRight: 0,
  },
  itemText: {
    maxWidth: '80%',
    textAlign: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Item;