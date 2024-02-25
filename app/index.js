import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TextInput} from 'react-native';
import { Link } from 'expo-router';
import NeonButton from './components/NeonButton';
import { useState } from 'react';
import { ButtonGroup } from '@rneui/themed';
import Title from './components/Title';

export default function App() {
    const [selectedIndex, setSelectedIndex] = useState([0, 1]);
    const [text, setText] = useState('');

    const handleInputChange = (input) => {
        setText(input);
      };
    
      const handleButtonPress = () => {
        alert(`You entered: ${text}`);
      };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <NeonButton onPressFunction={() => {console.log("button test")}} text={'Hello'}></NeonButton> */}
      
      <Title></Title>
      <View style={styles.innerContainer}>
      <Text style={styles.label}>Enter Game Key:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
          placeholder="###"
        />

        <ButtonGroup
          buttons={['INDOORS', 'OUTDOORS']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />

        <Link href="/lobbyScreen" asChild>
          <Button
              title="Start Game!"
              color="#f194ff"
              onPress={handleButtonPress}
          />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '90%',
    position: 'absolute'
  }
});
