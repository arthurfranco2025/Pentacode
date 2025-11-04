import * as Notifications from 'expo-notifications';

async function sendNotificationLogin() {
  Notifications.requestPermissionsAsync(); // pede permissão pro usuário
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Login efetuado🍕",
      body: "Seu login foi efetuado com sucesso!",
      sound: true,
    },
    trigger: null, // null = aparece imediatamente
  });
}

export default sendNotificationLogin