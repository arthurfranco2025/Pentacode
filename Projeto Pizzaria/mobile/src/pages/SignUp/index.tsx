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
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
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
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    if (!name || !email || !password || !confirmPassword || !cpf || !dataNasc) {
      setError("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
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

          {/* Nome */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nome</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#8A8A8A" style={styles.icon} />
              <TextInput
                placeholder="Digite seu nome"
                placeholderTextColor="#8A8A8A"
                value={name}
                onChangeText={(text) => { setName(text); setError(""); }}
                style={styles.input}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#8A8A8A" style={styles.icon} />
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
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ marginLeft: 8 }}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#8A8A8A"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirmar Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Confirmar Senha</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#8A8A8A" style={styles.icon} />
              <TextInput
                placeholder="Confirme sua senha"
                placeholderTextColor="#8A8A8A"
                value={confirmPassword}
                onChangeText={(text) => { setConfirmPassword(text); setError(""); }}
                style={styles.input}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ marginLeft: 8 }}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#8A8A8A"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* CPF */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CPF</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="id-card" size={20} color="#8A8A8A" style={styles.icon} />
              <TextInput
                placeholder="000.000.000-00"
                placeholderTextColor="#8A8A8A"
                value={cpf}
                onChangeText={(text) => { setCpf(formatarCPF(text)); setError(""); }}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Data de Nascimento */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Data de Nascimento</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={[styles.inputWrapper, { justifyContent: "flex-start" }]}
            >
              <Ionicons name="calendar-outline" size={20} color="#8A8A8A" style={styles.icon} />
              <Text style={{ color: "#F0F0F0" }}>
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
    marginRight: 5,
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
  errorText: {
    color: "red",
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
