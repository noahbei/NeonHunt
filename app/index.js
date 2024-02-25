import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Link } from 'expo-router';
import NeonButton from './components/NeonButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NeonButton onPressFunction={() => {console.log("button test")}} text={'Hello'}></NeonButton>
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
