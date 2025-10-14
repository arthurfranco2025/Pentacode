import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { AuthContext } from "../../contexts/AuthContext";

type PaymentScreenNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  "Payment"
>;

export default function Payment() {
  const [selectedCard, setSelectedCard] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [finalConfirmVisible, setFinalConfirmVisible] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const navigation = useNavigation<PaymentScreenNavigationProp>();
  const { signOut } = useContext(AuthContext);

  const cardOptions = [
    { label: "Crédito", value: "credito" },
    { label: "Débito", value: "debito" },
  ];

  const handleConfirmPayment = () => {
    if (!selectedOption) return;
    setFinalConfirmVisible(true);
  };

  const handleFinalConfirm = () => {
    setFinalConfirmVisible(false);
    setConfirmModalVisible(true);
    setPaymentConfirmed(true);
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
            source={{
              uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png",
            }}
            style={{ width: 26, height: 26 }}
          />
        </TouchableOpacity>
        <Text style={styles.logoText}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 26 }} />
      </LinearGradient>

      {/* Conteúdo */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Formas de Pagamento</Text>

        <View style={styles.optionsWrapper}>
          {/* Vale Refeição */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedOption === "Vale Refeição" && styles.optionSelected,
            ]}
            onPress={() => setSelectedOption("Vale Refeição")}
            disabled={paymentConfirmed}
          >
            <Image
              source={{
                uri: "https://www.cidademarketing.com.br/marketing/wp-content/uploads/2019/02/valealimentacao_pesquisa.jpg",
              }}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Vale Refeição</Text>
          </TouchableOpacity>

          {/* Pix */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedOption === "PIX" && styles.optionSelected,
            ]}
            onPress={() => setSelectedOption("PIX")}
            disabled={paymentConfirmed}
          >
            <Image
              source={{ uri: "https://img.icons8.com/color/512/pix.png" }}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Pix QR Code</Text>
          </TouchableOpacity>

          {/* Cartão */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedOption === "cartao" && styles.optionSelected,
            ]}
            onPress={() => setModalVisible(true)}
            disabled={paymentConfirmed}
          >
            <Image
              source={{
                uri: "https://images.vexels.com/media/users/3/261853/isolated/preview/71bdb0b66f426075b049dc89581d8178-icone-de-cartoes-de-credito-de-dinheiro.png",
              }}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>
              {selectedCard
                ? cardOptions.find((o) => o.value === selectedCard)?.label
                : "Selecionar Cartão"}
            </Text>
          </TouchableOpacity>

          {/* Dinheiro */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedOption === "Dinheiro" && styles.optionSelected,
            ]}
            onPress={() => setSelectedOption("Dinheiro")}
            disabled={paymentConfirmed}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/5899/5899792.png",
              }}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Dinheiro</Text>
          </TouchableOpacity>
        </View>

        {/* Botão principal */}
        <LinearGradient
          colors={["#FF3F4B", "#e83640"]}
          style={styles.confirmButton}
        >
          <TouchableOpacity onPress={handleConfirmPayment}>
            <Text style={styles.confirmText}>
              {paymentConfirmed
                ? "Forma de Pagamento Confirmada"
                : "Confirmar Pagamento"}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>

      {/* Modal de tipo de cartão */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Escolha o tipo de cartão</Text>
            {cardOptions.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                style={styles.modalButton}
                onPress={() => {
                  setSelectedCard(opt.value);
                  setSelectedOption("cartao");
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalButtonText}>{opt.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#555" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de confirmação */}
      <Modal transparent visible={finalConfirmVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Confirmar pagamento?</Text>
            <Text style={styles.modalSubtitle}>
              {selectedOption === "cartao"
                ? cardOptions.find((o) => o.value === selectedCard)?.label
                : selectedOption}
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#00C851" }]}
                onPress={handleFinalConfirm}
              >
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#FF3F4B" }]}
                onPress={() => setFinalConfirmVisible(false)}
              >
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal final */}
      <Modal transparent visible={confirmModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={[styles.modalTitle, { color: "#00C851" }]}>
              ✅ Pagamento Confirmado!
            </Text>
            <Text style={styles.modalSubtitle}>
              O garçom está a caminho 🍕
            </Text>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#FF3F4B" }]}
              onPress={() => setConfirmModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1d1d2e" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  logoText: { color: "#FFF", fontSize: 22, fontWeight: "800" },
  scrollContent: { paddingBottom: 120, paddingTop: 10 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  optionsWrapper: { gap: 16 },
  optionCard: {
    backgroundColor: "#2a2a40",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  optionSelected: { borderWidth: 2, borderColor: "#00C851" },
  optionImage: { width: 50, height: 50, borderRadius: 8, marginRight: 14 },
  optionText: { color: "#FFF", fontSize: 17, fontWeight: "600", flex: 1 },
  confirmButton: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 14,
    paddingVertical: 16,
    shadowColor: "#FF3F4B",
    elevation: 6,
  },
  confirmText: {
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
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#3D1F93",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    width: "50%",
    alignItems: "center",
  },
  modalButtonText: { color: "#FFF", fontWeight: "700" },
  modalActions: { flexDirection: "row", gap: 10 },
});
