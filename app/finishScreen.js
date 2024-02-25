import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Link } from 'expo-router';
import Item from './components/Item'

export default function App() {
  return (
      <Link href="/" asChild>
        <Button
            title="Retry"
            color="#f194ff"
            onPress={() => {}}
        />
      </Link>
  );
}
