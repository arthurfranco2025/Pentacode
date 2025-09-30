import React, { useState, useEffect, useContext } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamsList } from "../../routes/app.routes";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { LinearGradient } from "expo-linear-gradient";

export default function QRScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [startCamera, setStartCamera] = useState(false);

  const navigation = useNavigation<NavigationProp<StackParamsList>>();
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (scanned) return;
    setScanned(true);

    let mesa_id = data.includes("/") ? data.split("/").pop() || data : data;

    if (!user?.id) {
      Alert.alert("Erro", "Usuário não autenticado!");
      setScanned(false);
      return;
    }

    try {
      const cliente_id = user.id;
      const response = await api.post(`/comanda/${mesa_id}`, { cliente_id });

      const numeroMesa = response.data.mesa.numero_mesa;

      Alert.alert("Sucesso!", `Você está na mesa ${numeroMesa}`, [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Home", {
              mesaId: mesa_id,
              numero_mesa: numeroMesa,
            });
            setScanned(false);
          },
        },
      ]);
    } catch (err: any) {
      console.log(err.response?.data || err.message);
      Alert.alert(
        "Erro",
        err.response?.data?.message || "Não foi possível abrir a comanda"
      );
      setScanned(false);
    }
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

  return (
    <View style={styles.container}>
      {/* HEADER - agora sempre aparece */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#391D8A", "#261B47"]}
        style={[styles.header, startCamera && styles.headerCameraOpen]}
      >
        <View style={{ width: 24 }} />
        <Text style={styles.logoText}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      {/* Tela inicial antes de abrir a câmera */}
      {!startCamera && (
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

          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={signOut}
          >
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Tela da câmera */}
      {startCamera && (
        <View style={styles.cameraContainer}>
          <CameraView
            style={StyleSheet.absoluteFillObject}
            barcodeScannerSettings={{
              barcodeTypes: ["qr", "ean13", "code128"],
            }}
            onBarcodeScanned={handleBarCodeScanned}
          />

          {/* Botão de voltar */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setStartCamera(false)}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#333", textAlign: "center" },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 30, textAlign: "center" },
  button: {
    backgroundColor: "#391D8A",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 15,
  },
  logoutButton: { backgroundColor: "#FF3F4B" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  backButton: { position: "absolute", top: 50, left: 20, backgroundColor: "rgba(0,0,0,0.5)", padding: 10, borderRadius: 20 },
  backButtonText: { color: "#fff", fontSize: 24, fontWeight: "bold" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 30,
  },
  headerCameraOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 0,
  },
  logoText: { fontSize: 28, fontWeight: "bold", color: "#FFF" },

  cameraContainer: { flex: 1 },
});
