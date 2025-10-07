import React, { useContext } from 'react'

import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../contexts/AuthContext";
import { PedidoProvider } from '../contexts/pedidoContext';
import { ComandaProvider } from '../contexts/comandaContext';

function Routes (){
    const {isAuthenticated, loading} = useContext(AuthContext);

    if (loading){
        return(
            <View style={{
                flex:1,
                backgroundColor: '#1d1d2e',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={60} color='#fff'/>
            </View>
        )
    }
    
    return(
        isAuthenticated ? 
            <ComandaProvider>
                <PedidoProvider>
                    <AppRoutes/>
                </PedidoProvider>
            </ComandaProvider> 
                : 
            <AuthRoutes/>
    )
    }

export default Routes;