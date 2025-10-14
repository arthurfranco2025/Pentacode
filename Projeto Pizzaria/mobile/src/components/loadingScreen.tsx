import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

export function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // cor de fundo
      }}
    >
      <ActivityIndicator size="large" color="#ff9000" /> 
      <Text style={{ marginTop: 10, fontSize: 16, color: "#333" }}>
        Carregando...
      </Text>
    </View>
  );
}