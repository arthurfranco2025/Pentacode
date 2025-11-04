import React from "react";
import { api } from "../../services/api";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { usePedido } from "../../contexts/pedidoContext";
import { useComanda } from "../../contexts/comandaContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { Ionicons } from '@expo/vector-icons';
import sendNotificationFinishedOrder from "../Notification/finishedOrder";

type OrderScreenNavigationProp = NativeStackNavigationProp<
    StackParamsList,
    "Order"
>;

export default function Order() {
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const { pedido, pedidoId, totalPedido, removeItem, pedidoStatus, clearPedido, fetchPedidoStatus } = usePedido();
    const { comanda } = useComanda();

    if (!comanda) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#FFF" }}>Carregando comanda...</Text>
            </View>
        );
    }

    const comandaId = comanda?.comandaId ?? null;
    const mesaId = comanda?.mesaId ?? null;
    const numero_mesa = comanda?.numero_mesa ?? null;

    const totalPoints = pedido.reduce((acc, item) => acc + (item.pointsUsed ?? 0), 0);
    const totalMoney = pedido.reduce((acc, item) => acc + (item.payWithPoints ? 0 : (item.totalPrice ?? 0)), 0);

    async function handleFinishPedido() {
        if (!pedidoId) {
            alert("Nenhum pedido aberto para finalizar.");
            return;
        }
        console.log("DEBUG request:", { id: pedidoId, status: "pedido realizado" });

        try {
            // marca como realizado
            await api.put("/pedido/editarStatus", { pedido_id: pedidoId, status: "Pedido realizado" });

            // solicita o status atualizado do servidor (garante valor correto)
            const statusResp = await api.get(`/pedidos/${pedidoId}/status`);
            const status = statusResp.data?.status ?? "";

            // limpa o contexto local (pedido, id, status)
            clearPedido();
            sendNotificationFinishedOrder()

            // navega passando o status retornado pelo servidor
            navigation.navigate("OrderTicket", {
                comandaId,
                mesaId,
                numero_mesa,
                statusPedido: status,
            });
        } catch (err: any) {
            if (err.response) {
                console.log("Erro no servidor:", err.response.data);
                console.log("Status:", err.response.status);
            } else {
                console.error("Erro desconhecido:", err);
            }
            alert("Erro ao finalizar pedido. Tente novamente.");
        }
    }



    async function handleDeleteItem(item_id: string) {
        try {
            // faz requisição para deletar o item no backend
            await api.delete('/item/delete', {
                params: { id: item_id }
            });

            // remove o item também do contexto local
            removeItem(item_id);
        } catch (err: any) {
            if (err.response) {
                console.log("Erro no servidor:", err.response.data);
                console.log("Status:", err.response.status);
            } else {
                console.error("Erro desconhecido:", err);
            }
            alert("Erro ao deletar item. Tente novamente.");
        }
    }


    if (!pedido || pedido.length === 0) {
        return (
            <View style={styles.noProduct}>
                <Image
                    source={{ uri: 'https://img.icons8.com/?size=100&id=rX7GcyLQDDjE&format=png&color=FFFFFF' }}
                    style={styles.cart}
                />
                <Text style={{ color: "#FFF", fontSize: 16, textAlign: "center" }}>Nenhum produto no carrinho.</Text>
                <TouchableOpacity
                    style={styles.returnButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.returnButtonText}>Voltar ao cardápio</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#3D1F93", "#1d1d2e"]}
                style={styles.header}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.logoText}>
                    Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
                </Text>
                <View style={{ width: 26 }} />
            </LinearGradient>

            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                <Text style={styles.title}>Pedido</Text>

                {pedido.map((item, index) => (
                    <View key={item.item_id || index} style={styles.card}>
                        <Image
                            source={{ uri: item.image_url }}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.productName}>{item.name}</Text>

                            {item.secondFlavor && (
                                <Text style={[styles.productName, { fontSize: 14, color: "#ccc" }]}>
                                    + {item.secondFlavor.name} (2º sabor)
                                </Text>
                            )}

                            <Text style={styles.quantity}>Quantidade: {item.qtd}</Text>

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

                            {item.observation && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Observação:</Text>
                                    <Text style={styles.textObservation}>{item.observation}</Text>
                                </View>
                            )}

                            <Text style={[styles.totalValue, { color: item.payWithPoints ? "#ffde09ff" : "#00C851" }]}>
                                <Text style={{ color: "#FFFFFF" }}>Total: </Text>
                                {item.payWithPoints ? (
                                    <>
                                        <Ionicons name="star" size={16} color="#ffde09ff" />{" "}
                                        {(item.pointsUsed ?? 0).toFixed(1)} pts
                                    </>
                                ) : (
                                    formatarPreco(item.totalPrice ?? 0)
                                )}
                            </Text>

                        </View>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => handleDeleteItem(item.item_id)}
                        >
                            <Image
                                source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ff3f4b/trash.png" }}
                                style={{ width: 24, height: 24 }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}


                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={[styles.totalValue, { fontSize: 18, color: '#FFFFFF' }]}>
                        Valor total do pedido:
                    </Text>

                    {totalMoney > 0 && (
                        <Text style={[styles.totalValue, { color: '#00C851', fontSize: 18 }]}>
                            {formatarPreco(totalMoney)}
                        </Text>
                    )}

                    {totalPoints > 0 && (
                        <Text style={[styles.totalValue, { color: '#ffde09ff', fontSize: 18, flexDirection: 'row', alignItems: 'center' }]}>
                            <Ionicons name="star" size={16} color="#ffde09ff" />{" "}
                            {totalPoints.toFixed(1)} pts
                        </Text>
                    )}
                </View>



            </ScrollView>

            <View style={styles.buttonsRow}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonAddMore]}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.buttonText}>Adicionar mais itens</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonFinish]}
                    onPress={handleFinishPedido}
                >
                    <Text style={styles.buttonText}>Finalizar pedido</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    statusText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: "#00C851",
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#1d1d2e",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 52,
        paddingBottom: 10,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff1b",
    },
    backButton: { width: 24, height: 24, justifyContent: "center", alignItems: "center" },
    logoText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "700",
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#FFF",
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#2a2a40",
        borderRadius: 12,
        padding: 12,
        marginBottom: 20,
        marginHorizontal: 20,
        alignItems: "center",
        position: "relative",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    productName: {
        fontWeight: "700",
        fontSize: 16,
        color: "#FFF",
    },
    quantity: {
        fontSize: 14,
        color: "#ccc",
        marginVertical: 5,
    },
    section: {
        marginTop: 10,
    },
    sectionTitle: {
        fontWeight: "700",
        fontSize: 14,
        marginBottom: 5,
        color: "#FFF",
    },
    itemTextRemoved: {
        fontSize: 14,
        color: "#FFF",
    },
    itemTextSelected: {
        fontSize: 14,
        color: "#FFF",
    },
    textObservation: {
        fontSize: 14,
        color: "#ccc",
    },
    totalValue: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        color: "#00C851",
    },
    deleteButton: {
        marginLeft: 10,
        padding: 5,
    },
    noProduct: {
        backgroundColor: "#1d1d2e",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 12,
    },
    cart: {
        width: 100,
        height: 100,
    },
    returnButton: {
        backgroundColor: "#FF3F4B",
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    returnButtonText: {
        color: "#FFF",
        fontWeight: "700",
        padding: 8,
    },
    buttonsRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        gap: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonAddMore: {
        backgroundColor: "#5A3FFF",
        marginLeft: 20,
        elevation: 8,
        shadowColor: "#5A3FFF",
    },
    buttonFinish: {
        backgroundColor: "#FF3F4B",
        marginRight: 20,
        elevation: 8,
        shadowColor: "#FF3F4B",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});