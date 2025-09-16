import React from "react";
import {
    View,
    ScrollView,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function ProductInfo() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Header com gradiente */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={["#391D8A", "#261B47"]}
                    style={styles.header}
                >
                    <Image
                        source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/m6rofw5v_expires_30_days.png",
                        }}
                        resizeMode="stretch"
                        style={styles.backIcon}
                    />
                    <Image
                        source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/sbg7gqtt_expires_30_days.png",
                        }}
                        resizeMode="stretch"
                        style={styles.logo}
                    />
                </LinearGradient>

                {/* Search bar */}
                <View style={styles.searchRow}>
                    <Image
                        source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/gwp9t6hl_expires_30_days.png",
                        }}
                        resizeMode="stretch"
                        style={styles.menuIcon}
                    />
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInner}>
                            <Image
                                source={{
                                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/4nec9pur_expires_30_days.png",
                                }}
                                resizeMode="stretch"
                                style={styles.searchIcon}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.contentRow}>
                    {/* Sidebar */}
                    <View style={styles.sidebar}>
                        <View style={styles.sidebarMenu}>
                            <ImageBackground
                                source={{
                                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/dvy4homo_expires_30_days.png",
                                }}
                                resizeMode="stretch"
                                style={styles.sidebarItem}
                            >
                                <Image
                                    source={{
                                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/q34j2vzl_expires_30_days.png",
                                    }}
                                    style={styles.sidebarImage}
                                />
                                <Text style={styles.sidebarText}>Bebidas</Text>
                            </ImageBackground>

                            <ImageBackground
                                source={{
                                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/5o53bv9j_expires_30_days.png",
                                }}
                                resizeMode="stretch"
                                style={styles.sidebarItem}
                            >
                                <Image
                                    source={{
                                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/pipz4ms2_expires_30_days.png",
                                    }}
                                    style={styles.sidebarImage}
                                />
                                <Text style={styles.sidebarText}>Pizzas</Text>
                            </ImageBackground>

                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode="stretch"
                                style={styles.sidebarExtra}
                            />
                        </View>

                        {/* Footer pedido */}
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={["#391E8B", "#261B47"]}
                            style={styles.footer}
                        >
                            <View style={styles.footerRow}>
                                <Image
                                    source={{
                                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/uywypiuo_expires_30_days.png",
                                    }}
                                    style={styles.cartIcon}
                                />
                                <Text style={styles.cartText}>: 0.00</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.orderButton}
                                onPress={() => alert("Pedido!")}
                            >
                                <Text style={styles.orderButtonText}>Pedido</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

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
                            <Image
                                source={{
                                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/2c9qbj2u_expires_30_days.png",
                                }}
                                style={styles.favoriteIcon}
                            />
                        </View>

                        <View style={styles.pizzaDetails}>
                            <Text style={styles.pizzaDesc}>
                                Uma clássica que conquista todos os paladares! Nossa pizza de
                                calabresa é preparada com massa fresca artesanal.
                            </Text>

                            <View style={styles.priceColumn}>
                                <Text style={styles.price}>R$50.00</Text>
                                <Text style={styles.rating}>30</Text>
                            </View>

                            <View style={styles.iconsRow}>
                                <Image
                                    source={{
                                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/twy8g4s9_expires_30_days.png",
                                    }}
                                    style={styles.moneyIcon}
                                />
                                <Image
                                    source={{
                                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/a8ywsjze_expires_30_days.png",
                                    }}
                                    style={styles.starIcon}
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => alert("Adicionado ao pedido!")} // Mudar posteriomente
                        >
                            <Text style={styles.addButtonText}>Adicionar ao pedido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.payButton}
                            onPress={() => alert("Pagamento separado!")} // Mudar posteriomente
                        >
                            <Text style={styles.payButtonText}>Pagar separadamente</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF" },
    scrollView: { flex: 1 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    backIcon: { width: 30, height: 30, marginRight: 10 },
    logo: { width: 140, height: 40 },
    searchRow: { flexDirection: "row", alignItems: "center", margin: 10 },
    menuIcon: { width: 30, height: 30 },
    searchContainer: { flex: 1, marginLeft: 10 },
    searchInner: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIcon: { width: 20, height: 20 },
    contentRow: { flexDirection: "row" },
    sidebar: { width: 100, backgroundColor: "#F8F8F8" },
    sidebarMenu: { alignItems: "center", paddingVertical: 20 },
    sidebarItem: {
        width: 90,
        height: 120,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    sidebarImage: { width: 50, height: 50 },
    sidebarText: { marginTop: 5, fontWeight: "600", color: "#333" },
    sidebarExtra: { width: 80, height: 80, marginTop: 20 },
    footer: { padding: 15, marginTop: 40 },
    footerRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
    cartIcon: { width: 20, height: 20, marginRight: 8 },
    cartText: { color: "#fff", fontWeight: "600" },
    orderButton: {
        backgroundColor: "#FF3F4B",
        borderRadius: 16,
        paddingVertical: 10,
        alignItems: "center",
    },
    orderButtonText: { color: "#fff", fontWeight: "700" },
    mainContent: { flex: 1, padding: 15 },
    pizzaImage: { width: "100%", height: 180, borderRadius: 12 },
    pizzaHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    pizzaTitle: { fontSize: 18, fontWeight: "700" },
    favoriteIcon: { width: 24, height: 24 },
    pizzaDetails: { marginBottom: 15 },
    pizzaDesc: { color: "#333", marginBottom: 10 },
    priceColumn: { flexDirection: "row", alignItems: "center" },
    price: { fontSize: 16, fontWeight: "700", marginRight: 10 },
    rating: { fontSize: 16, fontWeight: "500" },
    iconsRow: { flexDirection: "row", marginTop: 5 },
    moneyIcon: { width: 20, height: 20, marginRight: 8 },
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
    payButtonText: {
        color: "#fff",
        fontWeight: "700",
    },

});
