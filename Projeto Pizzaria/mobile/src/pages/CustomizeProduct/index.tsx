import React, { useState, useEffect, useContext } from "react";
import { api } from '../../services/api';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    LayoutAnimation,
    Platform,
    UIManager,
    StyleSheet,
    Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { usePedido } from "../../contexts/pedidoContext";
import { AuthContext } from "../../contexts/AuthContext";

type RootStackParamList = {
    CustomizeProduct: { product: Product };
    Order: { product: Product };
};

interface Product {
    id: string;
    name: string;
    price: string;
    description?: string;
    image_url: string;
    category_id: string;
}

interface Ingrediente {
    id: string;
    nome: string;
    price: string;
}

interface Adicional {
    id: string;
    nome: string;
    price: string;
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CustomizeProduct() {
    const { addItem, pedidoId, setPedidoId } = usePedido();
    const { user } = useContext(AuthContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CustomizeProduct'>>();
    const { product } = route.params;

    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');
    const [totalPrice, setTotalPrice] = useState(Number(product.price));
    const [extras, setExtras] = useState<Adicional[]>([]);
    const [extrasExpanded, setExtrasExpanded] = useState(false);
    const [ingredients, setIngredients] = useState<Ingrediente[]>([]);
    const [loading, setLoading] = useState(true);
    const [ingredientsExpanded, setIngredientsExpanded] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<{ [key: string]: boolean }>({});
    const [selectedExtras, setSelectedExtras] = useState<{ [key: string]: boolean }>({});
    const [error, setError] = useState("");
    const [isAdding, setIsAdding] = useState(false);

    const [showSecondFlavorModal, setShowSecondFlavorModal] = useState(false);
    const [secondFlavorProducts, setSecondFlavorProducts] = useState<Product[]>([]);
    const [selectedSecondFlavor, setSelectedSecondFlavor] = useState<Product | null>(null);

    // Carrega ingredientes (somente pizza)
    useEffect(() => {
        if (product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c') {
            async function loadIngredients() {
                try {
                    const response = await api.get('produto_ingrediente/lista', {
                        params: { product_id: product.id }
                    });
                    const sortedIngredients = response.data.sort((a: Ingrediente, b: Ingrediente) => a.nome.localeCompare(b.nome));
                    setIngredients(sortedIngredients);
                    const initialSelection = sortedIngredients.reduce((acc: { [key: string]: boolean }, ing: Ingrediente) => {
                        acc[ing.id] = true;
                        return acc;
                    }, {});
                    setSelectedIngredients(initialSelection);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            }
            loadIngredients();
        } else {
            setLoading(false);
        }
    }, [product.id]);

    // Carrega adicionais (somente pizza)
    useEffect(() => {
        if (product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c') {
            async function loadExtras() {
                try {
                    const response = await api.get('/adicionais/lista');
                    const bordas = response.data
                        .filter((ex: Adicional) => ex.nome.toLowerCase().startsWith("borda"))
                        .sort((a: Adicional, b: Adicional) => a.nome.localeCompare(b.nome));
                    const outros = response.data
                        .filter((ex: Adicional) => !ex.nome.toLowerCase().startsWith("borda"))
                        .sort((a: Adicional, b: Adicional) => a.nome.localeCompare(b.nome));

                    setExtras([...bordas, ...outros]);

                    const initialAdSelection: { [key: string]: boolean } = {};
                    [...bordas, ...outros].forEach((ad: Adicional) => {
                        initialAdSelection[ad.id] = ad.nome.toLowerCase() === "borda tradicional";
                    });
                    setSelectedExtras(initialAdSelection);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            }
            loadExtras();
        }
    }, [product.id]);

    // 2º sabor
    const openSecondFlavor = async () => {
        if (product.category_id !== '1da0ee77-2a79-4a91-a3a4-863857d9691c') return;

        try {
            const response = await api.get("/category/products", {
                params: { category_id: "1da0ee77-2a79-4a91-a3a4-863857d9691c" }
            });
            const filteredProducts = response.data
                .filter((p: Product) => p.id !== product.id)
                .sort((a: Product, b: Product) => a.name.localeCompare(b.name));
            setSecondFlavorProducts(filteredProducts);
            setShowSecondFlavorModal(true);
        } catch (error) {
            console.error(error);
            alert("Erro ao carregar os sabores de pizza");
        }
    };

    const handleExtrasToggle = (id: string, nome: string) => {
        setSelectedExtras(prev => {
            const isBorder = nome.toLowerCase().startsWith("borda");
            if (isBorder) {
                const newState = { ...prev };
                extras.filter(e => e.nome.toLowerCase().startsWith("borda")).forEach(e => newState[e.id] = false);
                newState[id] = !prev[id];
                return newState;
            }
            return { ...prev, [id]: !prev[id] };
        });
        setError("");
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            setError("");
        }
    };

    const toggleIngredients = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIngredientsExpanded(prev => !prev);
    };

    const handleIngredientToggle = (id: string) => {
        setSelectedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
        setError("");
    };

    // Calcula preço total
    useEffect(() => {
        const qtd = quantity;
        const price1 = Number(product.price);
        const price2 = selectedSecondFlavor ? Number(selectedSecondFlavor.price) : 0;

        const extrasPrice = Object.entries(selectedExtras).reduce((acc, [extraId, isSelected]) => {
            if (isSelected) {
                const extra = extras.find(e => e.id === extraId);
                return acc + (extra ? Number(extra.price) : 0);
            }
            return acc;
        }, 0);

        let finalPrice = 0;
        if (selectedSecondFlavor) {
            finalPrice = ((price1 / 2 + price2 / 2 + 10) + extrasPrice) * qtd;
        } else {
            finalPrice = (price1 + extrasPrice) * qtd;
        }

        setTotalPrice(finalPrice);
    }, [quantity, selectedExtras, extras, selectedSecondFlavor, product.price]);

    // Adiciona ao pedido
    const handleAddToPedido = async () => {
        setIsAdding(true);
        setError("");
        try {
            if (!user?.id) throw new Error("Cliente não logado");
            const cliente_id = user.id;

            let pedido_id = pedidoId;

            if (pedido_id) {
                try {
                    const statusResp = await api.get(`/pedidos/${pedido_id}/status`);
                    const status = statusResp.data.status;
                    if (!status || status !== 'pedido em andamento') {
                        const pedidoResponse = await api.post("/pedido", { cliente_id });
                        pedido_id = pedidoResponse.data.id;
                        setPedidoId(pedido_id);
                    }
                } catch {
                    const pedidoResponse = await api.post("/pedido", { cliente_id });
                    pedido_id = pedidoResponse.data.id;
                    setPedidoId(pedido_id);
                }
            }

            if (!pedido_id) {
                const pedidoResponse = await api.post("/pedido", { cliente_id });
                pedido_id = pedidoResponse.data.id;
                setPedidoId(pedido_id);
            }

            const payload = {
                product_id: product.id,
                product2_id: selectedSecondFlavor?.id,
                pedido_id,
                qtd: quantity,
                removidos: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ({ id })),
                adicionais: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => ({ id })),
                observacoes: observation
            };

            const response = await api.post("/item", payload);
            const { item } = response.data;

            addItem({
                item_id: item.id,
                name: product.name,
                image_url: product.image_url,
                qtd: quantity,
                price: item.price,
                totalPrice,
                removedIngredients: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ingredients.find(i => i.id === id)?.nome || id),
                extras: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => extras.find(e => e.id === id)?.nome || id),
                observation,
                secondFlavor: selectedSecondFlavor ? {
                    id: selectedSecondFlavor.id,
                    name: selectedSecondFlavor.name,
                    price: Number(selectedSecondFlavor.price),
                    image_url: selectedSecondFlavor.image_url
                } : undefined
            });

