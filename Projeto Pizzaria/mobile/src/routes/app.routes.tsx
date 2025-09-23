import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../pages/Home";
import ProductInfo from "../pages/ProductInfo";
import CustomizeProduct from "../pages/CustomizeProduct";
import Dashboard from "../pages/Dashboard";

export type StackParamsList ={
    Home: undefined;
    ProductInfo: undefined;
    CustomizeProduct: undefined;
};

const Stack = createNativeStackNavigator();

function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Dashboard" 
                component={Dashboard}
            />

            <Stack.Screen 
                name="ProductInfo" 
                component={ProductInfo}
            />
            
            <Stack.Screen 
                name="CustomizeProduct" 
                component={CustomizeProduct} 
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