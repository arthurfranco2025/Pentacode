import React, { useState, useEffect } from "react";
import { api } from '../../services/api';
import {
    View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, NavigationProp, RouteProp } from "@react-navigation/native";


type RootStackParamList = {
    ProductInfo: {
        product: Product;
    }
    CustomizeProduct: {
        product: Product;
    };
};

interface Product {
    id: string;
    name: string;
    price: string;
    description?: string;
    image_url: string;
    category_id: string
}

interface Ingredients {
    id: string;
    name: string;
    price: string;
}

interface Ingredients_Products {
    id: string;
    name: string;
    price: string;
    qtd: string;
}

export default function CustomizeProduct() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CustomizeProduct'>>();
    const { product } = route.params;

    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');
    const [totalPrice, setTotalPrice] = useState(Number(product.price));
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const [ingredients, setIngredients] = useState<Ingredients_Products[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function loadIngredients() {
            try {
                const response = await api.get('produto_ingrediente/lista', {
                    params: {
                        product_id: product.id
                    }
                });
                
                // Ver a resposta da API
                console.log('API Response:', response.data) 
                setIngredients(response.data);
                setLoading(false);
            } catch(error) {
                console.error('Erro ao carregar ingredientes:', error );
                setLoading(false)
            }
        }

        loadIngredients();
    }, [product.id]);

    // Mock data for extras
    const extras = [
        { id: '1', name: 'Borda Recheada', price: '5.00' },
        { id: '2', name: 'Queijo Extra', price: '4.00' },
        { id: '3', name: 'Bacon', price: '3.00' },
        { id: '4', name: 'Cebola Caramelizada', price: '2.00' },
    ];

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            updateTotalPrice(newQuantity, selectedExtras);
        }
    };

    const toggleExtra = (extraId: string) => {
        const updatedExtras = selectedExtras.includes(extraId)
            ? selectedExtras.filter(id => id !== extraId)
            : [...selectedExtras, extraId];
        
        setSelectedExtras(updatedExtras);
        updateTotalPrice(quantity, updatedExtras);
    };

    const updateTotalPrice = (qty: number, selected: string[]) => {
        const basePrice = Number(product.price);
        const extrasPrice = selected.reduce((total, extraId) => {
            const extra = extras.find(e => e.id === extraId);
            return total + (extra ? Number(extra.price) : 0);
        }, 0);
        
        setTotalPrice((basePrice + extrasPrice) * qty);
    };

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

                <View style={styles.content}>
                    <Text style={styles.title}>Personalizar Pedido</Text>

                    <View style={styles.card}>
                        <Image
                            source={{ uri: product.image_url }}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.price}>R$ {product.price}</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => handleQuantityChange(quantity - 1)}
                                >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => handleQuantityChange(quantity + 1)}
                                >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.subTitle}>Ingredientes</Text>
                    {loading ? (
                        <ActivityIndicator size="small" color="#4B3D9A" />
                    ) : (
                        <View style={styles.ingredientsContainer}>
                            {ingredients.map((ingredient) => (
                                <View key={ingredient.id} style={styles.ingredientItem}>
                                    <Text style={styles.ingredientName}>
                                        {ingredient.name}
                                    </Text>
                                    <Text style={styles.ingredientQtd}>
                                        {ingredient.qtd}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}


                    <Text style={styles.subTitle}>Observações</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Alguma observação?"
                        multiline
                        maxLength={250}
                        value={observation}
                        onChangeText={setObservation}
                    />
                </View>
            </ScrollView>

            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#391E8B", "#261B47"]}
                style={styles.footer}
            >
                <View style={styles.footerRow}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalPrice}>R$ {totalPrice.toFixed(2)}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.confirmButton}
                    onPress={() => {
                        // Implement add to cart logic here
                        navigation.goBack();
                    }}
                >
                    <Text style={styles.confirmText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </LinearGradient>
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

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4B3D9A",
        margin: 10
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12
    },
    info: {
        flex: 1,
        marginLeft: 10
    },
    productName: {
        fontWeight: "bold",
        fontSize: 16
    },
    price: {
        fontSize: 14,
        marginVertical: 5
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    button: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "#FDEDED",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FF3B30",
        fontWeight: "bold",
        fontSize: 16
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 16
    },
    deleteButton: {
        marginLeft: "auto",
        backgroundColor: "#FF3B30",
        padding: 8,
        borderRadius: 8
    },
    subTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10
    },
    checked: {
        backgroundColor: "#4B3D9A",
        borderColor: "#4B3D9A"
    },
    optionText: {
        fontSize: 14
    },
    textArea: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        margin: 20,
        textAlignVertical: "top"
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    footerRow: { flexDirection: "row", alignItems: "center", gap: 8 },
    cartIcon: { width: 28, height: 28 },
    cartText: { color: "#fff", fontSize: 16, fontWeight: "600" },
    confirmButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3F4B",
        borderRadius: 12,
        marginLeft: 16,
        paddingVertical: 10,
    },
    confirmText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
    totalLabel: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    },
    totalPrice: {
        color: "#FF3F4B",
        fontSize: 16,
        fontWeight: "bold"
    },
    extraPrice: {
        marginLeft: "auto",
        color: "#4B3D9A",
        fontWeight: "bold"
    },
    content: {
        padding: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#fff",
        flex: 1
    },
    ingredientsContainer: {
        marginHorizontal: 10,
        marginBottom: 20,
    },
    
    ingredientItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
    },
    
    ingredientName: {
        fontSize: 14,
        color: '#000',
    },
    
    ingredientQtd: {
        fontSize: 14,
        color: '#000',
    },
});
