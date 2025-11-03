import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import * as NavigationBar from 'expo-navigation-bar';

import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    // NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#000000ff' barStyle='light-content' translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}