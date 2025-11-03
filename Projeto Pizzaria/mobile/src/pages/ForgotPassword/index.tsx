import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export default function ForgotPassword() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleForgotPassword() {
    if (!email) {
      setError("Por favor, insira seu email");
      return;
    }

    try {
      setLoading(true);
      // Aqui você faria a requisição real para o backend futuramente.
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simula envio
      setLoading(false);
      setError("");
      alert("Link de redefinição enviado para o seu email!");
      navigation.navigate("SignIn");
    } catch (err) {
      setLoading(false);
      setError("Erro ao enviar email. Tente novamente.");
    }
  }

  function handleBackToSignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.scrollView}>
          {/* Logo */}
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/k5Lg2oImfD/aq8ll7e9_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image}
          />

          <View style={styles.view}>
            <View style={styles.column}>
              <View style={styles.view2}>
                <Text style={styles.text}>Penta</Text>
              </View>
              <Text style={styles.text2}>Pizza</Text>
            </View>
          </View>

          <Text style={styles.text3}>Esqueceu a senha?</Text>

          <View style={styles.column2}>
            <Text style={styles.text4}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#8A8A8A" style={styles.icon} />
              <TextInput
                placeholder="Digite seu email"
                placeholderTextColor="#8A8A8A"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setError("");
                }}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity
            style={styles.view3}
            onPress={handleForgotPassword}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size={25} color="#fff" />
            ) : (
              <Text style={styles.text5}>Enviar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBackToSignIn}>
            <Text style={styles.backText}>Voltar para login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D2E",
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: 46,
    height: 46,
    marginTop: 11,
    marginLeft: 11,
  },
  view: {
    alignItems: "center",
    marginBottom: 57,
  },
  column: {
    paddingVertical: 4,
    paddingHorizontal: 1,
  },
  view2: {
    alignItems: "flex-end",
  },
  text: {
    color: "#FF3F4B",
    fontSize: 48,
    fontWeight: "bold",
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "bold",
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 58,
    marginHorizontal: 22,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  column2: {
    marginBottom: 19,
    marginHorizontal: 44,
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
  view3: {
    backgroundColor: "#FF3F4B",
    borderRadius: 3,
    paddingVertical: 11,
    marginBottom: 40,
    marginHorizontal: 44,
    alignItems: "center",
  },
  text5: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  backText: {
    color: "#FFFFFF",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
