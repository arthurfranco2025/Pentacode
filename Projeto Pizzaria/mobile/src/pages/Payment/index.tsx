import React, { useState } from "react";
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes"; // Ajuste o caminho conforme sua pasta

type PaymentScreenNavigationProp = NativeStackNavigationProp<StackParamsList, "Payment">;

export default function Payment() {
    const [selectedCard, setSelectedCard] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [finalConfirmVisible, setFinalConfirmVisible] = useState(false);
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);

    const navigation = useNavigation<PaymentScreenNavigationProp>();

    const cardOptions = [
        { label: "Crédito", value: "credito" },
        { label: "Débito", value: "debito" },
    ];

    const handleConfirmPayment = () => {
        if (!selectedOption) return;
        setFinalConfirmVisible(true); // abre modal de confirmação
    };

    const handleFinalConfirm = () => {
        setFinalConfirmVisible(false);
        setConfirmModalVisible(true);
        setPaymentConfirmed(true);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={["#391D8A", "#261B47"]}
                    style={styles.header}
                >
                    <View style={{ width: 24 }} />
                    <Text style={styles.logoText}>
                        Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
                    </Text>
                    <View style={{ width: 24 }} />
                </LinearGradient>

                <Text style={styles.sectionTitle}>Formas de Pagamento</Text>

                {/* Opções de pagamento */}
                <View style={styles.optionsWrapper}>
                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === "Vale Refeição" && styles.optionSelected]}
                        onPress={() => setSelectedOption("Vale Refeição")}
                        disabled={paymentConfirmed}
                    >
                        <Image
                            source={{ uri: "https://www.cidademarketing.com.br/marketing/wp-content/uploads/2019/02/valealimentacao_pesquisa.jpg" }}
                            style={styles.optionImage}
                        />
                        <Text style={styles.optionText}>Vale Refeição</Text>
                        {selectedOption === "Vale Refeição" && <Text style={styles.checkIcon}>✔️</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === "PIX" && styles.optionSelected]}
                        onPress={() => setSelectedOption("PIX")}
                        disabled={paymentConfirmed}
                    >
                        <Image
                            source={{ uri: "https://img.icons8.com/color/512/pix.png" }}
                            style={styles.optionImage}
                        />
                        <Text style={styles.optionText}>Pix QR Code</Text>
                        {selectedOption === "PIX" && <Text style={styles.checkIcon}>✔️</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === "cartao" && styles.optionSelected]}
                        onPress={() => setModalVisible(true)}
                        disabled={paymentConfirmed}
                    >
                        <Image
                            source={{ uri: "https://images.vexels.com/media/users/3/261853/isolated/preview/71bdb0b66f426075b049dc89581d8178-icone-de-cartoes-de-credito-de-dinheiro.png" }}
                            style={styles.optionImage}
                        />
                        <Text style={styles.optionText}>
                            {selectedCard ? cardOptions.find((o) => o.value === selectedCard)?.label : "Selecionar Cartão"}
                        </Text>
                        {selectedOption === "cartao" && <Text style={styles.checkIcon}>✔️</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === "Dinheiro" && styles.optionSelected]}
                        onPress={() => setSelectedOption("Dinheiro")}
                        disabled={paymentConfirmed}
                    >
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/5899/5899792.png" }}
                            style={styles.optionImage}
                        />
                        <Text style={styles.optionText}>Dinheiro</Text>
                        {selectedOption === "Dinheiro" && <Text style={styles.checkIcon}>✔️</Text>}
                    </TouchableOpacity>
                </View>

                {/* Botão confirmar / trocar */}
                {!paymentConfirmed ? (
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={handleConfirmPayment}
                    >
                        <Text style={styles.confirmText}>Confirmar Forma de Pagamento</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.changeButton}
                        onPress={() => {
                            setPaymentConfirmed(false);
                            setSelectedOption("");
                            setSelectedCard("");
                        }}
                    >
                        <Text style={styles.changeButtonText}>Trocar Forma de Pagamento</Text>
                    </TouchableOpacity>
                )}

                {/* MODAL DE CARTÃO */}
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalBox}>
                            <Text style={styles.modalTitle}>Escolha o tipo de cartão</Text>
                            {cardOptions.map((opt) => (
                                <TouchableOpacity
                                    key={opt.value}
                                    style={styles.modalButton}
                                    onPress={() => {
                                        setSelectedCard(opt.value);
                                        setSelectedOption("cartao");
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.modalButtonText}>{opt.label}</Text>
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity
                                style={[styles.modalButton, { backgroundColor: "#aaa" }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* MODAL DE CONFIRMAÇÃO */}
                <Modal
                    transparent={true}
                    visible={finalConfirmVisible}
                    animationType="fade"
                    onRequestClose={() => setFinalConfirmVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.confirmModalBox}>
                            <Text style={styles.confirmModalTitle}>Deseja confirmar a forma de pagamento?</Text>
                            <Text style={styles.confirmModalText}>
                                {selectedOption === "cartao"
                                    ? cardOptions.find((o) => o.value === selectedCard)?.label
                                    : selectedOption}
                            </Text>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <TouchableOpacity
                                    style={[styles.confirmModalButton, { backgroundColor: "#22BB33" }]}
                                    onPress={handleFinalConfirm}
                                >
                                    <Text style={styles.confirmModalButtonText}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.confirmModalButton, { backgroundColor: "#FF3F4B" }]}
                                    onPress={() => setFinalConfirmVisible(false)}
                                >
                                    <Text style={styles.confirmModalButtonText}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* MODAL DE PAGAMENTO CONFIRMADO */}
                <Modal
                    transparent={true}
                    visible={confirmModalVisible}
                    animationType="fade"
                    onRequestClose={() => setConfirmModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.confirmModalBox}>
                            <Text style={styles.confirmModalTitle}>✅ Forma de pagamento escolhida!</Text>
                            <Text style={styles.confirmModalSubtitle}>O garçom está à caminho!</Text>
                            <Text style={styles.confirmModalText}>
                                Você selecionou:{" "}
                                {selectedOption === "cartao"
                                    ? cardOptions.find((o) => o.value === selectedCard)?.label
                                    : selectedOption}
                            </Text>
                            <TouchableOpacity
                                style={styles.confirmModalButton}
                                onPress={() => setConfirmModalVisible(false)}
                            >
                                <Text style={styles.confirmModalButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>

            {/* BOTÃO LOGOUT */}
            {paymentConfirmed && (
                <View style={styles.logoutWrapper}>
                    <Text style={styles.logoutText}>Já efetuou o pagamento?</Text>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => navigation.navigate("SignIn")}
                    >
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

// Mantive exatamente os mesmos styles que você já tinha
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF", alignItems: "center" },
    scrollView: { flex: 1, width: "100%" },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 30,
    },
    logoText: { fontSize: 28, fontWeight: "bold", color: "#FFF" },

    sectionTitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#333" },

    optionsWrapper: {
        gap: 20,
        marginBottom: 30,
    },
    
    scrollContent: {
        flexGrow: 1,
        alignItems: "stretch",
        paddingBottom: 40,
    },

    optionButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: 14,
        borderRadius: 12,
        marginHorizontal: 25,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    optionSelected: { borderWidth: 2, borderColor: "#391D8A" },
    optionImage: { width: 60, height: 60, marginRight: 20, borderRadius: 8 },
    optionText: { fontSize: 18, fontWeight: "600", color: "#222", flex: 1 },
    checkIcon: { fontSize: 20, color: "green", fontWeight: "bold" },

    confirmButton: {
        backgroundColor: "#FF3F4B",
        marginHorizontal: 30,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 20,
        elevation: 4,
    },
    confirmText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },

    changeButton: {
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#391D8A",
        marginHorizontal: 30,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 20,
    },
    changeButtonText: {
        color: "#391D8A",
        fontSize: 18,
        fontWeight: "bold",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        backgroundColor: "#FFF",
        width: "75%",
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
    },
    modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15, color: "#222" },
    modalButton: {
        width: "100%",
        padding: 12,
        backgroundColor: "#391D8A",
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
    },
    modalButtonText: { color: "#FFF", fontSize: 16, fontWeight: "600" },

    confirmModalBox: {
        backgroundColor: "#FFF",
        width: "80%",
        padding: 25,
        borderRadius: 16,
        alignItems: "center",
    },
    confirmModalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#22BB33", textAlign: "center" },
    confirmModalText: { fontSize: 14, marginBottom: 20, textAlign: "center" },
    confirmModalButton: {
        backgroundColor: "#FF3F4B",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginHorizontal: 5,
    },
    confirmModalButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    confirmModalSubtitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#391D8A", textAlign: "center" },

    logoutWrapper: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 10,
    },
    logoutText: {
        marginBottom: 10,
        fontSize: 16,
        color: "#333",
        fontWeight: "600",
    },
    logoutButton: {
        backgroundColor: "#FF3F4B",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 12,
        elevation: 4,
    },
    logoutButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