            navigation.navigate("Order", { product });
        } catch (error: any) {
            const mensagem =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                "Erro ao adicionar item";
            setError(mensagem);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#3D1F93", "#1d1d2e"]}
                style={styles.header}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.logoText}>Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text></Text>
                <View style={{ width: 24 }} />
            </LinearGradient>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Produto */}
                <View style={styles.card}>
                    <Image source={{ uri: product.image_url }} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.price}>{formatarPreco(totalPrice)}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => handleQuantityChange(quantity - 1)}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => handleQuantityChange(quantity + 1)}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Ingredientes e adicionais somente para pizza */}
                {product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c' && (
                    <>
                        {/* Ingredientes */}
                        <TouchableOpacity style={styles.ingredientHeader} onPress={toggleIngredients}>
                            <Text style={styles.ingredientHeaderText}>Ingredientes</Text>
                            <Ionicons name={ingredientsExpanded ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
                        </TouchableOpacity>
                        {loading ? <ActivityIndicator color="#FF3F4B" /> : (
                            ingredientsExpanded && ingredients.map(ing => (
                                <TouchableOpacity key={ing.id} style={styles.ingredientItem} onPress={() => handleIngredientToggle(ing.id)}>
                                    <Text style={styles.ingredientName}>{ing.nome}</Text>
                                    {selectedIngredients[ing.id] ? <Ionicons name="checkbox" size={24} color="#FF3F4B" /> : <Ionicons name="square-outline" size={24} color="#FF3F4B" />}
                                </TouchableOpacity>
                            ))
                        )}

                        {/* Adicionais */}
                        <TouchableOpacity style={styles.ingredientHeader} onPress={() => setExtrasExpanded(prev => !prev)}>
                            <Text style={styles.ingredientHeaderText}>Adicionais</Text>
                            <Ionicons name={extrasExpanded ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
                        </TouchableOpacity>
                        {extrasExpanded && extras.map(ex => (
                            <TouchableOpacity key={ex.id} style={styles.ingredientItem} onPress={() => handleExtrasToggle(ex.id, ex.nome)}>
                                <Text style={styles.ingredientName}>{ex.nome} {formatarPreco(Number(ex.price))}</Text>
                                {selectedExtras[ex.id] ? <Ionicons name="checkbox" size={24} color="#FF3F4B" /> : <Ionicons name="square-outline" size={24} color="#FF3F4B" />}
                            </TouchableOpacity>
                        ))}

                        {/* 2º sabor */}
                        <TouchableOpacity style={styles.ingredientHeader} onPress={openSecondFlavor}>
                            <Text style={styles.ingredientHeaderText}>
                                {selectedSecondFlavor ? `2º Sabor: ${selectedSecondFlavor.name}` : "Adicionar 2º Sabor"}
                            </Text>
                            <Ionicons name={selectedSecondFlavor ? "checkmark-circle" : "add-circle"} size={20} color="#fff" />
                        </TouchableOpacity>
                    </>
                )}

                {/* Observações (todas categorias) */}
                <TextInput
                    style={styles.textArea}
                    placeholder="Observações..."
                    placeholderTextColor="#aaa"
                    value={observation}
                    onChangeText={setObservation}
                />

                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity
                    style={[
                        styles.confirmButton,
                        isAdding && { backgroundColor: "#888" } // muda cor quando desativado
                    ]}
                    onPress={handleAddToPedido}
                    disabled={isAdding} // Tornando botão disabled para evitar dobrar os pedidos
                >
                    <Text style={styles.confirmText}>
                        {isAdding ? "Adicionando..." : `Adicionar ${formatarPreco(totalPrice)}`}
                    </Text>
                </TouchableOpacity>

            </ScrollView>

            {/* Modal 2º Sabor */}
            <Modal visible={showSecondFlavorModal} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.ingredientHeaderText}>Escolha o 2º sabor</Text>
                        <ScrollView>
                            {secondFlavorProducts.map(p => {
                                const isSelected = selectedSecondFlavor?.id === p.id;
                                return (
                                    <TouchableOpacity
                                        key={p.id}
                                        style={[
                                            styles.ingredientItem,
                                            isSelected && { borderWidth: 2, borderColor: "#FF3F4B" }
                                        ]}
                                        onPress={() => {
                                            if (isSelected) {
                                                // Se já está selecionado, remove o sabor mas não fecha o modal
                                                setSelectedSecondFlavor(null);
                                            } else {
                                                // Selecionou um novo sabor, fecha o modal automaticamente
                                                setSelectedSecondFlavor(p);
                                                setShowSecondFlavorModal(false);
                                            }
                                        }}
                                    >
                                        <Text style={styles.ingredientName}>
                                            {p.name} - {formatarPreco(Number(p.price))}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </Modal>

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
        paddingBottom: 10,
        paddingHorizontal: 30
    },
    logoText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700"
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#2a2a40",
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 20,
        margin: 15,
        alignItems: "center"
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 12
    },
    productInfo: {
        flex: 1,
        marginLeft: 12
    },
    productName: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF"
    },
    price: {
        fontSize: 16,
        marginVertical: 5,
        color: "#00C851",
        fontWeight: "700"
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    button: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "#5A3FFF",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16
    },
    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
        color: "#FFF"
    },
    ingredientHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3b3b55f7",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 5
    },
    ingredientHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    ingredientItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2a2a40",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 20,
        marginBottom: 15
    },
    ingredientName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF"
    },
    textArea: {
        borderColor: "#3b3b55f7",
        borderWidth: 1,
        borderRadius: 12,
        padding: 14,
        marginHorizontal: 20,
        textAlignVertical: "top",
        fontSize: 16,
        color: "#FFF"
    },
    confirmButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3F4B",
        elevation: 8,
        shadowColor: "#FF3F4B",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 40
    },
    confirmText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 0.8
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    modalContent: {
        backgroundColor: "#1d1d2e",
        borderRadius: 12,
        padding: 16,
        maxHeight: "80%"
    },
    errorText: {
        color: "red",
        marginBottom: 12,
        fontWeight: "bold",
        textAlign: "center"
    }
});
