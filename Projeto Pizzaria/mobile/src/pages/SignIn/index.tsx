import React, { useState, useContext } from "react";
import { useNavigation, NavigationProp, useFocusEffect } from "@react-navigation/native";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/AuthContext";
import sendNotificationLogin from "../Notification/login";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export default function SignIn() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const backAction = () => {
  //       navigation.goBack();
  //       return true;
  //     };

  //     const backHandler = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       backAction
  //     );

  //     return () => backHandler.remove();
  //   }, [navigation])
  // );

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  function handleForgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  async function handleLogin() {
    if (login === "" || password === "") {
      setError("Preencha todos os campos");
      return;
    }

    try {
      await signIn({ email: login, password });
      setError("");
      sendNotificationLogin()
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function handleGuestLogin() {
    try {
      await signIn({ guest: true });
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
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

          {/* Email ou CPF */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email ou CPF</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#8A8A8A" style={styles.icon} />
              <TextInput
                placeholder="Digite seu email ou CPF"
                placeholderTextColor="#8A8A8A"
                value={login}
                onChangeText={(text) => { setLogin(text); setError(""); }}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
          </View>

          {/* Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#8A8A8A" style={styles.icon} />
              <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor="#8A8A8A"
                value={password}
                onChangeText={(text) => { setPassword(text); setError(""); }}
                style={styles.input}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginLeft: 8 }}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#8A8A8A"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>
              Esqueceu sua senha? <Text style={styles.linkText}>Clique aqui</Text>
            </Text>
          </TouchableOpacity>

          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loadingAuth}>
            {loadingAuth ? <ActivityIndicator size={25} color="#fff" /> : <Text style={styles.buttonText}>Acessar</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin} disabled={loadingAuth}>
            {loadingAuth ? <ActivityIndicator size={25} color="#fff" /> : <Text style={styles.buttonText}>Entrar como convidado</Text>}
          </TouchableOpacity>

          <Text style={styles.dividerText}>ou</Text>

          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.loginText}>
              Não tem uma conta? <Text style={styles.linkText}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
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
    paddingVertical: 50,
    paddingBottom: 80,
  },

  logo: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
  },

  white: { color: "#fff" },
  red: { color: "#E32636" },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 35,
  },

  inputGroup: {
    marginBottom: 22,
  },

  inputLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5A5A5A",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#101026",
    height: 50,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    color: "#FFF",
    fontSize: 15,
  },

  forgotPassword: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 22,
  },

  errorText: {
    color: "#ff4c4c",
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },

  button: {
    backgroundColor: "#FF3F4B",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 16,
  },

  guestButton: {
    backgroundColor: "#391D8A",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  dividerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 22,
  },

  loginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 30,
  },

  linkText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "#FF3F4B",
  },

  backIcon: {
    width: 28,
    height: 28,
  },

  GoBack: {
    position: "absolute",
    top: 45,
    left: 25,
    zIndex: 1,
  },
});