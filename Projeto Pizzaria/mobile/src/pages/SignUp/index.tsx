import React, { useState, useContext } from "react";
import { useNavigation, NavigationProp, CommonActions } from "@react-navigation/native";
import { DateTimePickerEvent, default as DateTimePicker } from "@react-native-community/datetimepicker";
import { AuthContext } from "../../contexts/AuthContext";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [data_nasc, setData_Nasc] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState("");

  function handleHasLogin() {
    navigation.navigate("SignIn");
  }

  async function handleSubmit() {
    try {
      if (name === "" || email === "" || password === "" || confirmPassword === "" || cpf === "" || !data_nasc) {
        setError("Preencha todos os campos!");
        return;
      }

      if (password !== confirmPassword) {
        setError("As senhas não coincidem!");
        return;
      }

      setError("");

      await signUp({
        name,
        email,
        password,
        cpf,
        data_nasc,
      });

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        })
      );
    } catch (err: any) {
      let mensagem = "Erro desconhecido";

      if (err.response?.data?.message) {
        mensagem = err.response.data.message;
      } else if (err.message) {
        mensagem = err.message;
      }

      setError("Erro ao cadastrar!\n" + mensagem);
      console.log("Erro:", mensagem);
    }
  }

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) setData_Nasc(selectedDate);
  };

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

          {/* Campos de entrada */}
          {[
            { label: "Nome", value: name, onChange: setName, placeholder: "Digite seu nome" },
            { label: "Email", value: email, onChange: setEmail, placeholder: "Digite seu email" },
            { label: "Senha", value: password, onChange: setPassword, placeholder: "Digite sua senha", secure: true },
            { label: "Confirmar senha", value: confirmPassword, onChange: setConfirmPassword, placeholder: "Confirme sua senha", secure: true },
            { label: "CPF", value: cpf, onChange: setCpf, placeholder: "Digite seu CPF" },
          ].map((field, index) => (
            <View style={styles.inputGroup} key={index}>
              <Text style={styles.inputLabel}>{field.label}</Text>
              <TextInput
                placeholder={field.placeholder}
                placeholderTextColor="#8A8A8A"
                value={field.value}
                onChangeText={field.onChange}
                style={styles.input}
                secureTextEntry={field.secure || false}
              />
            </View>
          ))}

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Data de Nascimento</Text>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText2}>
                {data_nasc instanceof Date
                  ? data_nasc.toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  : "Selecione uma data"}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={new Date(data_nasc)}
                mode="date"
                display="default"
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}
          </View>

          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit} disabled={loadingAuth}>
            <Text style={styles.buttonText}>{loadingAuth ? "Carregando..." : "Cadastrar"}</Text>
          </TouchableOpacity>

          <Text style={styles.dividerText}>ou</Text>

          <TouchableOpacity onPress={handleHasLogin}>
            <Text style={styles.loginText}>
              Já possui uma conta?{" "}
              <Text style={styles.linkText}>Login</Text>
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
  buttonDate: {
    backgroundColor: "#101026",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#8A8A8A",
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "flex-start",
  },
  buttonText2: {
    color: "#8A8A8A",
    fontSize: 14,
  },
  buttonSubmit: {
    backgroundColor: "#FF3F4B",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
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
  errorText: {
    color: "red",
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});