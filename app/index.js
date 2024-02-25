import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TextInput} from 'react-native';
import { Link } from 'expo-router';
import NeonButton from './components/NeonButton';
import { useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

export default function App() {
    const [selectedIndex, setSelectedIndex] = useState([0, 2]);
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
      
      <Text style={styles.label}>Enter some text:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Enter game key"
      />
      <Button title="Submit" onPress={handleButtonPress} />


      <ButtonGroup
        buttons={['INDOORS', 'OUTDOORS']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />

      <Link href="/readyScreen" asChild>
        <Button
            title="Start Game!"
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
