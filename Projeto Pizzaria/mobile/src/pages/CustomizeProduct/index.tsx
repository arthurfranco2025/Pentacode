import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
    ProductInfo: undefined;
    CustomizeProduct: undefined;
};

export default function CustomizeProduct() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [quantity, setQuantity] = useState(1);
    const [options, setOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false
    });

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
                        Sujeito<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
                    </Text>
                    <View style={{ width: 24 }} />
                </LinearGradient>

                {/* Conteúdo Principal */}
                <Text style={styles.title}>ITEM</Text>

                <View style={styles.card}>
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/92yaqjg3_expires_30_days.png" }}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.productName}>NOME DO PRODUTO</Text>
                        <Text style={styles.price}>R$0.00</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setQuantity(q => Math.max(0, q - 1))}
                            >
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setQuantity(q => q + 1)}
                            >
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.deleteButton}>
                                <Ionicons name="trash-outline" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Text style={styles.subTitle}>PERSONALIZAR PRODUTO</Text>

                {Object.keys(options).map((key, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.option}
                    >
                        <View
                            style={[
                                styles.checkbox,
                                options[key as keyof typeof options] && styles.checked
                            ]}
                        />
                        <Text style={styles.optionText}>Opção {index + 1}</Text>
                    </TouchableOpacity>
                ))}

                <TextInput
                    style={styles.textArea}
                    placeholder="Observações..."
                    multiline
                    maxLength={250}
                />
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
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmText}>Confirmar</Text>
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
});
