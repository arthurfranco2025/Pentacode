import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import ProductInfo from "../pages/ProductInfo";
import CustomizeProduct from "../pages/CustomizeProduct";
import Order from "../pages/Order";
import OrderTicket from "../pages/OrderTicket";
import ScanQrCode from "../pages/ScanQrCode";
import Payment from "../pages/Payment";
import { useComanda } from "../contexts/comandaContext";
import { LoadingScreen } from "../components/loadingScreen";

export type StackParamsList = {
  Home: undefined;
  UserPage: undefined;
  ProductInfo: undefined;
  CustomizeProduct: {
    product_id: string;
    pedido_id: string;
  };
  Order: undefined;
  ScanQrCode: undefined;
  OrderTicket: {
    comandaId: string;
    mesaId: string;
    numero_mesa: number;
    statusPedido: string;
  };
  Payment: {
    comandaId: string;
    mesaId: string;
    numero_mesa: number;
    total: number;
  };
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes() {
  const { comanda, loadingComanda } = useComanda();

  if (loadingComanda) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {comanda ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="ScanQrCode"
          component={ScanQrCode}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CustomizeProduct"
        component={CustomizeProduct}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="OrderTicket"
        component={OrderTicket}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;