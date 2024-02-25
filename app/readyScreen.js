import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Link } from 'expo-router';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <View style={styles.innerContainer}>
        <Link href="/playScreen" asChild>
          <Button
              title="ready"
              color="#f194ff"
              onPress={() => {}}
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
