import * as Notifications from 'expo-notifications';

async function sendNotificationStatus(status: string | undefined) {
  Notifications.requestPermissionsAsync(); // pede permissão pro usuário
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Status do pedido🍕",
      body: "O status do seu pedido agora é: " + status,
      sound: true,
    },
    trigger: null, // null = aparece imediatamente
  });
}

export default sendNotificationStatus