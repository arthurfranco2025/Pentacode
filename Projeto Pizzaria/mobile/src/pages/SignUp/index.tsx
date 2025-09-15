import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleLogin(){
	if(name === '' || email === '' || password === '' || confirmPassword === ''){
		return
	} 
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.logo}>
            <Text style={styles.white}>Penta</Text>
            <Text style={styles.red}>Pizza</Text>
          </Text>

          <Text style={styles.title}>Cadastro</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor="#8A8A8A"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>

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

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Confirmar senha</Text>
            <TextInput
              placeholder="Confirme sua senha"
              placeholderTextColor="#8A8A8A"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Registrar</Text>
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
            <Text style={styles.googleText}>Continuar com Google</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>Possui conta? Login</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
