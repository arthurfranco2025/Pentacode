import React, { useState, useEffect, useContext } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamsList } from "../../routes/app.routes";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

export default function QRScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [startCamera, setStartCamera] = useState(false);

  const navigation = useNavigation<NavigationProp<StackParamsList>>();
  const { user } = useContext(AuthContext); // pega o usuário logado

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);

    Alert.alert("Código lido!", `Mesa: ${data}`, [
      {
        text: "OK",
        onPress: async () => {
          try {
            if (!user?.id) {
              Alert.alert("Erro", "Usuário não autenticado!");
              return;
            }

            // data vem do QR Code, assumindo que seja o ID da mesa
            let mesa_id = data;
            if (mesa_id.includes("/")) {
                mesa_id = mesa_id.split("/").pop() || mesa_id;
            }
            const cliente_id = user.id;

            await api.post(`/comanda/${mesa_id}`, { cliente_id });

            navigation.navigate("Home", { mesaId: mesa_id });
            } catch (err: any) {
                console.log(err.response?.data || err.message);
                Alert.alert(
                    "Erro",
                    err.response?.data?.message || "Não foi possível abrir a comanda"
            );
            } finally {
            setScanned(false);
            }
        },
        },
    ]);
};

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text>Solicitando permissão da câmera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>Sem acesso à câmera!</Text>
      </View>
    );
  }

  // Tela inicial antes da câmera
  if (!startCamera) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Escanear QR Code da Mesa</Text>
        <Text style={styles.subtitle}>
          Clique no botão abaixo para abrir a câmera
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setStartCamera(true)}
        >
          <Text style={styles.buttonText}>Abrir Câmera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela da câmera
  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "ean13", "code128"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {/* Botão de voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setStartCamera(false)}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#7B2FF7",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
