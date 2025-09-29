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
  const { signUp, loadingAuth } = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");

  const [data_nasc, setData_Nasc] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  const [error, setError] = useState("");

  function handleHasLogin(){
    navigation.navigate('SignIn')
  }

  async function handleSubmit() {

    try {
    if (name === '' || email === '' || password === '' || confirmPassword === '' || cpf === '' || !data_nasc) {
      setError('Preencha todos os campos!');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }
    
    setError('')

    await signUp({
      name, 
      email, 
      password, 
      cpf, 
      data_nasc
    });

    console.log('Cadastro realizado com sucesso!');
    // navigation.navigate('SignIn')
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      })
    );
    
  } catch (err: any) { 
    let mensagem = 'Erro desconhecido';

    if (err.response?.data?.message) {
      mensagem = err.response.data.message; 
    } else if (err.message) {
      mensagem = err.message; 
    }

    setError('Erro ao cadastrar!\n'+mensagem);
    console.log('Erro:', mensagem);
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

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CPF</Text>
            <TextInput
              placeholder="Digite seu CPF"
              placeholderTextColor="#8A8A8A"
              value={cpf}
              onChangeText={setCpf}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Data de Nascimento:</Text>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.7} // efeito de opacidade ao tocar
            >
              <Text style={styles.buttonText2}>
                {data_nasc instanceof Date
                  ? data_nasc.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                  : 'Selecione uma data'}
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

          {/* Mostra o erro somente se existir */}
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit} disabled={loadingAuth}>
            <Text style={styles.buttonText}>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</Text>
          </TouchableOpacity>

          <Text style={styles.dividerText}>ou</Text>

          <TouchableOpacity onPress={handleHasLogin}>
            <Text style={styles.loginText}>Possui conta? Login</Text>
          </TouchableOpacity>

            {/* /* <TouchableOpacity onPress={handleHasLogin}>
              <Text style={styles.loginText}>Entrar como convidado</Text>''
            </TouchableOpacity> FUTURA FUNCAO DE ENTRAR COMO CONVIDADO - poc */ }

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
  buttonSubmit: {
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
  buttonText2: {
    color: "#8A8A8A",
    fontSize: 14,
    textAlign: 'left',
  },
  buttonDate: {
    backgroundColor: "#101026",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
    outlineWidth: 1,
    outlineColor: "#8A8A8A"
  },
  dividerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 60,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
    fontWeight: "bold",
  },
  // HasLoginText: {
  //   textAlign: "center",
  //   color: "#fff",
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   marginBottom: 60,
  //   textDecorationLine: 'underline',
  // }
})
