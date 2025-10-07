import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { useComanda } from "../../contexts/comandaContext";
import { usePedido } from "../../contexts/pedidoContext";

export default function OrderTicket() {
  const navigation = useNavigation();
  const { comanda } = useComanda();
  const { pedido, totalPedido, statusPedido } = usePedido();

  if (!comanda) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando comanda...</Text>
      </View>
    );
  }

  const { comandaId, mesaId, numero_mesa } = comanda;

  const handleFinalize = () => {
    // Aqui você pode chamar API para finalizar a comanda
    alert(`Comanda ${numero_mesa} finalizada!`);
    // navigation.navigate("Home");
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
            style={{ width: 26, height: 26 }}
          />
        </TouchableOpacity>
        <Text style={styles.logoText}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 26 }} />
      </LinearGradient>

      {/* Conteúdo */}
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Text style={styles.title}>Comanda #{numero_mesa}</Text>

        {pedido.length === 0 ? (
          <View style={styles.noProduct}>
            <Text style={{ color: "#FFF" }}>Nenhum produto na comanda.</Text>
          </View>
        ) : (
          pedido.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text>
                Pedido #{index + 1}
              </Text>
              <Text style={styles.productName}>
                {item.name} x{item.qtd}
              </Text>

              {item.removedIngredients?.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Ingredientes Removidos:</Text>
                  {item.removedIngredients.map((ing, idx) => (
                    <Text key={idx} style={styles.itemTextRemoved}>- {ing}</Text>
                  ))}
                </View>
              )}

              {item.extras?.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Adicionais:</Text>
                  {item.extras.map((extra, idx) => (
                    <Text key={idx} style={styles.itemTextSelected}>- {extra}</Text>
                  ))}
                </View>
              )}

              <View>
                <Text>
                 Status: {statusPedido}
                </Text>
              </View>

              {item.observation && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Observação:</Text>
                  <Text style={styles.textObservation}>{item.observation}</Text>
                </View>
              )}

              <Text style={styles.totalValue}>
                Total: {formatarPreco(item.price)}
              </Text>
            </View>
          ))
        )}

        <Text style={[styles.totalValue, { textAlign: "center", fontSize: 18 }]}>
          Valor total: {formatarPreco(totalPedido)}
        </Text>
      </ScrollView>

      {/* Botão finalizar */}
      <TouchableOpacity style={styles.finishButton} onPress={handleFinalize}>
        <Text style={styles.finishText}>Finalizar Comanda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1d1d2e" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 52, paddingBottom: 12, paddingHorizontal: 20 },
  logoText: { color: "#FFF", fontSize: 22, fontWeight: "700" },
  title: { fontSize: 25, fontWeight: "700", color: "#FFF", padding: 10 },
  card: { backgroundColor: "#2a2a40", borderRadius: 12, padding: 12, marginHorizontal: 20, marginBottom: 16 },
  productName: { fontSize: 18, fontWeight: "700", color: "#FFF" },
  section: { marginTop: 8 },
  sectionTitle: { fontWeight: "700", fontSize: 14, color: "#FFF" },
  itemTextRemoved: { fontSize: 14, color: "#FF6B6B" },
  itemTextSelected: { fontSize: 14, color: "#00C851" },
  textObservation: { fontSize: 14, color: "#ccc" },
  totalValue: { fontSize: 16, fontWeight: "bold", marginTop: 10, color: "#FF3F4B" },
  finishButton: { backgroundColor: "#FF3F4B", marginHorizontal: 20, marginBottom: 20, paddingVertical: 16, borderRadius: 12, alignItems: "center" },
  finishText: { color: "#FFF", fontWeight: "700", fontSize: 18, textAlign: "center" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { color: "#FFF", fontSize: 16 },
  noProduct: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 },
});
