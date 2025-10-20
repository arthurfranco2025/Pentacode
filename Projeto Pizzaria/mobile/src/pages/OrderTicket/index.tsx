import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamsList } from "../../routes/app.routes";
import { useComanda } from "../../contexts/comandaContext";
import { api } from "../../services/api";
import { formatarPreco } from "../../components/utils/formatPrice";
import { usePedido } from "../../contexts/pedidoContext"

interface PedidoResponse {
  id: string;
  comanda_id: string;
  status: string;
  total: number;
  draft: boolean;
  created_at: string;
  updated_at: string;
}

interface ItemPedido {
  id: string;
  product: {
    name: string;
  };
  product2?: {  // Segundo sabor é opcional
    name: string;
  };
  qtd: number;
  price: number;
  observacao?: string;
  removidos?: Array<{
    id: string;
    nome: string;
  }>;
  adicionais?: Array<{
    id: string;
    nome: string;
    price: number;
  }>;
}

export default function OrderTicket() {
  const navigation = useNavigation<NavigationProp<StackParamsList, "OrderTicket">>();
  const { comanda } = useComanda();
  const [pedidos, setPedidos] = useState<PedidoResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pedidoStatus, pedidoId, setPedidoId } = usePedido();

  const [pedidoAberto, setPedidoAberto] = useState<string | null>(null);
  const [itensPedido, setItensPedido] = useState<any[]>([]);
  const [loadingItens, setLoadingItens] = useState(false);



  useEffect(() => {
    async function loadPedidos() {
      try {
        if (!comanda?.comandaId) return;

        // const response = await api.get('/pedido/listaPorComanda', {
        //   data: {
        //     comanda_id: comanda.comandaId
        //   }
        // });

        const response = await api.get('/pedido/listaPorComanda', {
          params: { comanda_id: comanda.comandaId }
        });


        setPedidos(response.data);
      } catch (err) {
        setError("Erro ao carregar pedidos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPedidos();
  }, [comanda]);

  useEffect(() => {
    if (pedidos.length > 0 && !pedidoId) {
      setPedidoId(pedidos[0].id);
    }
  }, [pedidos]);

  // Atualiza o status do pedido quando o pedidoStatus mudar
  useEffect(() => {
    if (pedidoStatus && pedidoId) {
      setPedidos(currentPedidos =>
        currentPedidos.map(pedido =>
          pedido.id === pedidoId
            ? { ...pedido, status: pedidoStatus }
            : pedido
        )
      );
    }
  }, [pedidoStatus, pedidoId]);



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
      total: pedidos.reduce((acc, pedido) => acc + pedido.total, 0),
    });
  };

  const handleTogglePedido = async (pedidoId: string) => {
    if (pedidoAberto === pedidoId) {
      // Se o pedido já estiver aberto, fecha ele
      setPedidoAberto(null);
      return;
    }

    try {
      setLoadingItens(true);
      setPedidoAberto(pedidoId);

      const response = await api.get('/item/listaPorPedido', {
        params: {pedido_id: pedidoId }
      });

      setItensPedido(response.data);
    } catch (err) {
      console.error("Erro ao carregar itens do pedido:", err);
    } finally {
      setLoadingItens(false);
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

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF3F4B" />
          </View>
        ) : error ? (
          <View style={styles.noProduct}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>{error}</Text>
          </View>
        ) : pedidos.length === 0 ? (
          <View style={styles.noProduct}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>Nenhum pedido na comanda.</Text>
          </View>
        ) : (
          pedidos.map((pedido, index) => (
            <TouchableOpacity 
              key={pedido.id} 
              style={styles.card}
              onPress={() => handleTogglePedido(pedido.id)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.pedidoNumber}>Pedido #{index + 1}</Text>
                <Text style={styles.priceTag}>
                  {formatarPreco(pedido.total)}
                </Text>
              </View>

              <View style={styles.statusContainer}>
                <Text style={styles.statusLabel}>Status:</Text>
                <Text
                  style={[
                    styles.statusValue,
                    {
                      color: pedido.id === pedidoId && pedidoStatus === 'pedido pronto'
                        ? '#00C851'
                        : '#FF3F4B'
                    }
                  ]}
                >
                  {pedido.id === pedidoId ? pedidoStatus : pedido.status}
                </Text>
              </View>

              <Text style={styles.dateText}>
                {new Date(pedido.created_at).toLocaleDateString('pt-BR')}
              </Text>

              {/* Show items when pedido is open */}
              {pedidoAberto === pedido.id && (
                <View style={styles.itensContainer}>
                  {loadingItens ? (
                    <ActivityIndicator size="small" color="#FF3F4B" />
                  ) : (
                    itensPedido.map((item: ItemPedido) => (
                      <View key={item.id} style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                          <View style={styles.nameContainer}>
                            <Text style={styles.itemName}>
                              {item.product.name}
                              {item.product2 && (
                                <>
                                  <Text style={styles.divider}> | </Text>
                                  <Text style={styles.itemName}>{item.product2.name}</Text>
                                </>
                              )}
                            </Text>
                          </View>
                          <Text style={styles.itemQtd}>x{item.qtd}</Text>
                          <Text style={styles.itemPrice}>
                            {formatarPreco(item.price)}
                          </Text>
                        </View>

                        {/* Removidos */}
                        {item.removidos && item.removidos.length > 0 && (
                          <View style={styles.detailsContainer}>
                            <Text style={styles.detailLabel}>Removidos:</Text>
                            <Text style={styles.removidosText}>
                              {item.removidos.map(r => r.nome).join(', ')}
                            </Text>
                          </View>
                        )}

                        {/* Adicionais */}
                        {item.adicionais && item.adicionais.length > 0 && (
                          <View style={styles.detailsContainer}>
                            <Text style={styles.detailLabel}>Adicionais:</Text>
                            {item.adicionais.map(adicional => (
                              <View key={adicional.id} style={styles.adicionalRow}>
                                <Text style={styles.adicionalText}>{adicional.nome}</Text>
                                <Text style={styles.adicionalPrice}>
                                  {formatarPreco(adicional.price)}
                                </Text>
                              </View>
                            ))}
                          </View>
                        )}

                        {/* Observação */}
                        {item.observacao && (
                          <View style={styles.detailsContainer}>
                            <Text style={styles.detailLabel}>Observação:</Text>
                            <Text style={styles.observacaoText}>{item.observacao}</Text>
                          </View>
                        )}
                      </View>
                    ))
                  )}
                </View>
              )}

            </TouchableOpacity>
          ))
        )}

      </ScrollView>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Valor total:
          </Text>
          <Text style={styles.totalValue}>
            {formatarPreco(
              pedidos.reduce((acc, pedido) => acc + pedido.total, 0)
            )}
          </Text>
        </View>
        
      {pedidos.length > 0 && (
        <TouchableOpacity
          style={styles.finishButton}
          onPress={handleGoToPayment}
        >
          <Text style={styles.finishText}>Ir para pagamento</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1d1d2e" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 52, paddingBottom: 14, paddingHorizontal: 20, elevation: 5 },
  logoText: { color: "#FFF", fontSize: 22, fontWeight: "800", letterSpacing: 0.5 },
  scrollContent: { paddingBottom: 140, paddingTop: 10 },
  title: { fontSize: 26, fontWeight: "700", color: "#FFF", paddingHorizontal: 20, marginBottom: 10 },
  card: { backgroundColor: "#2a2a40", borderRadius: 16, padding: 16, marginHorizontal: 20, marginBottom: 18, shadowColor: "#000", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 4 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  pedidoNumber: { color: "#aaa", fontSize: 13, fontWeight: "600" },
  priceTag: { color: "#00C851", fontWeight: "700", fontSize: 16 },
  productName: { fontSize: 18, fontWeight: "700", color: "#FFF", marginBottom: 6 },
  section: { marginTop: 8 },
  sectionTitle: { fontWeight: "700", fontSize: 14, color: "#FFF", marginBottom: 4 },
  itemTextRemoved: { fontSize: 14, color: "#FF6B6B", marginLeft: 4 },
  itemTextSelected: { fontSize: 14, color: "#00B347", marginLeft: 4 },
  textObservation: { fontSize: 14, color: "#ccc", marginLeft: 4 },
  totalContainer: { backgroundColor: "#2a2a40", marginHorizontal: 20, borderRadius: 12, padding: 16, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  totalText: { color: "#FFF", fontSize: 17, fontWeight: "600" },
  totalValue: { color: "#00C851", fontSize: 18, fontWeight: "800" },
  finishButton: { backgroundColor: "#FF3F4B", marginHorizontal: 20, marginBottom: 20, paddingVertical: 16, borderRadius: 14, elevation: 8, shadowColor: "#FF3F4B" },
  finishText: { color: "#FFF", fontWeight: "700", fontSize: 18, textAlign: "center", textTransform: "uppercase", letterSpacing: 0.8 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { color: "#FFF", fontSize: 16 },
  noProduct: { backgroundColor: "#1d1d2e", justifyContent: "center", alignItems: "center", marginTop: 60, padding: 20 },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statusLabel: {
    color: '#FFF',
    fontSize: 14,
    marginRight: 8,
  },
  statusValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 8,
  },
  itensContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  itemContainer: {
    backgroundColor: '#2b2b3c',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingVertical: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  nameContainer: {
    flex: 1,
  },
  itemName: {
    color: '#FFF',
    fontSize: 14,
  },
  itemQtd: {
    color: '#aaa',
    fontSize: 14,
    marginHorizontal: 12,
  },
  itemPrice: {
    color: '#00C851',
    fontSize: 14,
    fontWeight: '600',
    minWidth: 80,
    textAlign: 'right',
  },
  detailsContainer: {
    marginTop: 4,
    paddingLeft: 12,
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 2,
  },
  removidosText: {
    color: '#FF6B6B',
    fontSize: 12,
  },
  adicionalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adicionalText: {
    color: '#00C851',
    fontSize: 12,
  },
  adicionalPrice: {
    color: '#00C851',
    fontSize: 12,
    fontWeight: '600',
  },
  observacaoText: {
    color: '#FFF',
    fontSize: 12,
    fontStyle: 'italic',
  },
  divider: {
    color: '#FFF',
    fontSize: 14,
    marginHorizontal: 4,
  },
});