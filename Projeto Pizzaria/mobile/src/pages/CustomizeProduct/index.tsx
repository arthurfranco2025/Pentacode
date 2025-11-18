import React, { useState, useEffect, useContext } from "react";
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
    StyleSheet,
    Modal,
    Alert
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { usePedido } from "../../contexts/pedidoContext";
import { AuthContext } from "../../contexts/AuthContext";
import sendNotificationOrder from "../Notification/order";


interface Product {
    id: string;
    name: string;
    price: string;
    points: number;
    description?: string;
    image_url: string;
    category_id: string;
}

interface Ingrediente {
    id: string;
    nome: string;
    price: string;
}

interface Adicional {
    id: string;
    nome: string;
    price: string;
    points?: number; // Adiciona pontos aos extras, se existirem
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CustomizeProduct() {
    const { addItem, pedidoId, setPedidoId, orderType, setOrderType } = usePedido();
    const { user } = useContext(AuthContext);
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { product } = route.params;

    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');
    const [totalPrice, setTotalPrice] = useState(Number(product.price));
    const [totalPoints, setTotalPoints] = useState(Number(product.points));
    const [extras, setExtras] = useState<Adicional[]>([]);
    const [extrasExpanded, setExtrasExpanded] = useState(false);
    const [ingredients, setIngredients] = useState<Ingrediente[]>([]);
    const [loading, setLoading] = useState(true);
    const [ingredientsExpanded, setIngredientsExpanded] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<{ [key: string]: boolean }>({});
    const [selectedExtras, setSelectedExtras] = useState<{ [key: string]: boolean }>({});
    const [error, setError] = useState("");
    const [isAdding, setIsAdding] = useState(false);

    // se já houver um tipo de pedido em andamento, usamos para bloquear o outro botão
    const confirmDisabled = isAdding || orderType === 'points';
    const pointsDisabled = isAdding || orderType === 'normal';

    const [showSecondFlavorModal, setShowSecondFlavorModal] = useState(false);
    const [secondFlavorProducts, setSecondFlavorProducts] = useState<Product[]>([]);
    const [selectedSecondFlavor, setSelectedSecondFlavor] = useState<Product | null>(null);

    // Carrega ingredientes (somente pizza)
    useEffect(() => {
        if (product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c') {
            async function loadIngredients() {
                try {
                    const response = await api.get('produto_ingrediente/lista', { params: { product_id: product.id } });
                    const sortedIngredients = response.data.sort((a: Ingrediente, b: Ingrediente) => a.nome.localeCompare(b.nome));
                    setIngredients(sortedIngredients);

                    const initialSelection = sortedIngredients.reduce((acc: { [key: string]: boolean }, ing: Ingrediente) => {
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
        } else {
            setLoading(false);
        }
    }, [product.id]);

    // Carrega adicionais
    useEffect(() => {
        if (product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c') {
            async function loadExtras() {
                try {
                    const response = await api.get('/adicionais/lista');
                    const bordas = response.data
                        .filter((ex: Adicional) => ex.nome.toLowerCase().startsWith("borda"))
                        .sort((a: Adicional, b: Adicional) => a.nome.localeCompare(b.nome));
                    const outros = response.data
                        .filter((ex: Adicional) => !ex.nome.toLowerCase().startsWith("borda"))
                        .sort((a: Adicional, b: Adicional) => a.nome.localeCompare(b.nome));
                    setExtras([...bordas, ...outros]);

                    const initialAdSelection: { [key: string]: boolean } = {};
                    [...bordas, ...outros].forEach((ad: Adicional) => {
                        initialAdSelection[ad.id] = ad.nome.toLowerCase() === "borda tradicional";
                    });
                    setSelectedExtras(initialAdSelection);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            }
            loadExtras();
        }
    }, [product.id]);

    // 2º sabor - ordenado
    const openSecondFlavor = async () => {
        try {
            const response = await api.get("/category/products", { params: { category_id: "1da0ee77-2a79-4a91-a3a4-863857d9691c" } });
            const filteredProducts = response.data
                .filter((p: Product) => p.id !== product.id)
                .sort((a: Product, b: Product) => a.name.localeCompare(b.name));
            setSecondFlavorProducts(filteredProducts);
            setShowSecondFlavorModal(true);
        } catch (error) {
            console.error(error);
            alert("Erro ao carregar os sabores de pizza");
        }
    };

    const toggleSecondFlavor = (flavor: Product) => {
        if (selectedSecondFlavor?.id === flavor.id) {
            setSelectedSecondFlavor(null); // deseleciona
        } else {
            setSelectedSecondFlavor(flavor); // seleciona
        }
    };

    const handleExtrasToggle = (id: string, nome: string) => {
        setSelectedExtras(prev => {
            const isBorder = nome.toLowerCase().startsWith("borda");
            if (isBorder) {
                const newState = { ...prev };
                extras.filter(e => e.nome.toLowerCase().startsWith("borda")).forEach(e => newState[e.id] = false);
                newState[id] = !prev[id];
                return newState;
            }
            return { ...prev, [id]: !prev[id] };
        });
        setError("");
    };

    // Atualiza preço e pontos conforme quantidade, 2º sabor e adicionais
    useEffect(() => {
        const qtd = quantity;
        const price1 = Number(product.price);
        const price2 = selectedSecondFlavor ? Number(selectedSecondFlavor.price) : 0;

        const extrasPrice = Object.entries(selectedExtras).reduce((acc, [extraId, isSelected]) => {
            if (isSelected) {
                const extra = extras.find(e => e.id === extraId);
                return acc + (extra ? Number(extra.price) : 0);
            }
            return acc;
        }, 0);

        let finalPrice = 0;
        if (selectedSecondFlavor) {
            finalPrice = ((price1 / 2 + price2 / 2 + 10) + extrasPrice) * qtd;
        } else {
            finalPrice = (price1 + extrasPrice) * qtd;
        }
        setTotalPrice(finalPrice);

        // 🔹 PONTOS: produto base + 2º sabor + extras
        const extrasPoints = Object.entries(selectedExtras).reduce((acc, [extraId, isSelected]) => {
            if (isSelected) {
                const extra = extras.find(e => e.id === extraId);
                return acc + (extra?.points || 0);
            }
            return acc;
        }, 0);

        const secondFlavorPoints = selectedSecondFlavor?.points || 0;
        setTotalPoints((product.points + secondFlavorPoints + extrasPoints) * qtd);
    }, [quantity, selectedExtras, extras, selectedSecondFlavor, product.price, product.points]);

    // Função de adicionar ao pedido
    const handleAddToPedido = async () => {
        setIsAdding(true);
        setError("");
        try {
            if (!user?.id) throw new Error("Cliente não logado");

            const cliente_id = user.id;
            let pedido_id = pedidoId;

            if (pedido_id) {
                try {
                    const statusResp = await api.get(`/pedidos/${pedido_id}/status`);
                    const status = statusResp.data.status;
                    if (!status || status !== 'pedido em andamento') {
                        const pedidoResponse = await api.post("/pedido", { cliente_id });
                        pedido_id = pedidoResponse.data.id;
                        setPedidoId(pedido_id);
                    }
                } catch {
                    const pedidoResponse = await api.post("/pedido", { cliente_id });
                    pedido_id = pedidoResponse.data.id;
                    setPedidoId(pedido_id);
                }
            }

            if (!pedido_id) {
                const pedidoResponse = await api.post("/pedido", { cliente_id });
                pedido_id = pedidoResponse.data.id;
                setPedidoId(pedido_id);
            }

            const payload = {
                product_id: product.id,
                product2_id: selectedSecondFlavor?.id,
                pedido_id,
                qtd: quantity,
                removidos: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ({ id })),
                adicionais: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => ({ id })),
                observacoes: observation,
                // Este fluxo é para adicionar o item pagando com DINHEIRO,
                // portanto não marcamos como pago com pontos e não consumimos pontos.
                payWithPoints: false,
                pointsUsed: 0
            };

            const response = await api.post("/item", payload);
            const { item } = response.data;

            addItem({
                item_id: item.id,
                name: product.name,
                image_url: product.image_url,
                qtd: quantity,
                price: item.price,
                totalPrice: totalPrice,
                totalPoints: 0, // como é pago com dinheiro, o preço em pontos será 0
                removedIngredients: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ingredients.find(i => i.id === id)?.nome || id),
                extras: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => extras.find(e => e.id === id)?.nome || id),
                observation,
                secondFlavor: selectedSecondFlavor ? {
                    id: selectedSecondFlavor.id,
                    name: selectedSecondFlavor.name,
                    price: Number(selectedSecondFlavor.price),
                    image_url: selectedSecondFlavor.image_url
                } : undefined,
                payWithPoints: false,
                pointsUsed: 0
            });
            // marca o tipo do pedido como 'normal' após adicionar com sucesso
            try { setOrderType && setOrderType('normal'); } catch (e) { }
            sendNotificationOrder()
            navigation.navigate("Order");
        } catch (error: any) {
            const mensagem = error.response?.data?.message || error.response?.data?.error || error.message || "Erro ao adicionar item";
            setError(mensagem);
        } finally {
            setIsAdding(false);
        }
    };

    const handlePointsInfo = () => {
        Alert.alert(
            "Como funciona nossa mecânica de pontos?",
            "Na PentaPizza, todo produto possui um valor em pontos. Você pode pagar seu pedido com os pontos que adquirir no aplicativo, sem gastar dinheiro real! Adquira seus pontos fazendo compras no app."
        );
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            setError("");
        }
    };

    const toggleIngredients = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIngredientsExpanded(prev => !prev);
    };

