import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Dashboard" 
                component={Dashboard}
            />

            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;