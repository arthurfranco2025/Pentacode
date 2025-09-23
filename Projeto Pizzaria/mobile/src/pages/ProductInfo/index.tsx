import React, { useState, useRef } from "react";
import {
    View,
    ScrollView,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import CustomizeProduct from "../CustomizeProduct";

type RootStackParamList = {
    Home: undefined;
    CustomizeProduct: undefined;
};

const CategoryCard = ({
    image,
    label,
    bgImage,
}: {
    image: string;
    label: string;
    bgImage: string;
}) => (
    <ImageBackground source={{ uri: bgImage }} resizeMode="stretch" style={styles.categoryBg}>
        <Image source={{ uri: image }} resizeMode="stretch" style={styles.categoryImage} />
        <Text style={styles.categoryText}>{label}</Text>
    </ImageBackground>
);

export default function ProductInfo() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Mostrar/ocultar categorias
    const [showCategories, setShowCategories] = useState(true);

    // Setar como favorito
    const [isFavorite, setIsFavorite] = useState(false);
    const favoriteAnim = useRef(new Animated.Value(1)).current;

    const handleFavoritePress = () => {
        setIsFavorite(prev => !prev);

        Animated.sequence([
            Animated.timing(favoriteAnim, {
                toValue: 1.5,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }),
            Animated.timing(favoriteAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }),
        ]).start();
    };

    function handleAddToCart() {
        navigation.navigate("CustomizeProduct");
    }


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {/* Header */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={["#391D8A", "#261B47"]}
                    style={styles.header}
                >
                    <TouchableOpacity>
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

                {/* Categorias */}
                <View style={styles.menuSearchRow}>
                    <TouchableOpacity onPress={() => setShowCategories(v => !v)} activeOpacity={0.8}>
                        <Image
                            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/menu.png" }}
                            style={styles.sideIcon}
                        />
                    </TouchableOpacity>

                    {/* Barra de busca */}
                    <View style={styles.searchBox}>
                        <Image
                            source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" }}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            placeholder="Buscar"
                            placeholderTextColor="#8A8A8A"
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={styles.mainRow}>
                    {showCategories && (
                        <View style={styles.leftColumn}>
                            <CategoryCard
                                image="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/byxk8i28_expires_30_days.png"
                                bgImage="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/8p1f6qnp_expires_30_days.png"
                                label="Pizzas"
                            />
                        </View>
                    )}

                    {/* Conteúdo principal */}
                    <View style={styles.mainContent}>
                        <Image
                            source={{
                                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/92yaqjg3_expires_30_days.png",
                            }}
                            style={styles.pizzaImage}
                        />

                        <View style={styles.pizzaHeader}>
                            <Text style={styles.pizzaTitle}>Pizza de Calabresa</Text>
                            <TouchableOpacity onPress={handleFavoritePress}>
                                <Animated.Image
                                    source={{
                                        uri: isFavorite
                                            ? "https://img.icons8.com/ios-filled/50/FF3F4B/like.png"
                                            : "https://img.icons8.com/ios/50/000000/like--v1.png",
                                    }}
                                    style={[
                                        styles.favoriteIcon,
                                        { transform: [{ scale: favoriteAnim }] },
                                    ]}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.pizzaDesc}>
                            Uma clássica que conquista todos os paladares! Nossa pizza de
                            calabresa é preparada com massa fresca artesanal.
                        </Text>

                        <View style={styles.priceRow}>
                            <Text style={styles.price}>R$50.00</Text>
                            <Image
                                source={{
                                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/twy8g4s9_expires_30_days.png",
                                }}
                                style={styles.moneyIcon}
                            />
                            <Text style={styles.rating}>30</Text>
                            <Image
                                source={{
                                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/a8ywsjze_expires_30_days.png",
                                }}
                                style={styles.starIcon}
                            />
                        </View>

                        {/* Botões */}
                        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                            <Text style={styles.addButtonText}>Adicionar ao pedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payButtonText}>Pagar separadamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Rodapé */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#391E8B", "#261B47"]}
                style={styles.footer}
            >
                <View style={styles.footerRow}>
                    <Image
                        source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/e6jpmght_expires_30_days.png",
                        }}
                        resizeMode="stretch"
                        style={styles.cartIcon}
                    />
                    <Text style={styles.cartText}>: 0.00</Text>
                </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderText}>Pedido</Text>
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
    sideIcon: { width: 28, height: 28, marginRight: 10 },
    searchBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#0000003b",
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 10,
        height: 40,
    },
    menuSearchRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    input: { flex: 1 },
    searchIcon: { width: 20, height: 20, marginRight: 8 },
    mainRow: { flexDirection: "row" },
    leftColumn: {
        alignItems: "center",
        backgroundColor: "#fff",
        marginRight: 9,
        shadowColor: "#00000040",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 4,
    },
    categoryBg: { alignItems: "center", paddingVertical: 40, paddingHorizontal: 13 },
    categoryImage: { width: 126, height: 118 },
    categoryText: { color: "#38207F", fontSize: 22, marginTop: 10 },

    mainContent: { flex: 1, padding: 15 },
    pizzaImage: { width: "100%", height: 180, borderRadius: 12 },
    pizzaHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    pizzaTitle: { fontSize: 20, fontWeight: "700" },
    favoriteIcon: { width: 24, height: 24 },
    pizzaDesc: { color: "#333", marginBottom: 10 },
    priceRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
    price: { fontSize: 16, fontWeight: "700", marginRight: 5 },
    rating: { fontSize: 16, fontWeight: "500", marginHorizontal: 5 },
    moneyIcon: { width: 20, height: 20 },
    starIcon: { width: 20, height: 20 },
    addButton: {
        backgroundColor: "#FF3F4B",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 15,
    },
    addButtonText: { color: "#fff", fontWeight: "700" },
    payButton: {
        backgroundColor: "#391E8B",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 15,
    },
    payButtonText: { color: "#fff", fontWeight: "700" },

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
    orderButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3F4B",
        borderRadius: 12,
        marginLeft: 16,
        paddingVertical: 10,
    },
    orderText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
