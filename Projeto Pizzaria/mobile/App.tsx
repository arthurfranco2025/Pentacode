import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from './src/contexts/AuthContext';

import QRScanner from './src/pages/ScanQrCode';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <QRScanner /> */}
        <StatusBar backgroundColor='#000000ff' barStyle='light-content' translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });