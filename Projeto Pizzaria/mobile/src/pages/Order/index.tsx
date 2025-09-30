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
    Home: undefined
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
            <View style={styles.noProduct}>
                <Image
                    source={{ uri: 'https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-carrinho-de-compras-6.png' }}
                    style={styles.cart}
                />
                <Text>Nenhum produto no carrinho.</Text>
                <TouchableOpacity style={styles.returnButton} onPress={() => { navigation.navigate('Home') }}>
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

                <Text style={styles.title}>Comanda</Text>

                <View style={styles.card}>
                    <Image
                        source={{ uri: product.image_url }}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.price}>R$ {product.price}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    noProduct: { alignItems: 'center', },
    cart: { width: 100, height: 100 },
    returnButton: {
        backgroundColor: "#FF3F4B",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 15,
    },
    returnButtonText: {
        color: "#fff",
        fontWeight: "700",
        padding: 8,
    },
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
    title: { padding: 10, fontSize: 25, fontWeight: 700 },
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
});