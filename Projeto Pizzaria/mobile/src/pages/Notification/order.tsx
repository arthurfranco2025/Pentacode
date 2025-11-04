import * as Notifications from 'expo-notifications';

async function sendNotificationOrder() {
  Notifications.requestPermissionsAsync(); // pede permissão pro usuário
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pedido adicionado🍕",
      body: "Seu pedido foi adicionado com sucesso!",
      sound: true,
    },
    trigger: null, // null = aparece imediatamente
  });
}

export default sendNotificationOrder