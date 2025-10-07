import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { api } from "../../services/api";
import { useComanda } from "../../contexts/comandaContext";

type RootStackParamList = {
  Home: undefined;
  Order: undefined;
  OrderTicket: undefined;
};

export default function OrderTicket() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { comanda, setComanda, calcularTotalComanda } = useComanda();
  const [loading, setLoading] = useState(true);

  async function listarPedidosDaComanda() {
    if (!comanda?.comandaId) return;
    try {
      const response = await api.get(`/pedido/comanda/${comanda.comandaId}`);
      console.log("Pedidos na comanda:", response.data);

      // Atualiza os pedidos dentro da comanda
      setComanda({
        ...comanda,
        pedidos: response.data,
      });
    } catch (err: any) {
      console.log(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    listarPedidosDaComanda();
  }, [comanda?.comandaId]);

  if (!comanda) {
    return (
      <View style={styles.noProduct}>
        <Text>Nenhuma comanda ativa.</Text>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.returnButtonText}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF3F4B" />
        <Text>Carregando pedidos...</Text>
      </View>
    );
  }

  const { pedidos, numero_mesa } = comanda;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#391D8A", "#261B47"]}
          style={styles.header}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png" }}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <Text style={styles.logoText}>
            Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
          </Text>
          <View style={{ width: 24 }} />
        </LinearGradient>

        <Text style={styles.title}>Comanda da Mesa {numero_mesa}</Text>

        {pedidos.length === 0 ? (
          <View style={styles.noProduct}>
            <Image
              source={{
                uri: "https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-carrinho-de-compras-6.png",
              }}
              style={styles.cart}
            />
            <Text>Nenhum pedido encontrado.</Text>
          </View>
        ) : (
          pedidos.map((pedido, index) => (
            <View key={pedido.id || index} style={styles.card}>
              <Text style={styles.pedidoTitle}>Pedido #{index + 1}</Text>

              {pedido.items.map((product, idx) => (
                <View key={idx} style={styles.item}>
                  <Image
                    source={{ uri: product.image_url }}
                    style={styles.image}
                  />
                  <View style={styles.info}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.quantity}>Qtd: {product.qtd}</Text>

                    {product.extras && product.extras.length > 0 && (
                      <Text style={styles.sectionTitle}>
                        Adicionais: {product.extras.join(", ")}
                      </Text>
                    )}

                    {product.removedIngredients &&
                      product.removedIngredients.length > 0 && (
                        <Text style={styles.sectionTitle}>
                          Sem: {product.removedIngredients.join(", ")}
                        </Text>
                      )}

                    <Text style={styles.totalValue}>
                      {formatarPreco(product.price)}
                    </Text>
                  </View>
                </View>
              ))}

              <Text style={styles.totalValue}>
                Total do pedido: {formatarPreco(pedido.total)}
              </Text>
            </View>
          ))
        )}

        <Text
          style={[styles.totalValue, { textAlign: "center", fontSize: 18 }]}
        >
          Total da comanda: {formatarPreco(calcularTotalComanda())}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 12,
    paddingHorizontal: 20,
  },
  logoText: { color: "#fff", fontSize: 20, fontWeight: "700" },
  title: { padding: 10, fontSize: 25, fontWeight: "700" },
  pedidoTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 5 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  item: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  image: { width: 70, height: 70, borderRadius: 12 },
  info: { flex: 1, marginLeft: 10 },
  productName: { fontWeight: "bold", fontSize: 16 },
  quantity: { fontSize: 14, color: "#666" },
  sectionTitle: { fontSize: 14, color: "#666" },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FF3F4B",
  },
  noProduct: { alignItems: "center", gap: 10, marginTop: 50 },
  cart: { width: 100, height: 100 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  returnButton: {
    backgroundColor: "#FF3F4B",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  returnButtonText: { color: "#fff", fontWeight: "700" },
});
