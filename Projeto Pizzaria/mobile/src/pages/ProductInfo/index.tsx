import React, { useState, useRef } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice"
import CustomizeProduct from "../CustomizeProduct";

type RootStackParamList = {
    Home: undefined;
    ProductInfo: {
        product: Product;
    }
    CustomizeProduct: {
        product: Product;
    };
};

type RouteParams = RouteProp<RootStackParamList, 'ProductInfo'>;

interface Product {
    id: string;
    name: string;
    price: string;
    description?: string;
    image_url: string;
    category_id: string
}


export default function ProductInfo() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [isFavorite, setIsFavorite] = useState(false);
    const favoriteAnim = useRef(new Animated.Value(1)).current;

    const route = useRoute<RouteParams>();
    const { product } = route.params;


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

    function handlePaySeparately() {

    }

    return (
        <View style={styles.container}>
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

            <View style={styles.mainContent}>
                <Image
                    source={{ uri: product.image_url }}
                    resizeMode="cover"
                    style={styles.image}
                />

                <View style={styles.contentContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{product.name}</Text>
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

                    <Text style={styles.desc}>{product.description}</Text>
                    
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{formatarPreco(product.price)}</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CustomizeProduct', { product: product })}>
                            <Text style={styles.addButtonText}>Adicionar ao pedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payButtonText}>Pagar separadamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

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
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scroll: {
        flex: 1
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
        color: "#fff",
        fontSize: 20,
        fontWeight: "700"
    },
    mainContent: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    productInfo: {
        flex: 1,
        padding: 20
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        flex: 1,
        paddingRight: 10,
    },
    desc: {
        color: "#333",
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 24,
    },
    favoriteIcon: {
        width: 24,
        height: 24
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    price: {
        fontSize: 16,
        fontWeight: "700",
    },
    addButton: {
        backgroundColor: "#FF3F4B",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 15,
    },
    addButtonText: {
        color: "#fff",
        fontWeight: "700"
    },
    payButton: {
        backgroundColor: "#391E8B",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 15,
    },
    payButtonText: {
        color: "#fff",
        fontWeight: "700"
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    footerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    cartIcon: {
        width: 28,
        height: 28
    },
    cartText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    },
    orderButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3F4B",
        borderRadius: 12,
        marginLeft: 16,
        paddingVertical: 10,
    },
    orderText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
});