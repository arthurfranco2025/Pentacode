import React, { useState, useEffect } from "react";
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
    StyleSheet
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
    qtd: boolean;
}

interface Adicional {
    id: string;
    nome: string;
    price: string;
    qtd: boolean;
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CustomizeProduct() {
    const { addItem, pedidoId, setPedidoId, setStatusPedido } = usePedido();
    const { user } = React.useContext(AuthContext);
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

    

    // Carrega ingredientes
    useEffect(() => {
        async function loadIngredients() {
            try {
                const response = await api.get('produto_ingrediente/lista', {
                    params: { product_id: product.id }
                });
                setIngredients(response.data);
                const initialSelection = response.data.reduce((acc: { [key: string]: boolean }, ing: Ingrediente) => {
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
    }, [product.id]);

    // Carrega adicionais
    useEffect(() => {
        async function loadExtras() {
            try {
                const response = await api.get('/adicionais/lista');
                setExtras(response.data);
                const initialAdSelection: { [key: string]: boolean } = {};
                response.data.forEach((ad: Adicional, index: number) => {
                    initialAdSelection[ad.id || `extra-${index}`] = false;
                });
                setSelectedExtras(initialAdSelection);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        if (product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c') {
            loadExtras();
        }
    }, [product.id]);

    // Calcula preço total
    useEffect(() => {
        const basePrice = Number(product.price);
        const extrasPrice = Object.entries(selectedExtras).reduce((acc, [extraId, isSelected]) => {
            if (isSelected) {
                const extra = extras.find(e => e.id === extraId);
                return acc + (extra ? Number(extra.price) : 0);
            }
            return acc;
        }, 0);
        setTotalPrice((basePrice + extrasPrice) * quantity);
    }, [quantity, selectedExtras, extras]);

    const toggleIngredients = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIngredientsExpanded(prev => !prev);
    };

    const handleIngredientToggle = (id: string) => {
        setSelectedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleExtras = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExtrasExpanded(prev => !prev);
    };

    const handleExtrasToggle = (id: string) => {
        setSelectedExtras(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleQuantityChange = (newQuantity: number) => { if (newQuantity > 0) setQuantity(newQuantity); };

    const handleAddToPedido = async () => {
        try {
            if (!user?.id) throw new Error("Cliente não logado");
            const cliente_id = user.id;
            const response = await api.post("/item", {
                product_id: product.id,
                cliente_id,
                qtd: quantity,
                removidos: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ({ id })),
                adicionais: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => ({ id })),
                observacoes: observation
            });
            const { item } = response.data;
            if (!pedidoId && item.pedido_id) setPedidoId(item.pedido_id);
            setStatusPedido("Pedido em andamento"); 
            addItem({
                product_id: product.id,
                name: product.name,
                image_url: product.image_url,
                qtd: quantity,
                price: item.price,
                removedIngredients: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ingredients.find(i => i.id === id)?.nome || id),
                extras: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => extras.find(e => e.id === id)?.nome || id),
                observation
            });
            navigation.navigate("Order", { product });
        } catch (error: any) {
            alert(error.message || "Erro ao adicionar item");
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

            {/* Conteúdo */}
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={styles.card}>
                    <Image source={{ uri: product.image_url }} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.price}>{formatarPreco(product.price)}</Text>
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

                {/* Ingredientes */}
                {product.category_id === "1da0ee77-2a79-4a91-a3a4-863857d9691c" && (
                    <>
                        <TouchableOpacity style={styles.ingredientHeader} onPress={toggleIngredients}>
                            <Text style={styles.ingredientHeaderText}>Ingredientes</Text>
                            <Ionicons name={ingredientsExpanded ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
                        </TouchableOpacity>
                        {loading ? <ActivityIndicator color="#FF3F4B" /> : (
                            ingredientsExpanded && ingredients.map((ing) => (
                                <TouchableOpacity key={ing.id} style={styles.ingredientItem} onPress={() => handleIngredientToggle(ing.id)}>
                                    <Text style={styles.ingredientName}>{ing.nome}</Text>
                                    {selectedIngredients[ing.id] ? <Ionicons name="checkbox" size={24} color="#FF3F4B" /> : <Ionicons name="square-outline" size={24} color="#FF3F4B" />}
                                </TouchableOpacity>
                            ))
                        )}

                        <TouchableOpacity style={styles.ingredientHeader} onPress={toggleExtras}>
                            <Text style={styles.ingredientHeaderText}>Adicionais</Text>
                            <Ionicons name={extrasExpanded ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
                        </TouchableOpacity>
                        {loading ? <ActivityIndicator color="#FF3F4B" /> : (
                            extrasExpanded && extras.map((ex) => (
                                <TouchableOpacity key={ex.id} style={styles.ingredientItem} onPress={() => handleExtrasToggle(ex.id)}>
                                    <Text style={styles.ingredientName}>{ex.nome} {formatarPreco(ex.price)}</Text>
                                    {selectedExtras[ex.id] ? <Ionicons name="checkbox" size={24} color="#FF3F4B" /> : <Ionicons name="square-outline" size={24} color="#FF3F4B" />}
                                </TouchableOpacity>
                            ))
                        )}
                    </>
                )}

                <TextInput
                    style={styles.textArea}
                    placeholder="Alguma observação?"
                    placeholderTextColor="#ccc"
                    multiline
                    maxLength={250}
                    value={observation}
                    onChangeText={setObservation}
                />
            </ScrollView>

            <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 20 }} onPress={handleAddToPedido}>
                <View style={styles.confirmButton}>
                    <Text style={styles.confirmText}>
                        Adicionar ao Pedido - {formatarPreco(totalPrice)}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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

    logoText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#2a2a40",
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: "center",
    },

    productImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },

    productInfo: {
        flex: 1,
        marginLeft: 12,
    },

    productName: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF",
    },

    price: {
        fontSize: 16,
        marginVertical: 5,
        color: "#00C851",
        fontWeight: "700",
    },

    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },

    button: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "#5A3FFF",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },

    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
        color: "#FFF",
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
        marginBottom: 10,
    },

    ingredientHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
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
        marginBottom: 8,
    },

    ingredientName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
    },

    textArea: {
        borderColor: "#3b3b55f7",
        borderWidth: 1,
        borderRadius: 12,
        padding: 14,
        marginHorizontal: 20,
        marginTop: 20,
        textAlignVertical: "top",
        fontSize: 16,
        color: "#FFF",
    },

    confirmButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3F4B",
    },

    confirmText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});