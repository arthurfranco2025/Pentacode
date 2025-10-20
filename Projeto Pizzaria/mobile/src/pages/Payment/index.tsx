import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";

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

  const cardOptions = [
    { label: "Crédito", value: "crédito" },
    { label: "Débito", value: "débito" },
  ];

  const handleConfirmPayment = () => {
    if (!selectedOption) return;
    setFinalConfirmVisible(true);
  };

  const handleFinalConfirm = async () => {
    if (!selectedOption) return;

    try {
      setLoading(true);

      // Garantindo que o tipoPagamento bate com o backend
      let tipoPagamento = "";
      if (selectedOption === "cartao") {
        tipoPagamento = selectedCard.toLowerCase(); // 'crédito' ou 'débito'
      } else if (selectedOption === "vale refeição") {
        tipoPagamento = "vale refeição";
      } else {
        tipoPagamento = selectedOption.toLowerCase(); // pix ou dinheiro
      }

      await api.put("/comanda/pagar", {
        comanda_id: comandaId,
        tipoPagamento,
      });

      setPaymentConfirmed(true);
      setFinalConfirmVisible(false);
      setConfirmModalVisible(true);
    } catch (error: any) {
      console.log(
        "Erro ao pagar comanda:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.error ||
          "Erro ao registrar pagamento. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1d1d2e" }}>
      {/* Header */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#3D1F93", "#1d1d2e"]}
        style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 52, paddingBottom: 14, paddingHorizontal: 20 }}
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

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 120, paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#FFF", paddingHorizontal: 20, marginBottom: 20 }}>
          Formas de Pagamento
        </Text>

        <View style={{ gap: 16 }}>
          {/* Vale Refeição */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2a2a40",
              flexDirection: "row",
              alignItems: "center",
              padding: 14,
              borderRadius: 12,
              marginHorizontal: 20,
              borderWidth: selectedOption === "vale refeição" ? 2 : 0,
              borderColor: "#00C851",
            }}
            onPress={() => setSelectedOption("vale refeição")}
            disabled={garcomClosed}
          >
            <Image
              source={{
                uri: "https://www.cidademarketing.com.br/marketing/wp-content/uploads/2019/02/valealimentacao_pesquisa.jpg",
              }}
              style={{ width: 50, height: 50, borderRadius: 8, marginRight: 14 }}
            />
            <Text style={{ color: "#FFF", fontSize: 17, fontWeight: "600", flex: 1 }}>
              Vale Refeição
            </Text>
          </TouchableOpacity>

          {/* Pix */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2a2a40",
              flexDirection: "row",
              alignItems: "center",
              padding: 14,
              borderRadius: 12,
              marginHorizontal: 20,
              borderWidth: selectedOption === "pix" ? 2 : 0,
              borderColor: "#00C851",
            }}
            onPress={() => setSelectedOption("pix")}
            disabled={garcomClosed}
          >
            <Image
              source={{ uri: "https://img.icons8.com/color/512/pix.png" }}
              style={{ width: 50, height: 50, borderRadius: 8, marginRight: 14 }}
            />
            <Text style={{ color: "#FFF", fontSize: 17, fontWeight: "600", flex: 1 }}>
              Pix QR Code
            </Text>
          </TouchableOpacity>

          {/* Cartão */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2a2a40",
              flexDirection: "row",
              alignItems: "center",
              padding: 14,
              borderRadius: 12,
              marginHorizontal: 20,
              borderWidth: selectedOption === "cartao" ? 2 : 0,
              borderColor: "#00C851",
            }}
            onPress={() => setModalVisible(true)}
            disabled={garcomClosed}
          >
            <Image
              source={{
                uri: "https://images.vexels.com/media/users/3/261853/isolated/preview/71bdb0b66f426075b049dc89581d8178-icone-de-cartoes-de-credito-de-dinheiro.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 8, marginRight: 14 }}
            />
            <Text style={{ color: "#FFF", fontSize: 17, fontWeight: "600", flex: 1 }}>
              {selectedCard
                ? cardOptions.find((o) => o.value === selectedCard)?.label
                : "Selecionar Cartão"}
            </Text>
          </TouchableOpacity>

          {/* Dinheiro */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2a2a40",
              flexDirection: "row",
              alignItems: "center",
              padding: 14,
              borderRadius: 12,
              marginHorizontal: 20,
              borderWidth: selectedOption === "dinheiro" ? 2 : 0,
              borderColor: "#00C851",
            }}
            onPress={() => setSelectedOption("dinheiro")}
            disabled={garcomClosed}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/5899/5899792.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 8, marginRight: 14 }}
            />
            <Text style={{ color: "#FFF", fontSize: 17, fontWeight: "600", flex: 1 }}>
              Dinheiro
            </Text>
          </TouchableOpacity>
        </View>

        {/* Botão confirmar */}
        <LinearGradient
          colors={garcomClosed ? ["#777", "#555"] : ["#FF3F4B", "#e83640"]}
          style={{ marginHorizontal: 20, marginTop: 30, marginBottom: 30, borderRadius: 14, paddingVertical: 16 }}
        >
          <TouchableOpacity
            onPress={handleConfirmPayment}
            disabled={garcomClosed || loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={{ color: "#FFF", textAlign: "center", fontWeight: "700", fontSize: 18, letterSpacing: 0.8, textTransform: "uppercase" }}>
                {paymentConfirmed
                  ? garcomClosed
                    ? "Pagamento Finalizado"
                    : "Forma de Pagamento Confirmada"
                  : "Confirmar Pagamento"}
              </Text>
            )}
          </TouchableOpacity>
        </LinearGradient>

        {/* Logout */}
        {garcomClosed && (
          <TouchableOpacity onPress={signOut} style={{ backgroundColor: "#FF3F4B", marginHorizontal: 20, marginBottom: 40, borderRadius: 14, paddingVertical: 16 }}>
            <Text style={{ color: "#FFF", textAlign: "center", fontWeight: "700", fontSize: 18, letterSpacing: 0.8, textTransform: "uppercase" }}>
              Sair do App
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Modal cartão */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={{ flex:1, backgroundColor:"rgba(0,0,0,0.6)", justifyContent:"center", alignItems:"center" }}>
          <View style={{ backgroundColor:"#2a2a40", padding:24, borderRadius:16, width:"80%", alignItems:"center" }}>
            <Text style={{ color:"#FFF", fontSize:18, fontWeight:"700", marginBottom:10, textAlign:"center" }}>Escolha o tipo de cartão</Text>
            {cardOptions.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                style={{ backgroundColor:"#3D1F93", paddingVertical:12, borderRadius:10, marginTop:10, width:"50%", alignItems:"center" }}
                onPress={() => {
                  setSelectedCard(opt.value);
                  setSelectedOption("cartao");
                  setModalVisible(false);
                }}
              >
                <Text style={{ color:"#FFF", fontWeight:"700" }}>{opt.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{ backgroundColor:"#555", paddingVertical:12, borderRadius:10, marginTop:10, width:"50%", alignItems:"center" }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color:"#FFF", fontWeight:"700" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal confirmar pagamento */}
      <Modal transparent visible={finalConfirmVisible} animationType="fade">
        <View style={{ flex:1, backgroundColor:"rgba(0,0,0,0.6)", justifyContent:"center", alignItems:"center" }}>
          <View style={{ backgroundColor:"#2a2a40", padding:24, borderRadius:16, width:"80%", alignItems:"center" }}>
            <Text style={{ color:"#FFF", fontSize:18, fontWeight:"700", marginBottom:10, textAlign:"center" }}>Confirmar forma de pagamento?</Text>
            <Text style={{ color:"#ccc", fontSize:16, textAlign:"center", marginBottom:20 }}>
              {selectedOption === "cartao"
                ? cardOptions.find((o) => o.value === selectedCard)?.label
                : selectedOption}
            </Text>
            <View style={{ flexDirection:"row", gap:10 }}>
              <TouchableOpacity
                style={{ backgroundColor:"#00C851", paddingVertical:12, borderRadius:10, marginTop:10, width:"50%", alignItems:"center" }}
                onPress={handleFinalConfirm}
              >
                <Text style={{ color:"#FFF", fontWeight:"700" }}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor:"#FF3F4B", paddingVertical:12, borderRadius:10, marginTop:10, width:"50%", alignItems:"center" }}
                onPress={() => setFinalConfirmVisible(false)}
              >
                <Text style={{ color:"#FFF", fontWeight:"700" }}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal final */}
      <Modal transparent visible={confirmModalVisible} animationType="fade">
        <View style={{ flex:1, backgroundColor:"rgba(0,0,0,0.6)", justifyContent:"center", alignItems:"center" }}>
          <View style={{ backgroundColor:"#2a2a40", padding:24, borderRadius:16, width:"80%", alignItems:"center" }}>
            <Text style={{ color:"#00C851", fontSize:18, fontWeight:"700", marginBottom:10, textAlign:"center" }}>✅ Forma de Pagamento Confirmada!</Text>
            <Text style={{ color:"#ccc", fontSize:16, textAlign:"center", marginBottom:20 }}>
              O garçom está a caminho com sua comanda!
            </Text>
            <TouchableOpacity
              style={{ backgroundColor:"#FF3F4B", paddingVertical:12, borderRadius:10, marginTop:10, width:"50%", alignItems:"center" }}
              onPress={() => {
                setConfirmModalVisible(false);
                setGarcomClosed(true);
              }}
            >
              <Text style={{ color:"#FFF", fontWeight:"700" }}>Fechar</Text>
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
  logoutButton: {
    backgroundColor: "#FF3F4B",
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 14,
    paddingVertical: 16,
    shadowColor: "#ff00ccff",
    elevation: 6,
  },
  logoutText: {
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