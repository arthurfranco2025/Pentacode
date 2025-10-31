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

  // Avaliação
  const [avaliacaoModalVisible, setAvaliacaoModalVisible] = useState(false);
  const [nota, setNota] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [enviandoAvaliacao, setEnviandoAvaliacao] = useState(false);

  const cardOptions = [
    { label: "Crédito", value: "crédito" },
    { label: "Débito", value: "débito" },
  ];

  const handleSelectOption = (option: string) => {
    if (option === "cartao") {
      setModalVisible(true);
      return;
    }
    setSelectedOption(option);
    setSelectedCard("");
  };

  const handleSelectCard = (card: string) => {
    setSelectedCard(card);
    setSelectedOption("cartao");
    setModalVisible(false);
  };

  const handleConfirmPayment = () => {
    if (!selectedOption) {
      alert("Por favor, selecione uma forma de pagamento antes de confirmar.");
      return;
    }
    setFinalConfirmVisible(true);
  };

  const handleFinalConfirm = async () => {
    if (!selectedOption) return;
    try {
      setLoading(true);

      let tipoPagamento = "";
      if (selectedOption === "cartao") {
        tipoPagamento = selectedCard.toLowerCase();
      } else if (selectedOption === "vale refeição") {
        tipoPagamento = "vale refeição";
      } else {
        tipoPagamento = selectedOption.toLowerCase();
      }

      await api.put("/comanda/pagar", { comanda_id: comandaId, tipoPagamento });

      setPaymentConfirmed(true);
      setFinalConfirmVisible(false);
      setConfirmModalVisible(true);
    } catch (error: any) {
      console.log("Erro ao pagar comanda:", error.response?.data || error.message);
      alert(
        error.response?.data?.error || "Erro ao registrar pagamento. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFecharGarcom = () => {
    setConfirmModalVisible(false);
    setGarcomClosed(true);
    setAvaliacaoModalVisible(true);
  };

  // const handleEnviarAvaliacao = async () => {
  //   if (nota === 0) {
  //     alert("Dê uma nota de 1 a 5 estrelas antes de enviar.");
  //     return;
  //   }
  //   try {
  //     setEnviandoAvaliacao(true);
  //     await api.post("/avaliacao", { comanda_id: comandaId, nota, descricao });
  //     alert("Obrigado pela sua avaliação!");
  //     setAvaliacaoModalVisible(false);
  //     navigation.navigate("Home");
  //   } catch (error: any) {
  //     console.log("Erro ao enviar avaliação:", error.response?.data || error.message);
  //     alert(error.response?.data?.error || "Erro ao enviar avaliação.");
  //   } finally {
  //     setEnviandoAvaliacao(false);
  //   }
  // };

  const handleEnviarAvaliacao = async () => {
    if (nota === 0) {
      alert("Dê uma nota de 1 a 5 estrelas antes de enviar.");
      return;
    }

    try {
      setEnviandoAvaliacao(true);

      await api.post("/avaliacao", { comanda_id: comandaId, nota, descricao });

      alert("Obrigado pela sua avaliação!");
      setAvaliacaoModalVisible(false);

      //TENTANDO FAZER LOGOUT AUTOMÁTICO APÓS A AVALIAÇÃO 
      setTimeout(() => {
        signOut();
      }, 800); // pequeno delay pra dar tempo de o alerta sumir
    } catch (error: any) {
      console.log("Erro ao enviar avaliação:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Erro ao enviar avaliação.");
    } finally {
      setEnviandoAvaliacao(false);
    }
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#3D1F93", "#1d1d2e"]}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png" }}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
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
        <Text style={styles.sectionTitle}>Formas de Pagamento</Text>

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
                style={styles.paymentIcon}
              />
              <Text style={styles.paymentLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botão confirmar */}
        <LinearGradient
          colors={garcomClosed ? ["#777", "#555"] : ["#FF3F4B", "#e83640"]}
          style={styles.confirmButtonGradient}
        >
          <TouchableOpacity
            onPress={handleConfirmPayment}
            disabled={garcomClosed || loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.confirmButtonText}>
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
            style={styles.logoutButton}
          >
            <Text style={styles.logoutButtonText}>Sair do App</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Modal confirmação antes de pagar */}
      <Modal transparent visible={finalConfirmVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Confirmar pagamento?</Text>
            <Text style={styles.modalSubtitle}>
              Deseja realmente registrar o pagamento com{" "}
              <Text style={{ color: "#00C851", fontWeight: "700" }}>
                {selectedOption.toUpperCase()}
              </Text>
              ?
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
              <TouchableOpacity
                style={styles.modalButtonConfirm}
                onPress={handleFinalConfirm}
                disabled={loading}
              >
                {loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.modalButtonText}>Sim</Text>}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonCancel}
                onPress={() => setFinalConfirmVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Garçom */}
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
              style={styles.modalButtonConfirm}
              onPress={handleFecharGarcom}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Avaliação */}
      <Modal transparent visible={avaliacaoModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700", marginBottom: 10, textAlign: 'center' }}>
              Avalie sua experiência <Text style={styles.headerAvaliation}>
                Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
              </Text>
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
              style={styles.textInput}
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                style={styles.modalButtonConfirm}
                onPress={handleEnviarAvaliacao}
                disabled={enviandoAvaliacao}
              >
                {enviandoAvaliacao ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.modalButtonText}>Enviar</Text>}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonCancel}
                onPress={() => {
                  setAvaliacaoModalVisible(false);
                  setTimeout(() => {
                    signOut();
                  }, 800); // pequeno delay para o modal fechar antes do logout
                }}
              >
                <Text style={styles.modalButtonText}>Sair sem avaliar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de seleção de cartão */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Selecione o tipo de cartão</Text>
            {cardOptions.map((card) => (
              <TouchableOpacity
                key={card.value}
                style={{
                  paddingVertical: 12,
                  width: "50%",
                  alignItems: "center",
                  marginTop: 10,
                  backgroundColor: card.value === selectedCard ? "#00C851" : "#3D1F93",
                  borderRadius: 10
                }}
                onPress={() => handleSelectCard(card.value)}
              >
                <Text style={styles.modalButtonText}>{card.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{ paddingVertical: 12, width: "50%", alignItems: "center", marginTop: 10, backgroundColor: "#555", borderRadius: 10 }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 14,
    paddingHorizontal: 20
  },
  headerIcon: {
    width: 26,
    height: 26
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800"
  },
  headerAvaliation: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    paddingHorizontal: 20,
    marginBottom: 20
  },
  paymentIcon: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 14
  },
  paymentLabel: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
    flex: 1
  },
  confirmButtonGradient: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 14,
    paddingVertical: 16
  },
  confirmButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.8,
    textTransform: "uppercase"
  },
  logoutButton: {
    backgroundColor: "#FF3F4B",
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 14,
    paddingVertical: 16
  },
  logoutButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.8,
    textTransform: "uppercase"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalBox: {
    backgroundColor: "#2a2a40",
    padding: 24,
    borderRadius: 16,
    width: "80%",
    alignItems: "center"
  },
  modalTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center"
  },
  modalSubtitle: {
    color: "#AAA",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20
  },
  modalButtonConfirm: {
    flex: 1,
    backgroundColor: "#00C851",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5
  },
  modalButtonCancel: {
    flex: 1,
    backgroundColor: "#FF3F4B",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5
  },
  modalButtonText: {
    color: "#FFF",
    fontWeight: "700"
  },
  textInput: {
    backgroundColor: "#1d1d2e",
    color: "#FFF",
    width: "100%",
    height: 100,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top"
  }
});
