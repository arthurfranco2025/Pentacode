import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../pages/Home";
import ProductInfo from "../pages/ProductInfo";
import CustomizeProduct from "../pages/CustomizeProduct";

export type StackParamsList ={
    Home: undefined;
    ProductInfo: undefined;
    CustomizeProduct: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

const Stack = createNativeStackNavigator();

function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
            />

            <Stack.Screen 
                name="ProductInfo" 
                component={ProductInfo} 
            />

            <Stack.Screen 
                name="CustomizeProduct" 
                component={CustomizeProduct}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;