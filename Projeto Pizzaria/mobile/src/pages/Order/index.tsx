import React from "react";
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

type OrderScreenNavigationProp = NativeStackNavigationProp<
    StackParamsList,
    "Order"
>;

export default function Order() {
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const { pedido, totalPedido, removeItem, pedidoStatus } = usePedido();
    const { comanda } = useComanda();

    if (!comanda) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#FFF" }}>Carregando comanda...</Text>
            </View>
        );
    }

    const { comandaId, mesaId, numero_mesa } = comanda;

    async function handleFinishPedido() {
        try {
            await updateStatusPedido("Pedido realizado"); // 🔄 chama API e atualiza o contexto
            navigation.navigate("OrderTicket", {
                comandaId,
                mesaId,
                numero_mesa,
            });
        } catch (error) {
            alert("Erro ao atualizar status do pedido.");
        }
    }


    if (!pedido || pedido.length === 0) {
        return (
            <View style={styles.noProduct}>
                <Image
                    source={{ uri: 'https://img.icons8.com/?size=100&id=rX7GcyLQDDjE&format=png&color=FFFFFF' }}
                    style={styles.cart}
                />
                <Text style={{ color: "#FFF", fontSize: 16 }}>Nenhum produto no carrinho.</Text>
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

            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                <Text style={styles.title}>Pedido</Text>

                <Text style={styles.statusText}>
                    Status: {statusPedido || "Nenhum pedido iniciado"}
                </Text>

                {pedido.map((product, index) => (
                    <View key={index} style={styles.card}>
                        <Image
                            source={{ uri: product.image_url }}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.quantity}>Quantidade: {product.qtd}</Text>

                            {product.removedIngredients?.length > 0 && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Ingredientes Removidos:</Text>
                                    {product.removedIngredients.map((ing, idx) => (
                                        <Text key={idx} style={styles.itemTextRemoved}>- {ing}</Text>
                                    ))}
                                </View>
                            )}

                            {product.extras?.length > 0 && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Adicionais:</Text>
                                    {product.extras.map((extra, idx) => (
                                        <Text key={idx} style={styles.itemTextSelected}>- {extra}</Text>
                                    ))}
                                </View>
                            )}

                            {product.observation && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Observação:</Text>
                                    <Text style={styles.textObservation}>{product.observation}</Text>
                                </View>
                            )}

                            <Text style={styles.totalValue}>
                                <Text style={{ color: "#FFFFFF" }}>Total: </Text>
                                {formatarPreco(product.totalPrice ?? product.price)}
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => removeItem(product.product_id)}
                        >
                            <Image
                                source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ff3f4b/trash.png" }}
                                style={{ width: 24, height: 24 }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}

                <Text style={[styles.totalValue, { textAlign: 'center', fontSize: 18 }]}>
                    <Text style={{ color: "#FFFFFF" }}>Valor total do pedido: </Text>
                    <Text>{formatarPreco(pedido.reduce((acc, item) => acc + (item.totalPrice ?? item.price), 0))}</Text>
                </Text>
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
        paddingBottom: 12,
        paddingHorizontal: 20,
    },
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