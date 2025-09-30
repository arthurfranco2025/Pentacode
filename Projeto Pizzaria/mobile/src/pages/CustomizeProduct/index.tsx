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

type RootStackParamList = {
    ProductInfo: { product: Product };
    CustomizeProduct: { product: Product };
};

interface Product {
    id: string;
    name: string;
    price: string;
    description?: string;
    image_url: string;
    category_id: string;
}

interface ingrediente_produto {
    id: string;
    nome: string;
    price: string;
    qtd: boolean;
}

interface Adicionais {
    id: string;
    nome: string;
    price: string;
    qtd: boolean;
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CustomizeProduct() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CustomizeProduct'>>();
    const { product } = route.params;

    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');
    const [totalPrice, setTotalPrice] = useState(Number(product.price));
    const [extras, setExtras] = useState<Adicionais[]>([]);
    const [extrasExpanded, setExtrasExpanded] = useState(false);

    const [ingredients, setIngredients] = useState<ingrediente_produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [ingredientsExpanded, setIngredientsExpanded] = useState(false);

    const [selectedIngredients, setSelectedIngredients] = useState<{ [key: string]: boolean }>({});
    const [selectedExtras, setSelectedExtras] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        async function loadIngredients() {
            try {
                const response = await api.get('produto_ingrediente/lista', {
                    params: { product_id: product.id }
                });
                setIngredients(response.data);

                const initialIngSelection: { [key: string]: boolean } = {};
                response.data.forEach((ing: ingrediente_produto, index: number) => {
                    // Garante que cada ingrediente tenha key única
                    initialIngSelection[ing.id || `ingredient-${index}`] = true;
                });
                setSelectedIngredients(initialIngSelection);

                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar ingredientes:', error);
                setLoading(false);
            }
        }
        loadIngredients();
    }, [product.id]);

    useEffect(() => {
        async function loadExtras() {
            try {
                const response = await api.get('/adicionais/lista');
                setExtras(response.data);

                const initialAdSelection: { [key: string]: boolean } = {};
                response.data.forEach((ing: Adicionais, index: number) => {
                    // Garante que cada adicional tenha key única
                    initialAdSelection[ing.id || `extra-${index}`] = false;
                });
                setSelectedExtras(initialAdSelection);

                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar adicionais:', error);
                setLoading(false);
            }
        }
        loadExtras();
    }, [product.id]);

    const calculateTotalPrice = () => {
        const basePrice = Number(product.price);

        // Somar os preços dos extras selecionados
        const extrasPrice = Object.entries(selectedExtras).reduce((acc, [extraId, isSelected]) => {
            if (isSelected) {
                let extra = extras.find(e => e.id === extraId);
                if (!extra && extraId.startsWith("extra-")) {
                    const index = parseInt(extraId.replace("extra-", ""), 10)
                    extra = extras[index]
                }
                return acc + (extra ? Number(extra.price) : 0);
            }
            return acc;
        }, 0);

        setTotalPrice((basePrice + extrasPrice) * quantity);
    };

    // Atualiza sempre que quantity ou selectedExtras mudarem
    useEffect(() => {
        calculateTotalPrice();
    }, [quantity, selectedExtras, extras]);

    const toggleIngredients = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIngredientsExpanded(prev => !prev);
    };

    const handleIngredientToggle = (id: string, index: number) => {
        const key = id || `ingredient-${index}`;
        setSelectedIngredients(prev => ({
            ...prev,
            [key]: !prev[key],
        }));

    }

    const toggleExtras = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExtrasExpanded(prev => !prev);
    };

    const handleExtrasToggle = (id: string, index: number) => {
        const key = id || `extra-${index}`;
        setSelectedExtras(prev => ({
            ...prev,
            [key]: !prev[key],
        }));

    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#391D8A", "#261B47"]} style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png" }}
                        style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <Text style={styles.logoText}>Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text></Text>
                <View style={{ width: 24 }} />
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
                <View style={styles.card}>
                    <Image source={{ uri: product.image_url }} style={styles.image} />
                    <View style={styles.info}>
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

                <TouchableOpacity style={styles.ingredientHeader} onPress={toggleIngredients} activeOpacity={0.7}>
                    <Text style={styles.ingredientHeaderText}>Ingredientes</Text>
                    <Ionicons name={ingredientsExpanded ? "chevron-up" : "chevron-down"} size={20} color="#391D8A" />
                </TouchableOpacity>

                {loading ? (
                    <ActivityIndicator size="small" color="#4B3D9A" style={{ marginTop: 10 }} />
                ) : (
                    ingredientsExpanded && ingredients.map((ingredient, index) => {
                        const key = ingredient.id || `ingredient-${index}`;
                        return (
                            <TouchableOpacity
                                key={key}
                                style={styles.ingredientItem}
                                onPress={() => handleIngredientToggle(ingredient.id, index)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.ingredientName}>{ingredient.nome}</Text>
                                {selectedIngredients[key] ? (
                                    <Ionicons name="checkbox" size={24} color="#391D8A" />
                                ) : (
                                    <Ionicons name="square-outline" size={24} color="#391D8A" />
                                )}
                            </TouchableOpacity>
                        );
                    })
                )}

                <TouchableOpacity style={styles.ingredientHeader}
                    onPress={toggleExtras} activeOpacity={0.7}
                >
                    <Text style={styles.ingredientHeaderText}>Adicionais</Text>
                    <Ionicons name={extrasExpanded ? "chevron-up" : "chevron-down"} size={20} color="#391D8A" />
                </TouchableOpacity>

                {loading ? (
                    <ActivityIndicator size="small" color="#4B3D9A" style={{ marginTop: 10 }} />
                ) : (
                    extrasExpanded && extras.map((extras, index) => {
                        const key = extras.id || `extras-${index}`;
                        return (
                            <TouchableOpacity
                                key={key}
                                style={styles.ingredientItem}
                                onPress={() => handleExtrasToggle(extras.id, index)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.ingredientName}>{extras.nome} {formatarPreco(extras.price)}</Text>
                                {selectedExtras[key] ? (
                                    <Ionicons name="checkbox" size={24} color="#391D8A" />
                                ) : (
                                    <Ionicons name="square-outline" size={24} color="#391D8A" />
                                )}
                            </TouchableOpacity>
                        );
                    })
                )}

                <TextInput
                    style={styles.textArea}
                    placeholder="Alguma observação?"
                    multiline
                    maxLength={250}
                    value={observation}
                    onChangeText={setObservation}
                />
            </ScrollView>

            <TouchableOpacity
                style={{ marginHorizontal: 20, marginBottom: 20 }}
                onPress={() => {
                    // Filtra ingredientes que estão "false", ou seja, removidos
                    const removedIngredients = Object.entries(selectedIngredients)
                        .filter(([_, value]) => value === false)
                        .map(([id]) => id);

                    // Payload para o backend
                    const itemToSend = {
                        product_id: product.id,
                        qtd: quantity,
                        price: totalPrice,
                        // pedido_id: deve ser preenchido só após a finalização do pedido
                    };

                    // payload "completo" que fica no contexto do carrinho (para exibir no resumo)
                    const cartItem = {
                        ...itemToSend,
                        name: product.name,
                        image_url: product.image_url,
                        removedIngredients,
                        extras: selectedExtras,
                        observation,
                    };

                    console.log("Item que vai para o carrinho:", cartItem);

                    // cartContext.addItem(cartItem);
                    // navigation.goBack();
                }}


            >
                <View style={[styles.confirmButton, { backgroundColor: '#FF3B30' }]}>
                    <Text style={styles.confirmText}>
                        Adicionar ao Carrinho - {formatarPreco(totalPrice)}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF" },
    scrollView: { flex: 1 },
    scrollContent: { flexGrow: 1, paddingBottom: 40 },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 52,
        paddingHorizontal: 20,
    },
    logoText: { fontSize: 20, fontWeight: "700", color: "#FFF" },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: { width: 100, height: 100, borderRadius: 12 },
    info: { flex: 1, marginLeft: 12 },
    productName: { fontSize: 18, fontWeight: "bold", color: "#222" },
    price: { fontSize: 16, marginVertical: 5 },
    quantityContainer: { flexDirection: "row", alignItems: "center", marginTop: 8 },
    button: { width: 32, height: 32, borderRadius: 8, backgroundColor: "#FDEDED", justifyContent: "center", alignItems: "center" },
    buttonText: { color: "#FF3B30", fontWeight: "bold", fontSize: 16 },
    quantity: { marginHorizontal: 12, fontSize: 16 },
    ingredientHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 10,
    },
    ingredientHeaderText: { fontSize: 18, fontWeight: "bold", color: "#222" },
    ingredientItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 20,
        marginBottom: 8,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    ingredientName: { fontSize: 16, fontWeight: "600", color: "#222" },
    textArea: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        padding: 14,
        marginHorizontal: 20,
        marginTop: 20,
        textAlignVertical: "top",
        fontSize: 16,
    },
    confirmButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    confirmText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
})
