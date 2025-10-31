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

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        navigation.goBack();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [navigation])
  );

  function handleGoBack() {
    navigation.goBack();
  }

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
      <TouchableOpacity onPress={handleGoBack} style={styles.GoBack}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/m6rofw5v_expires_30_days.png",
          }}
          resizeMode="stretch"
          style={styles.backIcon}
        />
      </TouchableOpacity>

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

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.loginText}>
              Esqueceu sua senha? <Text style={styles.linkText}>Clique aqui</Text>
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
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 58,
    fontWeight: "bold",
    textAlign: "center",
  },
  white: { color: "#fff" },
  red: { color: "#E32636" },
  title: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8A8A8A",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#101026",
    height: 45,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#F0F0F0",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#FF3F4B",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 14,
  },
  guestButton: {
    backgroundColor: "#391D8A",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  dividerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 18,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 20,
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
  errorText: {
    color: "red",
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
