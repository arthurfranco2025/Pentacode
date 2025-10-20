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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamsList } from "../../routes/app.routes";
import { useComanda } from "../../contexts/comandaContext";
import { usePedido } from "../../contexts/pedidoContext";
import { formatarPreco } from "../../components/utils/formatPrice";

export default function OrderTicket() {
  const navigation = useNavigation<NavigationProp<StackParamsList, "OrderTicket">>();
  const { comanda } = useComanda();
  const { pedido, totalPedido, pedidoStatus } = usePedido();

  if (!comanda) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando comanda...</Text>
      </View>
    );
  }

  const { comandaId, mesaId, numero_mesa } = comanda;

  const handleGoToPayment = () => {
    navigation.navigate("Payment", {
      comandaId,
      mesaId,
      numero_mesa,
      total: totalPedido,
    });
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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Comanda #{numero_mesa}</Text>

        {pedido.length === 0 ? (
          <View style={styles.noProduct}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>Nenhum produto na comanda.</Text>
          </View>
        ) : (
          pedido.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.pedidoNumber}>Pedido #{index + 1}</Text>
                <Text style={styles.priceTag}>
                  {formatarPreco(item.totalPrice ?? item.price)}
                </Text>
              </View>

              <Text style={styles.productName}>
                {item.name} x{item.qtd}
              </Text>

              {item.secondFlavor && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>2º Sabor</Text>
                  <Text style={styles.itemTextSelected}>{item.secondFlavor.name}</Text>
                </View>
              )}

              {item.removedIngredients?.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Ingredientes Removidos</Text>
                  {item.removedIngredients.map((ing, idx) => (
                    <Text key={idx} style={styles.itemTextRemoved}>– {ing}</Text>
                  ))}
                </View>
              )}

              {item.extras?.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Adicionais</Text>
                  {item.extras.map((extra, idx) => (
                    <Text key={idx} style={styles.itemTextSelected}>+ {extra}</Text>
                  ))}
                </View>
              )}

              {item.observation && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Observação</Text>
                  <Text style={styles.textObservation}>{item.observation}</Text>
                </View>
              )}

              {pedidoStatus && (
                <View style={{ alignItems: 'flex-start', marginVertical: 10 }}>
                  <Text style={{ color: "#FFF", fontSize: 16 }}>
                    Status do pedido: <Text style={{ fontWeight: 'bold', color: "#FF3F4B" }}>{pedidoStatus}</Text>
                  </Text>
                </View>
              )}
            </View>
          ))
        )}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Valor total:
          </Text>
          <Text style={styles.totalValue}>
            {formatarPreco(
              pedido.reduce((acc, item) => acc + (item.totalPrice ?? item.price), 0)
            )}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonsRow} />

        <TouchableOpacity
          style={styles.buttonAddMore}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Adicionar mais itens</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.finishButton}
          onPress={handleGoToPayment}
        >
          <Text style={styles.finishText}>Ir para pagamento</Text>
        </TouchableOpacity>

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
    paddingHorizontal: 20, elevation: 5
  },
  logoText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1.2
  },
  scrollContent: {
    paddingBottom: 140,
    paddingTop: 10
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFF",
    paddingHorizontal: 20,
    marginBottom: 10
  },
  card: {
    backgroundColor: "#2a2a40",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 2
    },
    shadowRadius: 4,
    elevation: 4
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6
  },
  pedidoNumber: {
    color: "#aaa",
    fontSize: 13,
    fontWeight: "600"
  },
  priceTag: {
    color: "#00C851",
    fontWeight: "700",
    fontSize: 16
  },
  productName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 6
  },
  section: {
    marginTop: 8
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: "#FFF",
    marginBottom: 4
  },
  itemTextRemoved: {
    fontSize: 14,
    color: "#FF6B6B",
    marginLeft: 4
  },
  itemTextSelected: {
    fontSize: 14,
    color: "#00B347",
    marginLeft: 4
  },
  textObservation: {
    fontSize: 14,
    color: "#ccc",
    marginLeft: 4
  },
  totalContainer: {
    backgroundColor: "#2a2a40",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  totalText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600"
  },
  totalValue: {
    color: "#00C851",
    fontSize: 18,
    fontWeight: "800"
  },
  finishButton: {
    backgroundColor: "#FF3F4B",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 14,
    elevation: 8,
    shadowColor: "#FF3F4B"
  },
  buttonsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  buttonAddMore: {
    backgroundColor: "#5A3FFF",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 14,
    elevation: 8,
    shadowColor: "#5A3FFF"
  },
  buttonFinish: {
    backgroundColor: "#FF3F4B",
    marginRight: 20,
    elevation: 8,
    shadowColor: "#FF3F4B",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  finishText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color: "#FFF",
    fontSize: 16
  },
  noProduct: {
    backgroundColor: "#1d1d2e",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    padding: 20
  },
})