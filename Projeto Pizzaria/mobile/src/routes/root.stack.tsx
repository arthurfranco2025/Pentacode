import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}
