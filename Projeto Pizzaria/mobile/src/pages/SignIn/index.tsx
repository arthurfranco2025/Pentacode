import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleLogin(){
	if(email === '' || password === ''){
		alert('erro')
		return;
	} 

	await signIn({email, password})
}

  return (
	<View style={styles.safeArea}>
	  <KeyboardAvoidingView
		style={{ flex: 1 }}
		behavior={Platform.OS === "ios" ? "padding" : "height"}
	  >
		<ScrollView contentContainerStyle={styles.scrollContent}>
		  <Text style={styles.logo}>
			<Text style={styles.white}>Penta</Text>
			<Text style={styles.red}>Pizza</Text>
		  </Text>

		  <Text style={styles.title}>Login</Text>

		  <View style={styles.inputGroup}>
			<Text style={styles.inputLabel}>Email</Text>
			<TextInput
			  placeholder="Digite seu email"
			  placeholderTextColor="#8A8A8A"
			  value={email}
			  onChangeText={setEmail}
			  style={styles.input}
			/>
		  </View>

		  <View style={styles.inputGroup}>
			<Text style={styles.inputLabel}>Senha</Text>
			<TextInput
			  placeholder="Digite sua senha"
			  placeholderTextColor="#8A8A8A"
			  secureTextEntry
			  value={password}
			  onChangeText={setPassword}
			  style={styles.input}
			/>
		  </View>


		  <TouchableOpacity style={styles.button} onPress={handleLogin}>
			{ loadingAuth ? ( 
				<ActivityIndicator size={25} color='#fff'/>
			) : (
				<Text style={styles.buttonText}>Acessar</Text>
			)}
			</TouchableOpacity>

		  <Text style={styles.dividerText}>ou</Text>

		  <TouchableOpacity style={styles.googleButton}>
			<Image
			  source={{
				uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/yaigou25_expires_30_days.png",
			  }}
			  resizeMode="contain"
			  style={styles.googleIcon}
			/>
			<Text style={styles.googleText}>Entrar com Google</Text>
		  </TouchableOpacity>

		  <Text style={styles.loginText}>Não tem uma conta? Cadastre-se </Text>
		</ScrollView>
	  </KeyboardAvoidingView>
	</View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
	flex: 1,
	backgroundColor: "#1d1d2e",
  },
  scrollContent: {
	paddingHorizontal: 32,
	paddingBottom: 50,
  },
  logo: {
	marginTop: 50,
	marginBottom: 20,
	fontSize: 62,
	fontWeight: "bold",
	textAlign: "center",
  },
  white: { color: "#fff" },
  red: { color: "#E32636" },
  title: {
	color: "#fff",
	fontSize: 38,
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: 32,
  },
  inputGroup: {
	marginBottom: 20,
  },
  inputLabel: {
	color: "#fff",
	fontSize: 12,
	fontWeight: "bold",
	marginBottom: 8,
  },
  input: {
	backgroundColor: "#101026",
	color: "#F0F0F0",
	fontSize: 14,
	borderColor: "#8A8A8A",
	borderRadius: 5,
	borderWidth: 1,
	paddingVertical: 10,
	paddingHorizontal: 12,
  },
  button: {
	backgroundColor: "#FF3F4B",
	borderRadius: 5,
	paddingVertical: 12,
	alignItems: "center",
	marginBottom: 20,
  },
  buttonText: {
	color: "#fff",
	fontSize: 14,
	fontWeight: "bold",
  },
  dividerText: {
	textAlign: "center",
	color: "#fff",
	fontSize: 12,
	fontWeight: "bold",
	marginBottom: 20,
  },
  googleButton: {
	flexDirection: "row",
	alignItems: "center",
	backgroundColor: "#fff",
	borderRadius: 5,
	paddingVertical: 10,
	justifyContent: "center",
	marginBottom: 20,
  },
  googleIcon: {
	width: 20,
	height: 20,
	marginRight: 10,
  },
  googleText: {
	color: "#1D1D2E",
	fontSize: 14,
	fontWeight: "bold",
  },
  loginText: {
	textAlign: "center",
	color: "#fff",
	fontSize: 12,
	fontWeight: "bold",
	marginBottom: 60,
  },
});
