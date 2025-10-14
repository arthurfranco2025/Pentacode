import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../pages/Home";
import ProductInfo from "../pages/ProductInfo";
import CustomizeProduct from "../pages/CustomizeProduct";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order"
import OrderTicket from "../pages/OrderTicket";
import ScanQrCode from "../pages/ScanQrCode";
import Payment from "../pages/Payment";

export type StackParamsList = {
    Home: undefined
    ProductInfo: undefined;
    CustomizeProduct: undefined;
    Order: undefined
    ScanQrCode: undefined
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
    }
    SignIn: undefined
};

const Stack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScanQrCode"
                component={ScanQrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />

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

            {/* <Stack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    )
}

export default AppRoutes;