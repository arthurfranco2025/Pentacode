import React, { useState } from "react";
import {
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Platform,
	StatusBar,
} from "react-native";
import { api } from "../../services/api";
import { useNavigation, useRoute, RouteProp, NavigationProp } from "@react-navigation/native";


export default function ChangePassword() {
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const navigation = useNavigation<NavigationProp<any>>();
	const route = useRoute<RouteProp<{ EditPassword: { token?: string } }, 'EditPassword'>>();
	const tokenFromLink = route?.params?.token;

	async function handleSubmit() {
		// previne chamadas duplicadas quando o botão já está em loading
		if (loading) return;
		if (!password || password.length < 6) {
			setMessage("A senha deve ter pelo menos 6 caracteres.");
			return;
		}
		setLoading(true);
		console.log('[EditPassword] handleSubmit start');
		try {
		setMessage("");
			// Faz a chamada usando a instância axios que já tem baseURL e header Authorization
			// Usar endpoint público se houver token (fluxo de 'esqueci minha senha')
			let data: any;
			if (tokenFromLink) {
				const resp = await api.post('/login/resetarSenhaPublic', { token: tokenFromLink, password });
				data = resp.data;
			} else {
				// fallback para rota autenticada (caso o usuário esteja logado)
				const resp = await api.post('/login/resetarSenha', { password });
				data = resp.data;
			}
			console.log('[EditPassword] api response', data);
			setMessage(data.message || 'Senha alterada com sucesso!');
			setPassword("");
			// navegar para SignIn após sucesso no fluxo de recuperação de senha
			navigation.navigate("SignIn");
		} catch (error) {
			const err: any = error;
			console.error('Erro no reset senha:', err?.response || err?.message || err);
			const msg = err?.response?.data?.message || err?.message || 'Erro de conexão. Tente novamente.';
			setMessage(msg);
			// se status for 401 (token inválido), pode ser útil redirecionar para sign in
			if (err?.response?.status === 401) {
				console.warn('[EditPassword] Token inválido ou expirado. Redirecionando para SignIn.');
				// navigation.navigate('SignIn'); // opcional
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>

			{/* HEADER */}
			<View style={styles.header}>
				<Text style={styles.logoText}>
					Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
				</Text>
			</View>

			{/* CONTENT */}
			<ScrollView contentContainerStyle={styles.content}>

				{/* TÍTULO */}
				<View style={styles.titleWrap}>
					<Text style={styles.title}>Alterar senha</Text>
				</View>

				{/* CAMPO DE SENHA */}
				<View style={styles.inputGroup}>
					<TextInput
						placeholder="Digite a nova senha"
						placeholderTextColor="#8A8A8A"
						style={styles.input}
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</View>


					{/* FEEDBACK */}
					{message ? (
						<Text style={{ color: message.includes('sucesso') ? '#0f0' : '#f44', marginBottom: 16, textAlign: 'center' }}>{message}</Text>
					) : null}

					{/* BOTÃO */}
					<TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
						<Text style={styles.buttonText}>{loading ? 'Enviando...' : 'Enviar'}</Text>
					</TouchableOpacity>

			</ScrollView>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1d1d2e",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},

	/* HEADER */
	header: {
		paddingTop: 20,
		paddingBottom: 20,
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#ffffff1b",
	},
	logoText: {
		color: "#fff",
		fontSize: 32,
		fontWeight: "700",
	},

	/* CONTENT */
	content: {
		paddingHorizontal: 30,
		paddingTop: 40,
		alignItems: "center",
	},

	/* TÍTULO */
	titleWrap: {
		marginBottom: 30,
	},
	title: {
		color: "#FFFFFF",
		fontSize: 28,
		fontWeight: "700",
		textAlign: "center",
	},

	/* INPUT */
	inputGroup: {
		width: "100%",
		marginBottom: 30,
	},
	input: {
		width: "100%",
		backgroundColor: "#101026",
		borderColor: "#8A8A8A",
		borderWidth: 1,
		borderRadius: 8,
		color: "#FFF",
		paddingVertical: 12,
		paddingHorizontal: 14,
		fontSize: 15,
	},

	/* BOTÃO */
	button: {
		width: "70%",
		backgroundColor: "#FF3F4B",
		borderRadius: 8,
		paddingVertical: 12,
		alignItems: "center",
		justifyContent: "center",
		elevation: 4,
		shadowColor: "#FF3F4B",
	},
	buttonText: {
		color: "#FFF",
		fontSize: 16,
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 1,
	},
});