import React, { useState, useContext } from "react";
import { formatarPreco } from "../../components/utils/formatPrice";
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
// LinearGradient removed — using plain View for headers/buttons now
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
  totalPrice: number;
  totalPoints: number;
};

export default function Payment() {
  const navigation = useNavigation<PaymentScreenNavigationProp>();
  const route = useRoute();
  const { user, signOut } = useContext(AuthContext);
  const { comandaId, totalPoints, totalPrice } = route.params as PaymentRouteProps;

  const payWithPointsOnly = Number(totalPrice) === 0 && Number(totalPoints) > 0;

  const [selectedCard, setSelectedCard] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [finalConfirmVisible, setFinalConfirmVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [garcomClosed, setGarcomClosed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [pontosModalVisible, setPontosModalVisible] = useState(false);

  // Avaliação
  const [avaliacaoModalVisible, setAvaliacaoModalVisible] = useState(false);
  const [nota, setNota] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [enviandoAvaliacao, setEnviandoAvaliacao] = useState(false);

  const [avaliacaoConfirmadaModal, setAvaliacaoConfirmadaModal] = useState(false);
  const [notaVaziaModal, setNotaVaziaModal] = useState(false);
  const [pagamentoNaoSelecionadoModal, setPagamentoNaoSelecionadoModal] = useState(false);
  const [insufficientPointsModal, setInsufficientPointsModal] = useState(false);


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
    if (payWithPointsOnly) {
      // Se a comanda é totalmente por pontos, confirmar pagamento por pontos diretamente
      setFinalConfirmVisible(true);
      return;
    }

    if (!selectedOption) {
      setPagamentoNaoSelecionadoModal(true);
      return;
    }
    setFinalConfirmVisible(true);
  };

  const ganhoPontos = () => totalPrice * 0.25;

  const handleFinalConfirm = async () => {
    try {
      setLoading(true);

      // Se for pagamento por pontos, usamos endpoint específico
      if (payWithPointsOnly) {
        await api.put("/comanda/pagarPorPontos", { comanda_id: comandaId });

        setPaymentConfirmed(true);
        setFinalConfirmVisible(false);
        setConfirmModalVisible(true);
        return;
      }

      if (!selectedOption) {
        setPagamentoNaoSelecionadoModal(true);
        return;
      }

      let tipoPagamento = "";
      if (selectedOption === "cartao") {
        tipoPagamento = selectedCard.toLowerCase();
      } else if (selectedOption === "vale refeição") {
        tipoPagamento = "vale refeição";
      } else {
        tipoPagamento = selectedOption.toLowerCase();
      }

      await api.put("/comanda/fechar", { comanda_id: comandaId, tipoPagamento });

      setPaymentConfirmed(true);
      setFinalConfirmVisible(false);
      setConfirmModalVisible(true);
    } catch (error: any) {
      console.log("Erro ao pagar comanda:", error.response?.data || error.message);
      const msg = error.response?.data?.error || error.message || "Erro ao registrar pagamento. Tente novamente.";
      if (msg.toLowerCase().includes('ponto') || msg.toLowerCase().includes('pontos') || msg.toLowerCase().includes('insuf')) {
        setInsufficientPointsModal(true);
      } else {
        alert(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFecharGarcom = () => {
    setConfirmModalVisible(false);
    setGarcomClosed(true);

    // Se for convidado - NÃO GANHA PONTOS e pula direto para avaliação
    if (user?.guest === true) {
      setAvaliacaoModalVisible(true);
      return;
    }

    // Usuário normal - abre modal de pontos
    const pontos = ganhoPontos();
    if (pontos > 0) {
      setPontosModalVisible(true);
    } else {
      setAvaliacaoModalVisible(true);
    }
  };


  const handleFecharPontosModal = () => {
    setPontosModalVisible(false);
    setAvaliacaoModalVisible(true); // abrir avaliação após fechar modal de pontos
  };

  const handleEnviarAvaliacao = async () => {
    if (nota === 0) {
      setNotaVaziaModal(true);
      return;
    }

    try {
      setEnviandoAvaliacao(true);

      await api.post("/avaliacao", { comanda_id: comandaId, nota, descricao });

      setAvaliacaoModalVisible(false);
      setAvaliacaoConfirmadaModal(true);

      setTimeout(() => {
        signOut();
      }, 800);
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
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logoText}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 26 }} />
      </View>

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
                opacity: (garcomClosed || payWithPointsOnly) ? 0.5 : 1
              }}
              onPress={
                payWithPointsOnly ? undefined : (item.onPress || (() => setSelectedOption(item.value)))
              }
              disabled={garcomClosed || payWithPointsOnly}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.paymentIcon}
              />
              <Text style={styles.paymentLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Total a pagar</Text>
            <Text style={styles.summaryMoney}>{formatarPreco(totalPrice)}</Text>

            <View style={styles.pointsRow}>
              <Ionicons
                name="star"
                size={16}
                color="#FFD700"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.summaryPoints}>{totalPoints} pts a gastar</Text>
            </View>
          </View>

          {/* Botão confirmar */}
          <TouchableOpacity
            style={[
              styles.confirmButtonGradient,
              garcomClosed ? { backgroundColor: '#777' } : { backgroundColor: '#FF3F4B' }
            ]}
            onPress={handleConfirmPayment}
            disabled={garcomClosed || loading}
            activeOpacity={0.7}
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
        </View>
      </ScrollView>

      {/* Modal pagamento não selecionado */}
      <Modal transparent visible={pagamentoNaoSelecionadoModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text
              style={{
                color: "#FF3F4B",
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              ⚠ Forma de pagamento não selecionada
            </Text>

            <Text
              style={{
                color: "#ccc",
                fontSize: 16,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Por favor, selecione uma forma de pagamento antes de confirmar.
            </Text>

            <TouchableOpacity
              style={styles.modalButtonConfirm2}
              onPress={() => setPagamentoNaoSelecionadoModal(false)}
            >
              <Text style={styles.modalButtonText}>Entendi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Modal confirmação antes de pagar */}
      <Modal transparent visible={finalConfirmVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Confirmar pagamento?</Text>
            <Text style={styles.modalSubtitle}>
              {payWithPointsOnly ? (
                <>
                  Deseja realmente registrar o pagamento <Text style={{ color: "#00C851", fontWeight: "700" }}>com pontos</Text>?
                </>
              ) : (
                <>
                  Deseja realmente registrar o pagamento com{" "}
                  <Text style={{ color: "#00C851", fontWeight: "700" }}>
                    {selectedOption.toUpperCase()}
                  </Text>
                  ?
                </>
              )}
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
              style={styles.modalButtonConfirm2}
              onPress={handleFecharGarcom}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Ganho de Pontos */}
      <Modal transparent visible={pontosModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Ionicons name="star" size={20} color="#ffde09ff" />
            <Text style={{ color: "#FFD700", fontSize: 20, fontWeight: "700", marginBottom: 20, textAlign: "center" }}>
              Você ganhou {ganhoPontos().toFixed(2)} pontos!
            </Text>
            <TouchableOpacity
              style={styles.modalButtonConfirm2}
              onPress={handleFecharPontosModal}
            >
              <Text style={styles.modalButtonText}>Continuar</Text>
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
                  setTimeout(() => signOut(), 800);
                }}
              >
                <Text style={styles.modalButtonText}>Sair sem avaliar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Nota Obrigatória */}
      <Modal transparent visible={notaVaziaModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={{
              color: "#FF3F4B",
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 10,
              textAlign: "center"
            }}>
              ⚠ Nota obrigatória
            </Text>

            <Text style={{
              color: "#ccc",
              fontSize: 16,
              textAlign: "center",
              marginBottom: 20
            }}>
              Dê uma nota de 1 a 5 estrelas antes de enviar.
            </Text>

            <TouchableOpacity
              style={styles.modalButtonConfirm2}
              onPress={() => setNotaVaziaModal(false)}
            >
              <Text style={styles.modalButtonText}>Entendi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Pontos Insuficientes */}
      <Modal transparent visible={insufficientPointsModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={{ color: "#FF3F4B", fontSize: 18, fontWeight: "700", marginBottom: 10, textAlign: "center" }}>
              ⚠ Pontos insuficientes
            </Text>
            <Text style={{ color: "#ccc", fontSize: 16, textAlign: "center", marginBottom: 20 }}>
              Você não tem pontos suficientes para pagar os itens marcados com pontos. Remova os itens pagos com pontos antes de confirmar, ou escolha outra forma de pagamento.
            </Text>
            <TouchableOpacity
              style={styles.modalButtonConfirm2}
              onPress={() => setInsufficientPointsModal(false)}
            >
              <Text style={styles.modalButtonText}>Entendi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Avaliação Enviada */}
      <Modal transparent visible={avaliacaoConfirmadaModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={{ color: "#00C851", fontSize: 18, fontWeight: "700", marginBottom: 10, textAlign: 'center' }}>
              ✅ Avaliação enviada!
            </Text>
            <Text style={{ color: "#ccc", fontSize: 16, textAlign: "center", marginBottom: 20 }}>
              Obrigado pela sua avaliação!
            </Text>

            <TouchableOpacity
              style={styles.modalButtonConfirm2}
              onPress={() => {
                setAvaliacaoConfirmadaModal(false);
                setTimeout(() => signOut(), 300);
              }}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
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
    backgroundColor: "#1d1d2e",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff1b",
  },

  backButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800",
  },

  headerAvaliation: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  paymentIcon: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 14,
  },

  paymentLabel: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
    flex: 1,
  },

  summaryContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  summaryBox: {
    backgroundColor: "#1f1f33",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },

  summaryLabel: {
    color: "#AAA",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  summaryMoney: {
    color: "#00C851",
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 6,
  },

  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  summaryPoints: {
    color: "#FFD700",
    fontWeight: "700",
    fontSize: 15,
  },

  confirmButtonGradient: {
    borderRadius: 14,
    paddingVertical: 16,
    marginTop: 10,
    shadowColor: "#FF3F4B",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },

  confirmButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 18,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  logoutButton: {
    backgroundColor: "#FF3F4B",
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 14,
    paddingVertical: 16,
  },

  logoutButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

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

  modalTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },

  modalSubtitle: {
    color: "#AAA",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },

  modalButtonConfirm: {
    flex: 1,
    backgroundColor: "#00C851",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },

  modalButtonConfirm2: {
    backgroundColor: "#00C851",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },

  modalButtonCancel: {
    flex: 1,
    backgroundColor: "#FF3F4B",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },

  modalButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },

  textInput: {
    backgroundColor: "#1d1d2e",
    color: "#FFF",
    width: "100%",
    height: 100,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
});