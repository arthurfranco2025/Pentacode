import React, { useState, useContext } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
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
import DateTimePicker from "@react-native-community/datetimepicker";

import { AuthContext } from "../../contexts/AuthContext";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export default function SignUp() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState("");

  function handleSignIn() {
    navigation.navigate("SignIn");
  }

  function formatarCPF(value: string) {
    let cpfNumeros = value.replace(/\D/g, "");
    if (cpfNumeros.length > 11) cpfNumeros = cpfNumeros.slice(0, 11);
    cpfNumeros = cpfNumeros.replace(/(\d{3})(\d)/, "$1.$2");
    cpfNumeros = cpfNumeros.replace(/(\d{3})(\d)/, "$1.$2");
    cpfNumeros = cpfNumeros.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpfNumeros;
  }

  async function handleSignUp() {
    if (!name || !email || !password || !cpf || !dataNasc) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      await signUp({
        name,
        email,
        password,
        cpf: cpf.replace(/\D/g, ""), // envia só números para o backend
        data_nasc: dataNasc,
      });
      setError("");
      navigation.navigate("SignIn");
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

          <Text style={styles.title}>Cadastro</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor="#8A8A8A"
              value={name}
              onChangeText={(text) => { setName(text); setError(""); }}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder="Digite seu email"
              placeholderTextColor="#8A8A8A"
              value={email}
              onChangeText={(text) => { setEmail(text); setError(""); }}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor="#8A8A8A"
              value={password}
              onChangeText={(text) => { setPassword(text); setError(""); }}
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CPF</Text>
            <TextInput
              placeholder="000.000.000-00"
              placeholderTextColor="#8A8A8A"
              value={cpf}
              onChangeText={(text) => { setCpf(formatarCPF(text)); setError(""); }}
              style={styles.input}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Data de Nascimento</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={[styles.input, { justifyContent: "center" }]}
            >
              <Text style={{ color: "#8A8A8A" }}>
                {dataNasc.toLocaleDateString("pt-BR")}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={dataNasc}
                mode="date"
                display="calendar"
                maximumDate={new Date()}
                onChange={(_, date) => {
                  setShowDatePicker(false);
                  if (date) setDataNasc(date);
                }}
              />
            )}
          </View>

          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignUp}
            disabled={loadingAuth}
          >
            {loadingAuth ? (
              <ActivityIndicator size={25} color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Cadastrar</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.dividerText}>ou</Text>

          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.loginText}>
              Já tem uma conta?{" "}
              <Text style={styles.linkText}>Faça login</Text>
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
    marginBottom: 60,
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
  errorText: {
    color: "red",
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
