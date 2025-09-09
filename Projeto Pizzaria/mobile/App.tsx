import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sujeito Pizzaria</Text>
      <StatusBar style="auto" />
      <SignUp></SignUp>
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
