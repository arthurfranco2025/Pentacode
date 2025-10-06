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
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { usePedido } from "../../contexts/pedidoContext";

type RootStackParamList = {
    Home: undefined;
};

export default function Order() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { pedido, totalPedido } = usePedido();

    if (!pedido || pedido.length === 0) {
        return (
            <View style={styles.noProduct}>
                <Image
                    source={{ uri: 'https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-carrinho-de-compras-6.png' }}
                    style={styles.cart}
                />
                <Text>Nenhum produto no carrinho.</Text>
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

                <Text style={styles.title}>Pedido</Text>

                {pedido.map((product, index) => (
                    <View key={index} style={styles.card}>
                        <Image
                            source={{ uri: product.image_url }}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.quantity}>Quantidade: {product.qtd}</Text>

                            {product.removedIngredients && product.removedIngredients.length > 0 && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Ingredientes Removidos:</Text>
                                    {product.removedIngredients.map((ing, idx) => (
                                        <Text key={idx} style={styles.itemTextRemoved}>- {ing}</Text>
                                    ))}
                                </View>
                            )}

                            {product.extras && product.extras.length > 0 && (
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
                                Total: {formatarPreco(product.price)}
                            </Text>
                        </View>
                    </View>
                ))}

                <Text style={[styles.totalValue, { textAlign: 'center', fontSize: 18 }]}>
                    Valor total do pedido: {formatarPreco(totalPedido)}
                </Text>
            </ScrollView>

            <TouchableOpacity style={styles.buttonFinish}>
                <Text style={styles.buttonText}>Finalizar pedido</Text>
            </TouchableOpacity>
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
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
    },
    image: { width: 100, height: 100, borderRadius: 12 },
    info: { flex: 1, marginLeft: 10 },
    productName: { fontWeight: "bold", fontSize: 16 },
    quantity: { fontSize: 14, color: "#666", marginVertical: 5 },
    section: { marginTop: 10 },
    sectionTitle: { fontWeight: "bold", fontSize: 14, marginBottom: 5 },
    itemTextRemoved: { fontSize: 14, color: "#666" },
    itemTextSelected: { fontSize: 14, color: "#666" },
    textObservation: { fontSize: 14, color: "#666" },
    totalValue: { fontSize: 16, fontWeight: "bold", marginTop: 10, color: "#FF3F4B" },
    noProduct: { alignItems: 'center', gap: 10 },
    cart: { width: 100, height: 100 },
    returnButton: { backgroundColor: "#FF3F4B", borderRadius: 12, paddingVertical: 12, alignItems: "center", justifyContent: "center" },
    returnButtonText: { color: "#fff", fontWeight: "700", padding: 8 },
    
    buttonFinish: {
        backgroundColor: '#940B14',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: "center",
        marginBottom: 15,
        alignSelf: "center",
        width: "80%",
        maxWidth: 300
    },
    buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 }
});