    const toggleExtras = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExtrasExpanded(prev => !prev);
    };

    const handleIngredientToggle = (id: string) => {
        setSelectedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
        setError("");
    };

    const handleAddWithPoints = async () => {

        if (user?.guest) {
            setError("guestPoints");
            return;
        }

        setIsAdding(true);
        setError("");
        try {
            if (!user?.id) throw new Error("Cliente não logado");

            const cliente_id = user.id
            let pedido_id = pedidoId;

            if (pedido_id) {
                try {
                    const statusResp = await api.get(`/pedidos/${pedido_id}/status`);
                    const status = statusResp.data.status;
                    if (!status || status !== 'pedido em andamento') {
                        const pedidoResponse = await api.post("/pedido", { cliente_id: user.id });
                        pedido_id = pedidoResponse.data.id;
                        setPedidoId(pedido_id);
                    }
                } catch {
                    const pedidoResponse = await api.post("/pedido", { cliente_id });
                    pedido_id = pedidoResponse.data.id;
                    setPedidoId(pedido_id);
                }
            }

            if (!pedido_id) {
                const pedidoResponse = await api.post("/pedido", { cliente_id: user.id });
                pedido_id = pedidoResponse.data.id;
                setPedidoId(pedido_id);
            }

            const payload = {
                product_id: product.id,
                product2_id: selectedSecondFlavor?.id,
                pedido_id,
                qtd: quantity,
                removidos: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ({ id })),
                adicionais: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => ({ id })),
                observacoes: observation,
                payWithPoints: true, // 🔹 Indica pagamento com pontos
                pointsUsed: totalPoints   // 🔹 Quantidade de pontos
            };

            const response = await api.post("/item", payload);
            const { item } = response.data;

            addItem({
                item_id: item.id,
                name: product.name,
                image_url: product.image_url,
                qtd: quantity,
                price: 0, // como é pago com pontos, preço em dinheiro é 0
                totalPrice: 0,
                totalPoints,
                removedIngredients: Object.entries(selectedIngredients)
                    .filter(([_, selected]) => !selected)
                    .map(([id]) => ingredients.find(i => i.id === id)?.nome || id),
                extras: Object.entries(selectedExtras)
                    .filter(([_, selected]) => selected)
                    .map(([id]) => extras.find(e => e.id === id)?.nome || id),
                observation,
                secondFlavor: selectedSecondFlavor ? {
                    id: selectedSecondFlavor.id,
                    name: selectedSecondFlavor.name,
                    price: Number(selectedSecondFlavor.price),
                    image_url: selectedSecondFlavor.image_url
                } : undefined,
                payWithPoints: true,
                pointsUsed: totalPoints

            });
            // marca o tipo do pedido como 'points' após adicionar com sucesso
            try { setOrderType && setOrderType('points'); } catch (e) { }
            sendNotificationOrder()
            navigation.navigate("Order");
        } catch (error: any) {
            console.log("Erro completo:", error);

            const status = error.response?.status;
            const data = error.response?.data;
            const mensagem =
                data?.message ||
                data?.error ||
                error.message ||
                "Erro ao adicionar item";

            const msgLower = mensagem.toLowerCase();

            // Caso: pontos insuficientes (backend devolve mensagem clara contendo 'ponto'/'pontos' ou 'insuf')
            if (msgLower.includes("ponto") || msgLower.includes("pontos") || msgLower.includes("insuf")) {
                setError("insufficientPoints");
            }
            // 🔹 Verifica mensagens relacionadas a idade/álcool explicitamente
            else if (
                msgLower.includes("menor") ||
                msgLower.includes("idade") ||
                msgLower.includes("álcool") ||
                msgLower.includes("alcool")
            ) {
                setError("underageAlcohol");
            } else if (msgLower.includes("convidado") && msgLower.includes("ponto")) {
                setError("guestPoints");
            } else {
                setError(mensagem);
            }
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.logoText}> Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text> </Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Card principal */}
                <View style={styles.card}>
                    <Image source={{ uri: product.image_url }} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.price}>{formatarPreco(totalPrice)}</Text>
                        {/* 🔸 PONTOS */}
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                            <Ionicons name="star" size={20} color="#ffde09ff" />
                            <Text style={styles.pointsText}>{totalPoints.toFixed(1)} pts</Text>
                            <TouchableOpacity onPress={handlePointsInfo} style={{ marginLeft: 8 }}>
                                <MaterialIcons name="help-outline" size={20} color="#ccc" />
                            </TouchableOpacity>
                        </View>

                        {/* Quantidade */}
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

                {/* Se for pizza → mostrar opções de customização */}
                {product.category_id === "1da0ee77-2a79-4a91-a3a4-863857d9691c" ? (
                    <>
                        {/* Ingredientes */}
                        <TouchableOpacity style={styles.ingredientHeader} onPress={toggleIngredients}>
                            <Text style={styles.ingredientHeaderText}>Ingredientes</Text>
                            <Ionicons name={ingredientsExpanded ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
                        </TouchableOpacity>

                        {loading ? <ActivityIndicator color="#FF3F4B" /> :
                            ingredientsExpanded && ingredients.map((ing) => (
                                <TouchableOpacity key={ing.id} style={styles.ingredientItem} onPress={() => handleIngredientToggle(ing.id)} >
                                    <Text style={styles.ingredientName}>{ing.nome}</Text>
                                    {selectedIngredients[ing.id] ? (
                                        <Ionicons name="checkbox" size={24} color="#FF3F4B" />
                                    ) : (
                                        <Ionicons name="square-outline" size={24} color="#FF3F4B" />
                                    )}
                                </TouchableOpacity>
                            ))
                        }

                        {/* Adicionais */}
                        <TouchableOpacity style={styles.ingredientHeader} onPress={toggleExtras}>
                            <Text style={styles.ingredientHeaderText}>Adicionais</Text>
                            <Ionicons name={extrasExpanded ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
                        </TouchableOpacity>

                        {loading ? <ActivityIndicator color="#FF3F4B" /> : (
                            extrasExpanded && (
                                <>
                                    {/* Bordas */}
                                    {extras.filter(ex => ex.nome.toLowerCase().startsWith("borda")).length > 0 && (
                                        <>
                                            {extras.filter(ex => ex.nome.toLowerCase().startsWith("borda")).map((ex) => (
                                                <TouchableOpacity key={ex.id} style={styles.ingredientItem} onPress={() => handleExtrasToggle(ex.id, ex.nome)} >
                                                    <Text style={styles.ingredientName}> {ex.nome} {formatarPreco(ex.price)} </Text>
                                                    {selectedExtras[ex.id] ? (
                                                        <Ionicons name="checkbox" size={24} color="#FF3F4B" />
                                                    ) : (
                                                        <Ionicons name="square-outline" size={24} color="#FF3F4B" />
                                                    )}
                                                </TouchableOpacity>
                                            ))}
                                            <View style={{ borderBottomWidth: 1, borderBottomColor: "#555", marginVertical: 8 }} />
                                        </>
                                    )}

                                    {/* Outros adicionais */}
                                    {extras.filter(ex => !ex.nome.toLowerCase().startsWith("borda")).map((ex) => (
                                        <TouchableOpacity key={ex.id} style={styles.ingredientItem} onPress={() => handleExtrasToggle(ex.id, ex.nome)} >
                                            <Text style={styles.ingredientName}> {ex.nome} {formatarPreco(ex.price)} </Text>
                                            {selectedExtras[ex.id] ? (
                                                <Ionicons name="checkbox" size={24} color="#FF3F4B" />
                                            ) : (
                                                <Ionicons name="square-outline" size={24} color="#FF3F4B" />
                                            )}
                                        </TouchableOpacity>
                                    ))}
                                </>
                            )
                        )}

                        {/* 2º Sabor */}
                        <TouchableOpacity style={styles.ingredientHeader} onPress={openSecondFlavor}>
                            <Text style={styles.ingredientHeaderText}>
                                {selectedSecondFlavor ? `2º Sabor: ${selectedSecondFlavor.name}` : "Adicionar 2º Sabor"}
                            </Text>
                            <Ionicons name={selectedSecondFlavor ? "checkmark" : "add"} size={20} color="#fff" />
                        </TouchableOpacity>

                        <Modal visible={showSecondFlavorModal} animationType="slide" transparent>
                            <View style={styles.modalContainer}>
                                <ScrollView style={styles.modalContent}>
                                    {secondFlavorProducts.map((p) => (
                                        <TouchableOpacity
                                            key={p.id}
                                            onPress={() => toggleSecondFlavor(p)}
                                            style={[
                                                styles.ingredientItem,
                                                selectedSecondFlavor?.id === p.id && { borderWidth: 2, borderColor: "#FF3F4B" }
                                            ]}
                                        >
                                            <Text style={styles.ingredientName}> {p.name} - {formatarPreco(p.price)} </Text>
                                        </TouchableOpacity>
                                    ))}

                                    <TouchableOpacity onPress={() => setShowSecondFlavorModal(false)} style={[styles.ingredientItem, { justifyContent: "center", backgroundColor: "#FF3F4B" }]} >
                                        <Text style={{ color: "#fff", fontWeight: "700" }}>Fechar</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </Modal>
                    </>
                ) : (
                    <View style={{ alignItems: "center", marginTop: 40 }}>
                        <Text style={{ color: "#ccc", fontSize: 16, paddingBottom: 50 }}> Este produto não é customizável. </Text>
                    </View>
                )}

                {/* Campo de observação */}
                <TextInput style={styles.textArea} placeholder="Observações... " placeholderTextColor="#aaa" value={observation} onChangeText={setObservation} />

                {/* Botões */}
                <TouchableOpacity
                    style={[styles.confirmButton, confirmDisabled && { opacity: 0.5 }]}
                    onPress={() => { handleAddToPedido(); }}
                    disabled={confirmDisabled}
                >
                    <Text style={styles.confirmText}> {confirmDisabled && isAdding ? <ActivityIndicator /> : `Adicionar ${formatarPreco(totalPrice)}`} </Text>
                </TouchableOpacity>

                {/* 🔸 Botão de pontos */}
                <TouchableOpacity
                    style={[styles.pointsButton, pointsDisabled && { opacity: 0.5 }]}
                    onPress={handleAddWithPoints}
                    disabled={pointsDisabled}
                >
                    <Text style={styles.pointsButtonText}>
                        {pointsDisabled && isAdding ? (
                            <ActivityIndicator />
                        ) : (
                            <>
                                {'Adicionar com Pontos '}
                                <Ionicons
                                    name="star"
                                    size={21}
                                    color="#1d1d2e"
                                />
                                {' '}
                                {totalPoints.toFixed(1)}
                            </>
                        )}
                    </Text>
                </TouchableOpacity>
                <Modal visible={error !== ""} animationType="fade" transparent>
                    <View style={styles.errorModalOverlay}>
                        <View style={styles.errorModalBox}>
                            <Ionicons name="alert-circle" size={60} color="#FF3F4B" style={{ marginBottom: 12 }} />
                            <Text style={styles.errorTitle}>Ops!</Text>

                            {/* MENSAGEM PERSONALIZADA */}
                            {error === "guestAlcohol" && (
                                <>
                                    <Text style={styles.errorMessage}>
                                        Convidados não podem pedir bebidas alcoólicas.
                                    </Text>
                                    <Text style={styles.errorGuestMessage}>
                                        Crie uma conta e confirme sua idade para desbloquear esta opção.
                                    </Text>
                                </>
                            )}

                            {error === "underageAlcohol" && (
                                <>
                                    <Text style={styles.errorMessage}>
                                        Menores de 18 anos não podem adicionar bebidas alcoólicas à comanda.
                                    </Text>
                                </>
                            )}

                            {error === "insufficientPoints" && (
                                <>
                                    <Text style={styles.errorMessage}>
                                        Você não possui pontos suficientes para adicionar este item.
                                    </Text>
                                    <Text style={styles.errorGuestMessage}>
                                        Acumule mais pontos efetuando compras ou escolha pagar com dinheiro.
                                    </Text>
                                </>
                            )}

                            {error === "guestPoints" && (
                                <>
                                    <Text style={styles.errorMessage}>
                                        Convidados não podem usar pontos.
                                    </Text>
                                    <Text style={styles.errorGuestMessage}>
                                        Crie uma conta para acumular e utilizar pontos em seus pedidos!
                                    </Text>
                                </>
                            )}

                            {/* fallback padrão */}
                            {error !== "guestAlcohol" && error !== "underageAlcohol" && error !== "guestPoints" && (
                                <Text style={styles.errorMessage}>{error}</Text>
                            )}

                            <TouchableOpacity
                                style={styles.errorButton}
                                onPress={() => setError("")}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.errorButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1d2e"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff1b",
    },
    backButton: { width: 24, height: 24, justifyContent: "center", alignItems: "center" },
    logoText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700"
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#2a2a40",
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 20,
        margin: 15,
        alignItems: "center"
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 12
    },
    productInfo: {
        flex: 1,
        marginLeft: 12
    },
    productName: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF"
    },
    price: {
        fontSize: 16,
        marginVertical: 5,
        color: "#00C851",
        fontWeight: "700"
    },
    pointsText: {
        color: "#ffde09ff",
        fontWeight: "700",
        marginLeft: 6,
        fontSize: 16
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    button: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "#5A3FFF",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16
    },
    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
        color: "#FFF"
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
        marginTop: 10,
        marginBottom: 5
    },
    ingredientHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
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
        marginBottom: 15
    },
    ingredientName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF"
    },
    textArea: {
        borderColor: "#3b3b55f7",
        borderWidth: 1,
        borderRadius: 12,
        padding: 14,
        marginHorizontal: 20,
        textAlignVertical: "top",
        fontSize: 16,
        color: "#FFF",
        marginTop: 10
    },
    confirmButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3F4B",
        elevation: 8,
        shadowColor: "#FF3F4B",
        marginHorizontal: 20,
        marginTop: 20
    },
    confirmText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 0.8
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    modalContent: {
        backgroundColor: "#1d1d2e",
        borderRadius: 12,
        padding: 16,
        maxHeight: "80%"
    },
    errorText: {
        color: "red",
        marginBottom: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
    pointsButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dec41bff",
        elevation: 8,
        shadowColor: "#dec41bff",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20
    },
    pointsButtonText: {
        color: "#1d1d2e",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 0.6
    },
    errorModalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    errorModalBox: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#2a2a40",
        borderRadius: 16,
        paddingVertical: 28,
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    errorTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15,
    },
    errorMessage: {
        color: "#DDD",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "500",
    },
    errorGuestMessage: {
        color: "#DDD",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 20,
    },
    errorButton: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: 40,
        borderRadius: 10,
        backgroundColor: "#FF3F4B",
        shadowColor: "#FF3F4B",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },
    errorButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 0.6,
    },
});
