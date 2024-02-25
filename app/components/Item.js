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
        <View style={styles.square}>
          <Text>{props.num}</Text></View>
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
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
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
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Item;