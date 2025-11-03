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
// Helper: formatar label de status para exibição
const formatStatusLabel = (status?: string) => {
  if (!status) return '';
  const s = status.toLowerCase();

  if (s === 'na fila') return 'Na fila';
  if (s === 'em produção') return 'Em produção';
  if (s === 'parcialmente pronto') return 'Parcialmente pronto';
  if (s === 'pronto') return 'Pronto';
  if (s === 'entregue') return 'Entregue';
  if (s === 'cancelado') return 'Cancelado';

  // fallback: capitaliza a primeira letra
  return status.charAt(0).toUpperCase() + status.slice(1);
};

// Helper: retorna cor baseada no status do item
const getStatusColor = (status?: string) => {
  if (!status) return '#777';
  switch (status.toLowerCase()) {
    case 'na fila':
      return '#999'; // cinza neutro
    case 'em produção':
      return '#FFBB33'; // amarelo/laranja
    case 'parcialmente pronto':
      return '#FFA000'; // laranja mais forte
    case 'pronto':
      return '#00C851'; // verde
    case 'entregue':
      return '#007E33'; // verde escuro
    case 'cancelado':
      return '#DD2C00'; // vermelho escuro
    default:
      return '#777'; // fallback cinza
  }
};


interface ItemPedido {
  id: string;
  product: { name: string };
  product2?: { name: string };
  status?: string;
  qtd: number;
  price: number;
  paidWithPoints?: boolean;
  pointsUsed?: number; // pontos do item principal
  totalPoints?: number; // pontos do item + adicionais
  points?: number; // pontos por unidade
  observacao?: string;
  removidos?: Array<{ id: string; nome: string }>;
  adicionais?: Array<{ id: string; nome: string; price: number; points?: number }>;
}


