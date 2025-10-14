import React, { useState, useEffect, useContext } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamsList } from "../../routes/app.routes";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useComanda } from "../../contexts/comandaContext";

export default function QRScanner() {
	const [permission, requestPermission] = useCameraPermissions();
	const [scanned, setScanned] = useState(false);
	const [startCamera, setStartCamera] = useState(false);

	const navigation = useNavigation<NavigationProp<StackParamsList>>();
	const { user, signOut } = useContext(AuthContext);
	const { setComanda } = useComanda();

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
			Alert.alert("Erro", "Usuário não autenticado!", [
				{ text: "OK", onPress: () => setScanned(false) },
			]);
			return;
		}

		try {
			const cliente_id = user.id;
			const response = await api.post(`/comanda/${mesa_id}`, { cliente_id });

			const comanda_id = response.data.id;
			const numeroMesa = response.data?.mesa?.numero_mesa;
			if (!numeroMesa) throw new Error("Número da mesa não encontrado");

			setComanda({
				comandaId: comanda_id,
				mesaId: mesa_id,
				numero_mesa: numeroMesa,
				pedidos: [],
			});

			Alert.alert("Sucesso!", `Você está na mesa ${numeroMesa}`, [
				{
					text: "OK",
					onPress: () => {
						navigation.navigate("Home");
						setScanned(false);
					},
				},
			]);
		} catch (err: any) {
			console.log(err.response?.data || err.message);
			Alert.alert(
				"Erro",
				err.response?.data?.message || "Não foi possível abrir a comanda",
				[{ text: "OK", onPress: () => setScanned(false) }]
			);
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
			{/* HEADER */}
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={["#391D8A", "#1d1d2e"]}
				style={[styles.header, startCamera && styles.headerCameraOpen]}
			>
				<Text style={styles.logoText}>
					Penta<Text style={styles.logoRed}>Pizza</Text>
				</Text>
			</LinearGradient>

			{/* Tela inicial */}
			{!startCamera && (
				<View style={styles.center}>
					<Text style={styles.title}>Escanear QR Code da Mesa</Text>
					<Text style={styles.subtitle}>
						Clique abaixo para abrir a câmera
					</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => setStartCamera(true)}
						activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>Abrir Câmera</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.button, styles.logoutButton]}
						onPress={signOut}
						activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>Sair</Text>
					</TouchableOpacity>
				</View>
			)}

			{/* Câmera aberta */}
			{startCamera && (
				<View style={styles.cameraContainer}>
					<CameraView
						style={StyleSheet.absoluteFillObject}
						barcodeScannerSettings={{
							barcodeTypes: ["qr", "ean13", "code128"],
						}}
						onBarcodeScanned={handleBarCodeScanned}
					/>

					<View style={styles.cameraOverlay}>
						<Text style={styles.cameraHint}>
							Aponte para o QR Code da sua mesa
						</Text>
						<TouchableOpacity
							style={styles.backButton}
							onPress={() => setStartCamera(false)}
							activeOpacity={0.8}
						>
							<Text style={styles.backButtonText}>←</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1D1D2E",
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 24,
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#FFF",
		textAlign: "center",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 15,
		color: "#C8C8C8",
		textAlign: "center",
		marginBottom: 30,
	},
	button: {
		backgroundColor: "#391D8A",
		paddingVertical: 14,
		paddingHorizontal: 50,
		borderRadius: 30,
		elevation: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		marginBottom: 15,
	},
	logoutButton: {
		backgroundColor: "#FF3F4B",
	},
	buttonText: {
		color: "#FFF",
		fontSize: 15,
		fontWeight: "bold",
		letterSpacing: 0.5,
	},
	header: {
		paddingVertical: 36,
		alignItems: "center",
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		marginBottom: 40,
	},
	headerCameraOpen: {
		// borderBottomLeftRadius: 0,
		// borderBottomRightRadius: 0,
		marginBottom: 0,
	},
	logoText: {
		fontSize: 34,
		fontWeight: "bold",
		color: "#FFF",
	},
	logoRed: {
		color: "#FF3F4B",
	},
	cameraContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	cameraOverlay: {
		position: "absolute",
		bottom: 40,
		alignItems: "center",
		width: "100%",
	},
	cameraHint: {
		color: "#FFF",
		fontSize: 14,
		marginBottom: 20,
		textAlign: "center",
		opacity: 0.85,
	},
	backButton: {
		backgroundColor: "#FF3F4B",
		paddingVertical: 10,
		paddingHorizontal: 22,
		borderRadius: 25,
	},
	backButtonText: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "bold",
	},
});