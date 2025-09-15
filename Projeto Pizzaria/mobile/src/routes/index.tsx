import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes (){
    const isAuthenticated = false;
    const loading = false;

    if (loading){
    return(
        <View style={{
            flex:1,
            
        }}
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;