export default function OrderTicket() {
  const navigation = useNavigation<NavigationProp<StackParamsList, "OrderTicket">>();
  const { comanda } = useComanda();
  const [pedidos, setPedidos] = useState<PedidoResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pedidoStatus, pedidoId, setPedidoId } = usePedido();
  const [disabledPagar, setDisabledPagar] = useState<boolean>(true);


  const [pedidoAberto, setPedidoAberto] = useState<string | null>(null);
  const [itensPedido, setItensPedido] = useState<any[]>([]);
  const [loadingItens, setLoadingItens] = useState(false);


  useEffect(() => {
    if (!comanda?.comandaId) return;

    let interval: NodeJS.Timeout;

    async function loadPedidos() {
      try {
        const response = await api.get('/pedido/listaPorComanda', {
          params: { comanda_id: comanda?.comandaId }
        });
        setPedidos(response.data);
        setError('');
      } catch (err: any) {
        console.error("Erro ao carregar pedidos:", err?.response?.status, err?.response?.data);
        setError("Erro ao carregar pedidos");
      } finally {
        setLoading(false);
      }
    }

    // 🔹 Carrega assim que o componente monta
    loadPedidos();

    // 🔹 Recarrega automaticamente a cada 5 segundos
    interval = setInterval(loadPedidos, 5000);

    // 🔹 Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [comanda]);

  useEffect(() => {
    async function checkPedidos() {
      try {
        // Se não há pedidos, já desabilita
        if (!pedidos || pedidos.length === 0) {
          setDisabledPagar(true);
          return;
        }

        // Verifica se existe ao menos um pedido com itens
        const resultados = await Promise.all(
          pedidos.map(async (pedido) => {
            const response = await api.get('/item/listaPorPedido', {
              params: { pedido_id: pedido.id },
            });
            return response.data.length > 0; // true se tem itens
          })
        );

        const temItens = resultados.some((r) => r === true);
        setDisabledPagar(!temItens); // habilita se há algum pedido com itens
      } catch (err) {
        console.error('Erro ao verificar itens dos pedidos:', err);
        setDisabledPagar(true);
      }
    }

    checkPedidos();
  }, [pedidos]);


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
        params: { pedido_id: pedidoId }
      });

      setItensPedido(response.data);
      // console.log('ver os itens do pedido:', response.data)
    } catch (err) {
      console.error("Erro ao carregar itens do pedido:", err);
    } finally {
      setLoadingItens(false);
    }
  };

  // Função reutilizável para buscar itens de um pedido (usada em polling)
  const fetchItens = async (pedidoId: string | null) => {
    if (!pedidoId) return;
    try {
      const response = await api.get('/item/listaPorPedido', {
        params: { pedido_id: pedidoId }
      });
      setItensPedido(response.data);
    } catch (err) {
      console.error('Erro ao buscar itens (polling):', err);
    }
  };

  // Quando um pedido é aberto, inicia polling para atualizar seus itens automaticamente.
  useEffect(() => {
    if (!pedidoAberto) return;

    // busca imediata
    fetchItens(pedidoAberto);

    const interval = setInterval(() => {
      fetchItens(pedidoAberto);
    }, 3000); // atualiza a cada 3s (ajuste conforme necessário)

    return () => clearInterval(interval);
  }, [pedidoAberto]);


  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#3D1F93", "#1d1d2e"]}
        style={styles.header}
      >
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
                Feito às {new Date(pedido.created_at).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </Text>

              {/* Mostra os itens quando pedido está aberto */}
              {pedidoAberto === pedido.id && (
                <View style={styles.itensContainer}>
                  {loadingItens ? (
                    <ActivityIndicator size="small" color="#FF3F4B" />
                  ) : itensPedido.length === 0 ? (
                    <Text style={styles.emptyPedidoText}>Seu pedido está vazio.</Text>
                  ) : (
                    itensPedido.map((item: ItemPedido) => (
                      <View key={item.id} style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                          <View style={styles.leftColumn}>
                            <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
                              {item.product.name}
                              {item.product2 && (
                                <>
                                  <Text style={styles.divider}> | </Text>
                                  <Text style={styles.itemName}>{item.product2.name}</Text>
                                </>
                              )}
                            </Text>

                            {item.status && (
                              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
                                <Text style={styles.statusBadgeText}>{formatStatusLabel(item.status)}</Text>
                              </View>
                            )}
                          </View>

                          <View style={styles.rightColumn}>
                            <Text style={styles.itemQtd}>x{item.qtd}</Text>

                            {item.paidWithPoints ? (
                              <>
                                <Text style={[styles.itemPrice, { color: "#888" }]}>
                                  {formatarPreco(0)}
                                </Text>
                                <Text style={{ color: "#FFD700", fontSize: 13, fontWeight: "700" }}>
                                  {item.totalPoints
                                    ? `${item.totalPoints * item.qtd} pts`
                                    : item.pointsUsed
                                      ? `${item.pointsUsed * item.qtd} pts`
                                      : `${item.points || 0} pts`}
                                </Text>
                              </>
                            ) : (
                              <>
                                <Text style={styles.itemPrice}>
                                  {formatarPreco(
                                    item.qtd *
                                    (item.price +
                                      (item.adicionais?.reduce((acc, a) => acc + a.price, 0) || 0))
                                  )}
                                </Text>
                                <Text style={{ color: "#FFD700", fontSize: 12, fontWeight: "600" }}>
                                  {item.points ? `${item.points} pts` : ""}
                                </Text>
                              </>
                            )}
                          </View>
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

      <View style={styles.fixedBottomArea}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalValue}>
            {formatarPreco(
              pedidos.reduce((accPedido, pedido) => {
                return accPedido + pedido.total; // já inclui price dos itens
              }, 0)
            )}
          </Text>
          <Text style={{ color: "#FFD700", fontWeight: "700", marginTop: 2 }}>
            Total de pontos: {itensPedido.reduce((acc, item) => acc + (item.paidWithPoints ? (item.pointsUsed || 0) * item.qtd : 0), 0)} pts
          </Text>

          <Text style={styles.totalValue}>
            {formatarPreco(
              itensPedido.reduce((acc, item) => {
                // Soma apenas os itens que não foram pagos com pontos
                if (item.paidWithPoints) return acc;

                const totalAdicionais =
                  item.adicionais?.reduce(
                    (a: number, b: { price: number }) => a + b.price,
                    0
                  ) || 0;

                return acc + (item.price + totalAdicionais) * item.qtd;
              }, 0)
            )}
          </Text>


        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.buttonAddMore}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Voltar para o cardápio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonFinish, disabledPagar && { opacity: 0.5 }]}
            onPress={!disabledPagar ? handleGoToPayment : undefined}
            disabled={disabledPagar}
          >
            <Text style={[styles.buttonText, disabledPagar && { opacity: 0.5 }]}>Ir para pagamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e"
  },
  header: {
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 14,
  },
  totalPointsText: {
    color: '#00C851',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  logoText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1.2
  },
  scrollContent: {
    paddingBottom: 200,
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
    marginBottom: 10,
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
    paddingHorizontal: 20,
    gap: 10,
  },
  buttonAddMore: {
    flex: 1,
    backgroundColor: "#5A3FFF",
    paddingVertical: 16,
    borderRadius: 14,
    elevation: 8,
    shadowColor: "#5A3FFF",
  },
  buttonFinish: {
    flex: 1,
    backgroundColor: "#FF3F4B",
    paddingVertical: 16,
    borderRadius: 14,
    elevation: 8,
    shadowColor: "#FF3F4B",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  statusLabel: {
    color: '#aaa',
    fontSize: 13,
    marginRight: 6,
  },
  statusValue: {
    fontSize: 13,
    fontWeight: '600',
  },
  dateText: {
    color: '#aaa',
    fontSize: 12,
  },
  itensContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#3d3d56',
    paddingTop: 12,
  },
  itemContainer: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3d3d56',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  nameContainer: {
    flex: 1,
    marginRight: 8,
  },
  leftColumn: {
    flex: 1,
    marginRight: 8,
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  itemName: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    color: '#aaa',
    fontSize: 14,
    marginHorizontal: 4,
  },
  itemQtd: {
    color: '#aaa',
    fontSize: 14,
    marginRight: 8,
  },
  itemPrice: {
    color: '#00C851',
    fontSize: 14,
    fontWeight: '600',
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
  statusBadge: {
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  fixedBottomArea: {
    backgroundColor: "#1d1d2e",
    borderTopWidth: 1,
    borderTopColor: "#2a2a40",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  emptyPedidoText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 16,
    marginVertical: 12,
    fontStyle: "italic",
  },
  buttonDisabled: {
    backgroundColor: "#555",
    shadowColor: "transparent",
  },
});