import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp, RouteProp } from "@react-navigation/native";

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

export default function Order({ route }: { route?: RouteProp<RootStackParamList, "Order"> }) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const product = route?.params?.product;

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={{ padding: 20, alignItems: "center" }}>To fazendo ainda, calma</Text>
            </View>
        );
    }

    // Quantidade inicial
    const [quantity, setQuantity] = useState(1);

    // Função para alterar a quantidade
    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity);
        }
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
            </ScrollView>
        </View>
    )
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
});