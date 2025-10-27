import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Ionicons } from "@expo/vector-icons";

type PaymentScreenNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  "Payment"
>;

type PaymentRouteProps = {
  comandaId: string;
  mesaId: string;
  numero_mesa: number;
  total: number;
};

export default function Payment() {
  const navigation = useNavigation<PaymentScreenNavigationProp>();
  const route = useRoute();
  const { comandaId } = route.params as PaymentRouteProps;
  const { signOut } = useContext(AuthContext);

  const [selectedCard, setSelectedCard] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [finalConfirmVisible, setFinalConfirmVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [garcomClosed, setGarcomClosed] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Avaliação ---
  const [avaliacaoModalVisible, setAvaliacaoModalVisible] = useState(false);
  const [nota, setNota] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [enviandoAvaliacao, setEnviandoAvaliacao] = useState(false);

  const cardOptions = [
    { label: "Crédito", value: "crédito" },
    { label: "Débito", value: "débito" },
  ];

  const handleConfirmPayment = () => {
    if (!selectedOption) {
      alert("Por favor, selecione uma forma de pagamento antes de confirmar.");
      console.log("[Payment] botão confirmar pressionado mas nenhuma opção selecionada");
      return;
    }
    console.log("[Payment] opção selecionada:", selectedOption, "selectedCard:", selectedCard);
    setFinalConfirmVisible(true);
  };

  const handleFinalConfirm = async () => {
    if (!selectedOption) return;

    try {
      console.log("[Payment] iniciando handleFinalConfirm — preparando requisição de pagamento");
      setLoading(true);

      let tipoPagamento = "";
      if (selectedOption === "cartao") {
        tipoPagamento = selectedCard.toLowerCase();
      } else if (selectedOption === "vale refeição") {
        tipoPagamento = "vale refeição";
      } else {
        tipoPagamento = selectedOption.toLowerCase();
      }

      console.log("[Payment] enviando PUT /comanda/pagar", { comanda_id: comandaId, tipoPagamento });
      const resp = await api.put("/comanda/pagar", {
        comanda_id: comandaId,
        tipoPagamento,
      });
      console.log("[Payment] resposta /comanda/pagar:", resp?.data);

      setPaymentConfirmed(true);
      setFinalConfirmVisible(false);
      setConfirmModalVisible(true);
    } catch (error: any) {
      console.log("Erro ao pagar comanda:", error.response?.data || error.message);
      alert(
        error.response?.data?.error ||
        "Erro ao registrar pagamento. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEnviarAvaliacao = async () => {
    if (nota === 0) {
      alert("Dê uma nota de 1 a 5 estrelas antes de enviar.");
      return;
    }

    try {
      setEnviandoAvaliacao(true);
      await api.post("/avaliacao", {
        comanda_id: comandaId,
        nota,
        descricao,
      });
      alert("Obrigado pela sua avaliação!");
      setAvaliacaoModalVisible(false);
      navigation.navigate("Home");
    } catch (error: any) {
      console.log("Erro ao enviar avaliação:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Erro ao enviar avaliação.");
    } finally {
      setEnviandoAvaliacao(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1d1d2e" }}>
      {/* Header */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#3D1F93", "#1d1d2e"]}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 52,
          paddingBottom: 14,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png",
            }}
            style={{ width: 26, height: 26 }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#FFF", fontSize: 22, fontWeight: "800" }}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 26 }} />
      </LinearGradient>

      {/* Conteúdo principal */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 120, paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#FFF",
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          Formas de Pagamento
        </Text>

        <View style={{ gap: 16 }}>
          {[
            {
              label: "Vale Refeição",
              value: "vale refeição",
              image:
                "https://www.cidademarketing.com.br/marketing/wp-content/uploads/2019/02/valealimentacao_pesquisa.jpg",
            },
            {
              label: "Pix QR Code",
              value: "pix",
              image: "https://img.icons8.com/color/512/pix.png",
            },
            {
              label: selectedCard
                ? cardOptions.find((o) => o.value === selectedCard)?.label
                : "Selecionar Cartão",
              value: "cartao",    
              image:
                "https://images.vexels.com/media/users/3/261853/isolated/preview/71bdb0b66f426075b049dc89581d8178-icone-de-cartoes-de-credito-de-dinheiro.png",
              onPress: () => setModalVisible(true),
            },
            {
              label: "Dinheiro",
              value: "dinheiro",
              image: "https://cdn-icons-png.flaticon.com/512/5899/5899792.png",
            },
          ].map((item) => (
            <TouchableOpacity
              key={item.value}
              style={{
                backgroundColor: "#2a2a40",
                flexDirection: "row",
                alignItems: "center",
                padding: 14,
                borderRadius: 12,
                marginHorizontal: 20,
                borderWidth: selectedOption === item.value ? 2 : 0,
                borderColor: "#00C851",
              }}
              onPress={item.onPress || (() => setSelectedOption(item.value))}
              disabled={garcomClosed}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 50, height: 50, borderRadius: 8, marginRight: 14 }}
              />
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 17,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botão confirmar */}
        <LinearGradient
          colors={garcomClosed ? ["#777", "#555"] : ["#FF3F4B", "#e83640"]}
          style={{
            marginHorizontal: 20,
            marginTop: 30,
            marginBottom: 30,
            borderRadius: 14,
            paddingVertical: 16,
          }}
        >
          <TouchableOpacity
            onPress={handleConfirmPayment}
            disabled={garcomClosed || loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: 18,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                }}
              >
                {paymentConfirmed
                  ? garcomClosed
                    ? "Pagamento Finalizado"
                    : "Forma de Pagamento Confirmada"
                  : "Confirmar Pagamento"}
              </Text>
            )}
          </TouchableOpacity>
        </LinearGradient>

        {garcomClosed && (
          <TouchableOpacity
            onPress={signOut}
            style={{
              backgroundColor: "#FF3F4B",
              marginHorizontal: 20,
              marginBottom: 40,
              borderRadius: 14,
              paddingVertical: 16,
            }}
          >
            <Text
              style={{
                color: "#FFF",
                textAlign: "center",
                fontWeight: "700",
                fontSize: 18,
                letterSpacing: 0.8,
                textTransform: "uppercase",
              }}
            >
              Sair do App
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* modal de confirmação antes de enviar pagamento */}
      <Modal transparent visible={finalConfirmVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Confirmar pagamento?
            </Text>
            <Text
              style={{
                color: "#AAA",
                fontSize: 15,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Deseja realmente registrar o pagamento com{" "}
              <Text style={{ color: "#00C851", fontWeight: "700" }}>
                {selectedOption.toUpperCase()}
              </Text>
              ?
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#00C851",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                }}
                onPress={handleFinalConfirm}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <Text style={{ color: "#FFF", fontWeight: "700" }}>Sim</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#FF3F4B",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                }}
                onPress={() => setFinalConfirmVisible(false)}
              >
                <Text style={{ color: "#FFF", fontWeight: "700" }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de confirmação de pagamento */}
      <Modal transparent visible={confirmModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={{ color: "#00C851", fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
              ✅ Forma de Pagamento Confirmada!
            </Text>
            <Text style={{ color: "#ccc", fontSize: 16, textAlign: "center", marginBottom: 20 }}>
              O garçom está a caminho com sua comanda!
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FF3F4B",
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 10,
                width: "50%",
                alignItems: "center",
              }}
              onPress={() => {
                setConfirmModalVisible(false);
                setGarcomClosed(true);
                setAvaliacaoModalVisible(true);
              }}
            >
              <Text style={{ color: "#FFF", fontWeight: "700" }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de Avaliação */}
      <Modal transparent visible={avaliacaoModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { backgroundColor: "#2a2a40" }]}>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700", marginBottom: 10 }}>
              Avalie sua experiência 🍕
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <TouchableOpacity key={n} onPress={() => setNota(n)}>
                  <Ionicons
                    name={n <= nota ? "star" : "star-outline"}
                    size={36}
                    color={n <= nota ? "#FFD700" : "#AAA"}
                    style={{ marginHorizontal: 4 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TextInput
              placeholder="Escreva um comentário (opcional)"
              placeholderTextColor="#AAA"
              multiline
              value={descricao}
              onChangeText={setDescricao}
              style={{
                backgroundColor: "#1d1d2e",
                color: "#FFF",
                width: "100%",
                minHeight: 80,
                borderRadius: 10,
                padding: 10,
                marginBottom: 20,
                textAlignVertical: "top",
              }}
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#00C851",
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: "center",
                }}
                onPress={handleEnviarAvaliacao}
                disabled={enviandoAvaliacao}
              >
                {enviandoAvaliacao ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <Text style={{ color: "#FFF", fontWeight: "700" }}>Enviar</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#FF3F4B",
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: "center",
                }}
                onPress={() => setAvaliacaoModalVisible(false)}
              >
                <Text style={{ color: "#FFF", fontWeight: "700" }}>Sair sem avaliar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#2a2a40",
    padding: 24,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
  },
});
