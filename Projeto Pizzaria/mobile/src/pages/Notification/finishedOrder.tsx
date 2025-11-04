import * as Notifications from 'expo-notifications';

async function sendNotificationFinishedOrder() {
  Notifications.requestPermissionsAsync(); // pede permissão pro usuário
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pedido finalizado🍕",
      body: "Seu pedido foi finalizado com sucesso!",
      sound: true,
    },
    trigger: null, // null = aparece imediatamente
  });
}

export default sendNotificationFinishedOrder