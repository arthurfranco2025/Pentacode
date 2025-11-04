import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import * as NavigationBar from 'expo-navigation-bar';
import * as Notifications from 'expo-notifications';

import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    // NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true, // Mostra o alerta (banner)
      shouldPlaySound: true,  // Toca o som da notificação
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true // Não altera o badge do ícone do app
    }),
  });

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#000000ff' barStyle='light-content' translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}