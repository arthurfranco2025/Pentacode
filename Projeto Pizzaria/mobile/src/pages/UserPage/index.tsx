import React, { useState, useContext, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    ActivityIndicator,
    ScrollView,
    Modal,
    FlatList,
    Platform,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { formatarPreco } from "../../components/utils/formatPrice";
import DateTimePicker from '@react-native-community/datetimepicker';

type RootStackParamList = {
    Home: undefined;
    UserPage: undefined;
    OrderTicket: undefined;
};

type ModalProps = {
    visible: boolean;
    title?: string;
    message: string;
    onClose: () => void;
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
};

const InfoModal: React.FC<ModalProps> = ({ visible, title, message, onClose }) => (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
        <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
                {title && <Text style={styles.modalTitle}>{title}</Text>}
                <Text style={styles.modalMessage}>{message}</Text>
                <TouchableOpacity style={styles.modalBtn} onPress={onClose}>
                    <Text style={styles.modalBtnText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const ConfirmModal: React.FC<ModalProps> = ({
    visible,
    title,
    message,
    onClose,
    onConfirm,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
}) => (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
        <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
                {title && <Text style={styles.modalTitle}>{title}</Text>}
                <Text style={styles.modalMessage}>{message}</Text>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <TouchableOpacity style={[styles.modalBtn, { flex: 1, marginRight: 5 }]} onPress={onClose}>
                        <Text style={styles.modalBtnText}>{cancelText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.modalBtn, { flex: 1, backgroundColor: "#FF4B4B", marginLeft: 5 }]} onPress={onConfirm}>
                        <Text style={styles.modalBtnText}>{confirmText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);

export default function UserPage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { user: authUser, updateLocalUser, signOut } = useContext(AuthContext);

    const [favoritesVisible, setFavoritesVisible] = useState(false);
    const [favoritesLoading, setFavoritesLoading] = useState(false);
    const [favoritesList, setFavoritesList] = useState<any[]>([]); // { favorito, product }

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        nascimento: "",
    });

    const [avatarUri, setAvatarUri] = useState<string | null>(null);
    const [pickedImage, setPickedImage] = useState<any>(null);
    const [removing, setRemoving] = useState(false);
    const [historyVisible, setHistoryVisible] = useState(false);
    const [historyLoading, setHistoryLoading] = useState(false);
    const [historyList, setHistoryList] = useState<any[]>([]);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [selectedComanda, setSelectedComanda] = useState<any | null>(null);

    const [modal, setModal] = useState<{ type: "info" | "confirm"; props: ModalProps } | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const isGuest = authUser?.guest || !authUser?.email;

    // Bloqueia edição ao ser convidado
    useEffect(() => {
        if (isGuest && isEditing) {
            setIsEditing(false);
            showInfo('Aviso', 'Convidados não podem editar o perfil.');
        }
    }, [isGuest, isEditing]);

    useEffect(() => {
        async function fetchUserData() {
            if (!authUser || isGuest) return;
            try {
                const { data } = await api.get('/me');
                if (data.image_url) setAvatarUri(data.image_url);
                setForm({
                    nome: data.name || "",
                    email: data.email || "",
                    senha: "",
                    cpf: data.cpf || "",
                    nascimento: data.data_nasc ? formatDateToInput(data.data_nasc) : "",
                });
            } catch {
                setForm({
                    nome: authUser.name || "",
                    email: authUser.email || "",
                    senha: "",
                    cpf: "",
                    nascimento: "",
                });
            }
        }
        fetchUserData();
    }, [authUser, isGuest]);

    // Funções para modais
    function showInfo(title: string, message: string) {
        setModal({ type: 'info', props: { visible: true, title, message, onClose: () => setModal(null) } });
    }

    function showConfirm(title: string, message: string, onConfirm: () => void) {
        setModal({ type: 'confirm', props: { visible: true, title, message, onClose: () => setModal(null), onConfirm: () => { setModal(null); onConfirm(); } } });
    }

    function formatDateToInput(dateStr: string) {
        if (!dateStr) return "";
        const dateOnly = dateStr.includes("T") ? dateStr.split("T")[0] : dateStr;
        const [year, month, day] = dateOnly.split("-");
        return `${day}/${month}/${year}`;
    }

    function formatPriceForList(price: any) {
        try {
            if (price === undefined || price === null) return "--";
            // price can be number or string
            const num = typeof price === 'string' ? parseFloat(price) : price;
            return formatarPreco(num);
        } catch (e) {
            return "--";
        }
    }

    // Helpers para exibir status e cores (reuso da lógica de OrderTicket)
    function formatStatusLabel(status?: string) {
        if (!status) return '';
        const s = status.toLowerCase();

        if (s === 'na fila') return 'Na fila';
        if (s === 'em produção') return 'Em produção';
        if (s === 'parcialmente pronto') return 'Parcialmente pronto';
        if (s === 'pronto') return 'Pronto';
        if (s === 'entregue') return 'Entregue';
        if (s === 'cancelado') return 'Cancelado';

        return status.charAt(0).toUpperCase() + status.slice(1);
    }

    function getStatusColor(status?: string) {
        if (!status) return '#777';
        switch (status.toLowerCase()) {
            case 'na fila':
                return '#999';
            case 'em produção':
                return '#FFBB33';
            case 'parcialmente pronto':
                return '#FFA000';
            case 'pronto':
                return '#00C851';
            case 'entregue':
                return '#007E33';
            case 'cancelado':
                return '#DD2C00';
            default:
                return '#ff0000ff';
        }
    }

    function handleChange(field: string, value: string) {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    function handleDateChange(event: any, selectedDate?: Date) {
        setShowDatePicker(false);
        if (selectedDate) {
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const year = selectedDate.getFullYear();
            setForm(prev => ({ ...prev, nascimento: `${day}/${month}/${year}` }));
        }
    }

    async function pickImage() {
        if (isGuest) return showInfo('Aviso', 'Convidados não podem editar o perfil.');
        if (loading || removing) return;

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') return showInfo('Permissão negada', 'Precisamos de permissão para acessar suas fotos.');

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
            allowsEditing: true,
            aspect: [1, 1],
        });

        const asset = (result as any).assets ? (result as any).assets[0] : result;
        if (!result.canceled && asset?.uri) {
            setPickedImage(asset);
            setAvatarUri(asset.uri);
        }
    }

    // async function removePhoto() {
    //     if (isGuest) return showInfo('Aviso', 'Convidados não podem editar o perfil.');
    //     showConfirm('Remover foto', 'Deseja remover a foto de perfil?', async () => {
    //         setRemoving(true);
    //         try {
    //             await api.put('/edit', { removeImage: true });
    //             setAvatarUri(null);
    //             setPickedImage(null);
    //             showInfo('Sucesso', 'Foto removida.');
    //         } catch {
    //             showInfo('Erro', 'Erro ao remover foto.');
    //         } finally {
    //             setRemoving(false);
    //         }
    //     });
    // }

    function handleSetEditing(value: boolean) {
        if (isGuest) return showInfo('Aviso', 'Convidados não podem editar o perfil.');
        setIsEditing(value);
    }

    async function saveProfile() {
        if (isGuest) {
            console.log("[saveProfile] Usuário convidado — edição bloqueada.");
            return showInfo("Aviso", "Convidados não podem editar o perfil.");
        }

        console.log("[saveProfile] Iniciando atualização de perfil...");
        setLoading(true);

        try {
            const body: any = {};

            console.log("[saveProfile] Form recebido:", form);
            console.log("[saveProfile] Usuário autenticado:", authUser);

            if (form.nome && form.nome !== authUser?.name) body.novoName = form.nome;
            if (form.email && form.email !== authUser?.email) {
                body.novoEmail = form.email;
                body.confirmEmail = form.email;
            }
            if (form.senha) body.novoPassword = form.senha;

            // Log de validação de data
            console.log("[saveProfile] Data digitada:", form.nascimento);
            const [d, m, a] = form.nascimento.split("/");
            const date = new Date(parseInt(a), parseInt(m) - 1, parseInt(d));
            date.setDate(date.getDate() + 1); // ajuste
            const nextDay = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear();
            body.nascimento = `${year}-${month}-${nextDay}`;
            console.log("[saveProfile] Data formatada para envio:", body.nascimento);

            if (!Object.keys(body).length && !pickedImage) {
                console.log("[saveProfile] Nenhuma alteração detectada.");
                return showInfo("Aviso", "Nenhuma alteração foi feita.");
            }

            let res;

            if (pickedImage) {
                console.log("[saveProfile] Enviando com imagem:", pickedImage.uri);
                const dataForm = new FormData();

                Object.keys(body).forEach((k) => dataForm.append(k, body[k]));
                const uri = pickedImage.uri;
                const filename = uri.split("/").pop() || "photo.jpg";
                const ext = filename.split(".").pop()?.toLowerCase() || "jpg";

                console.log("[saveProfile] Arquivo:", { filename, ext });

                dataForm.append(
                    "banner",
                    {
                        uri:
                            Platform.OS === "ios" && uri.startsWith("file://")
                                ? uri
                                : uri,
                        name: filename,
                        type: ext === "png" ? "image/png" : "image/jpeg",
                    } as any
                );

                console.log("[saveProfile] Corpo final (FormData):", dataForm);
                res = await api.put("/edit", dataForm, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            } else {
                console.log("[saveProfile] Enviando sem imagem. Body:", body);
                res = await api.put("/edit", body);
            }

            console.log("[saveProfile] Resposta da API:", res.data);

            const updated = res.data;
            await updateLocalUser({
                id: updated.id,
                name: updated.name,
                email: updated.email,
                image_url: updated.image_url,
            });

            console.log("[saveProfile] Usuário local atualizado com sucesso.");
            showInfo("Sucesso", "Perfil atualizado com sucesso!");
            setIsEditing(false);
        } catch (error: any) {
            console.error("[saveProfile] Erro ao atualizar perfil:", error);
            console.log("[saveProfile] Erro detalhado:", error.response?.data || error.message);
            showInfo("Erro", "Erro ao atualizar perfil.");
        } finally {
            console.log("[saveProfile] Finalizando (loading = false)");
            setLoading(false);
        }
    }

    async function openFavorites() {
        if (isGuest) {
            Alert.alert('Aviso', 'Convidados não podem ver favoritos.');
            return;
        }
        setFavoritesVisible(true);
        setFavoritesLoading(true);

        try {
            const favRes = await api.get('/favoritos', { params: { cliente_id: authUser.id } });
            const favoritos: any[] = favRes.data || [];

            const catRes = await api.get('/category/list');
            const categorias = catRes.data || [];

            const productsMap: Record<string, any> = {};
            await Promise.all(categorias.map(async (cat: any) => {
                try {
                    const pRes = await api.get('/category/products', { params: { category_id: cat.id } });
                    const prods: any[] = pRes.data || [];
                    prods.forEach(p => { productsMap[p.id] = p; });
                } catch (err) {
                    // ignore individual category failures
                    console.log('Erro ao buscar produtos da categoria', cat.id, err);
                }
            }));

            const favWithProduct = favoritos.map(fav => ({ favorito: fav, product: productsMap[fav.product_id] || null }));
            setFavoritesList(favWithProduct);
        } catch (err) {
            console.log('Erro ao buscar favoritos:', err);
            Alert.alert('Erro', 'Não foi possível carregar os favoritos.');
            setFavoritesList([]);
        } finally {
            setFavoritesLoading(false);
        }
    }

    async function openHistory() {
        if (isGuest) {
            Alert.alert('Aviso', 'Convidados não possuem histórico.');
            return;
        }

        setHistoryVisible(true);
        setHistoryLoading(true);

        try {
            const { data } = await api.get("/comanda/listarComandaPorCliente", {
                params: { cliente_id: authUser.id },
            });

            // data.comandas vem do service do backend
            setHistoryList(data.comandas || []);
        } catch (err: any) {
            console.log('Erro ao buscar histórico:', err.response || err);
            Alert.alert('Erro', 'Não foi possível carregar o histórico.');
            setHistoryList([]);
        } finally {
            setHistoryLoading(false);
        }
    }

    async function openDetails(comanda: any) {
        // Ao abrir detalhes, buscamos a versão completa das comandas para o cliente
        // (o backend retorna comandas com pedido -> items -> product e adicionais).
        try {
            setDetailsVisible(true);

            // Puxar todas as comandas do cliente e encontrar a que foi clicada
            const { data } = await api.get("/comanda/listarComandaPorCliente", {
                params: { cliente_id: authUser.id },
            });

            const comandas: any[] = data?.comandas || [];
            const full = comandas.find((c) => c.id === comanda.id) || comandas.find((c) => String(c.id) === String(comanda.id));

            if (full) {
                // Normalizar itens: backend traz comanda.pedido[].items[]
                const itens: any[] = [];
                (full.pedido || []).forEach((pedido: any) => {
                    (pedido.items || []).forEach((it: any) => {
                        // Mapear adicionais (se vierem como Item_adicional)
                        const adicionais = (it.Item_adicional || it.adicionais || []).map((ia: any) => ia.adicional || ia);
                        // Calcular price/points caso não existam
                        const price = it.price ?? it.product?.price ?? 0;
                        const points = it.points ?? Math.round((price * 0.25) * 100) / 100;
                        itens.push({ ...it, adicionais, price, points });
                    });
                });

                setSelectedComanda({ ...full, itens });
            } else {
                // fallback: usar o objeto recebido
                setSelectedComanda(comanda);
            }
        } catch (err: any) {
            console.log('Erro ao buscar detalhes da comanda:', err?.response || err);
            // fallback para exibir algo
            setSelectedComanda(comanda);
            setDetailsVisible(true);
        }
    }


    function handleOpenProduct(product: any) {
        setFavoritesVisible(false);
        // navegar para o ProductInfo
        navigation.navigate('ProductInfo' as any, { product });
    }

    async function handleRemoveFavorite(favoritoId: string) {
        try {
            await api.delete("/favorito/delete", {
                data: { id: favoritoId },
            });

            // Atualizar a lista de favoritos removendo o item
            setFavoritesList(prev => prev.filter(item => item.favorito.id !== favoritoId));

            showInfo("Sucesso", "Favorito removido com sucesso!");
            return true;
        } catch (err: any) {
            console.log("Erro ao remover favorito:", err?.response || err);
            showInfo("Erro", "Não foi possível remover o favorito.");
            throw err;
        }
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#3D1F93", "#1d1d2e"]}
                style={styles.header}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        if (isEditing) {
                            handleSetEditing(false);
                        } else {
                            navigation.navigate("Home");
                        }
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.logoText}>
                    Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
                </Text>
                <View style={{ width: 24 }} />
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={avatarUri ? { uri: avatarUri } : require("../../assets/user.png")}
                        style={styles.avatar}
                    />
                    {isEditing && !isGuest && (
                        <>
                            <TouchableOpacity style={styles.addPhotoBtn} onPress={pickImage} disabled={loading || removing}>
                                <Ionicons name="add-circle" size={28} color={loading || removing ? "#777" : "#FF4B4B"} />
                            </TouchableOpacity>
                        </>
                    )}
                </View>

                <Text style={styles.welcome}>
                    Olá, <Text style={{ fontWeight: "bold" }}>{form.nome || authUser?.name || "CONVIDADO"}</Text>!
                </Text>

                {!isEditing || isGuest ? (
                    <View style={styles.menu}>
                        <TouchableOpacity
                            style={[styles.button, isGuest && styles.disabledButton]}
                            onPress={() => handleSetEditing(true)}
                            disabled={isGuest}
                        >
                            <Text style={[styles.buttonText, isGuest && { color: "#aaa" }]}>
                                {isGuest ? "Convidado" : "Editar Perfil"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => openFavorites()}>
                            <Text style={styles.buttonText}>Favoritos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={openHistory}>
                            <Text style={styles.buttonText}>Histórico</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
                            <Text style={styles.logoutText}>Sair da conta</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.form}>
                        <TextInput
                            placeholder="Nome"
                            placeholderTextColor="#999"
                            style={styles.input}
                            value={form.nome}
                            onChangeText={(t) => handleChange("nome", t)}
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#999"
                            style={styles.input}
                            value={form.email}
                            onChangeText={(t) => handleChange("email", t)}
                            keyboardType="email-address"
                        />
                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[styles.input, { justifyContent: 'center' }]}>
                            <Text style={{ color: form.nascimento ? '#fff' : '#999' }}>
                                {form.nascimento || "Data de nascimento"}
                            </Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={form.nascimento ? new Date(form.nascimento.split('/').reverse().join('-')) : new Date()}
                                mode="date"
                                display="default"
                                maximumDate={new Date()}
                                onChange={handleDateChange}
                            />
                        )}
                        <TouchableOpacity style={styles.saveButton} onPress={saveProfile} disabled={loading}>
                            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveText}>Salvar</Text>}
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            {/* FAVORITOS MODAL */}
            <Modal visible={favoritesVisible} animationType="slide" onRequestClose={() => setFavoritesVisible(false)}>
                <View style={styles.favContainer}>
                    <View style={styles.favHeader}>
                        <TouchableOpacity onPress={() => setFavoritesVisible(false)}>
                            <Ionicons name="arrow-back" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.favTitle}>Meus Favoritos</Text>
                        <View style={{ width: 24 }} />
                    </View>

                    {favoritesLoading ? (
                        <ActivityIndicator size="large" color="#FF4B4B" style={{ marginTop: 40 }} />
                    ) : (
                        <FlatList
                            data={favoritesList}
                            keyExtractor={(item) => item.favorito.id}
                            renderItem={({ item }) => (
                                <View style={styles.favItem}>
                                    <Image
                                        source={item.product ? { uri: item.product.image_url } : { uri: 'https://img.icons8.com/?size=100&id=101158&format=png&color=FFFFFF' }}
                                        style={styles.favImage}
                                    />
                                    <View style={{ flex: 1, marginLeft: 12 }}>
                                        <Text style={styles.favName}>{item.product?.name || `Produto ${item.favorito.product_id}`}</Text>
                                        <Text style={styles.favPrice}>{item.product ? formatPriceForList(item.product.price) : "--"}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {item.product && (
                                            <TouchableOpacity style={styles.favViewBtn} onPress={() => handleOpenProduct(item.product)}>
                                                <Text style={styles.favViewText}>Ver</Text>
                                            </TouchableOpacity>
                                        )}
                                        <TouchableOpacity style={styles.favDelBtn} onPress={() => handleRemoveFavorite(item.favorito.id)}>
                                            <Ionicons name="trash" size={20} color="#fff" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            ListEmptyComponent={() => (
                                <Text style={{ color: '#fff', textAlign: 'center', marginTop: 40 }}>Nenhum favorito encontrado.</Text>
                            )}
                        />
                    )}
                </View>
            </Modal>

            {/* HISTÓRICO MODAL */}
            <Modal
                visible={historyVisible}
                animationType="slide"
                onRequestClose={() => setHistoryVisible(false)}
            >
                <View style={styles.favContainer}>
                    <View style={styles.favHeader}>
                        <TouchableOpacity onPress={() => setHistoryVisible(false)}>
                            <Ionicons name="arrow-back" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.favTitle}>Histórico de Pedidos</Text>
                        <View style={{ width: 24 }} />
                    </View>

                    {historyLoading ? (
                        <ActivityIndicator size="large" color="#FF4B4B" style={{ marginTop: 40 }} />
                    ) : (
                        <FlatList
                            data={historyList}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.historyItem}>
                                    <View style={styles.historyLeft}>
                                        <Text style={styles.historyTitle}>
                                            {item.mesa ? `Mesa ${item.mesa}` : "Pedido PentaPizza"}
                                        </Text>
                                        <Text style={styles.historyDate}>
                                            {new Date(item.created_at).toLocaleDateString("pt-BR")}
                                        </Text>
                                        <Text style={styles.historyStatus}>
                                            Status: {item.status}
                                        </Text>

                                        {/* Container dos botões */}
                                        <View style={styles.buttonsContainer}>
                                            {/* Botão Ver detalhes (busca detalhes da comanda no backend) */}
                                            <TouchableOpacity
                                                style={styles.detailButton}
                                                onPress={() => openDetails(item)}
                                            >
                                                <Text style={styles.detailButtonText}>Ver detalhes</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={styles.historyRight}>
                                        <Text style={styles.historyPrice}>{formatarPreco(item.price)}</Text>
                                        <Text style={styles.historyPoints}>{item.points} pts</Text>
                                    </View>
                                </View>

                            )}
                            ListEmptyComponent={() => (
                                <Text style={{ color: '#fff', textAlign: 'center', marginTop: 40 }}>
                                    Nenhum pedido encontrado.
                                </Text>
                            )}
                        />
                    )}
                </View>
            </Modal>

            {/* DETALHES DA COMANDA */}
            <Modal
                visible={detailsVisible}
                animationType="slide"
                onRequestClose={() => setDetailsVisible(false)}
            >
                <View style={styles.favContainer}>
                    <View style={styles.favHeader}>
                        <TouchableOpacity onPress={() => setDetailsVisible(false)}>
                            <Ionicons name="arrow-back" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.favTitle}>Detalhes da Comanda</Text>
                        <View style={{ width: 24 }} />
                    </View>

                    {selectedComanda && (
                        <View style={{ padding: 16 }}>
                            <Text style={styles.historyDate}>{selectedComanda.mesa ? `Mesa ${selectedComanda.mesa}` : 'Pedido PentaPizza'}</Text>

                            {/* Data da comanda */}
                            {selectedComanda.created_at && (
                                <Text style={styles.historyDate}>
                                    {new Date(selectedComanda.created_at).toLocaleDateString('pt-BR')} {new Date(selectedComanda.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                </Text>
                            )}

                            {/* Status da comanda (com cor) */}
                            {selectedComanda.status && (
                                <View style={{ marginTop: 6, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: getStatusColor(selectedComanda.status), paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 }}>
                                        <Text style={{ color: '#fff', fontWeight: '700' }}>{formatStatusLabel(selectedComanda.status)}</Text>
                                    </View>
                                </View>
                            )}

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                                <Text style={styles.historyPrice}>{formatarPreco(selectedComanda.price ?? selectedComanda.total_price ?? (selectedComanda.itens?.reduce((a: any, b: any) => a + (b.price || 0), 0) || 0))}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="star" size={18} color="#ffde09" />
                                    <Text style={[styles.historyPoints, { marginLeft: 8 }]}>{(selectedComanda.itens?.reduce((a: any, b: any) => a + (b.points ?? Math.round(((b.price || 0) * 0.25) * 100) / 100), 0) || 0)} pts</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    <FlatList
                        data={selectedComanda?.itens || []}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.historyItem}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.historyTitle}>{item.product?.name || item.product2?.name || "Produto"}</Text>
                                    <Text style={styles.historyDate}>Qtd: {item.qtd ?? item.quantity ?? item.quantity ?? 1}</Text>
                                    {item.adicionais && item.adicionais.length > 0 && (
                                        <Text style={{ color: '#FFD700', fontSize: 13, marginTop: 2 }}>
                                            Adicionais: {item.adicionais.map((a: any) => a.nome || a.name).join(', ')}
                                        </Text>
                                    )}
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={styles.historyPrice}>{formatarPreco(item.price)}</Text>
                                    {item.points !== undefined && (
                                        <Text style={styles.historyPoints}>{item.points} pts</Text>
                                    )}
                                    {/* badge de status do item (se existir) */}
                                    {item.status && (
                                        <View style={{ marginTop: 6, alignItems: 'flex-end' }}>
                                            <View style={{ backgroundColor: getStatusColor(item.status), paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 }}>
                                                <Text style={{ color: '#fff', fontWeight: '700' }}>{formatStatusLabel(item.status)}</Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </View>
                        )}
                        ListEmptyComponent={() => (
                            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 40 }}>
                                Nenhum item encontrado.
                            </Text>
                        )}
                    />

                </View>
            </Modal>


            {/* {removing && (
                <View style={styles.removeOverlay}>
                    <View style={styles.removeBox}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={styles.removeText}>Removendo foto...</Text>
                    </View>
                </View>
            )} */}
            {modal?.type === 'info' && <InfoModal {...modal.props} />}
            {modal?.type === 'confirm' && <ConfirmModal {...modal.props} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1d2e",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 52,
        paddingBottom: 10,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff1b",
    },

    disabledButton: {
        opacity: 0.5,
    },

    backButton: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    logoText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
    },

    scrollContent: {
        alignItems: "center",
        paddingVertical: 20,
    },

    avatarWrapper: {
        position: "relative",
        marginBottom: 10,
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#2C2C44",
    },

    addPhotoBtn: {
        position: "absolute",
        bottom: 5,
        right: 5,
    },

    welcome: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 20,
    },

    menu: {
        width: "80%",
        alignItems: "center",
        gap: 10,
    },

    button: {
        backgroundColor: "#2a2a40",
        paddingVertical: 14,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 15,
    },

    logoutButton: {
        backgroundColor: "#FF4B4B",
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 20,
        width: "80%",
        alignItems: "center",
    },

    logoutText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 15,
    },

    form: {
        width: "90%",
        alignItems: "center",
        gap: 10,
    },

    input: {
        backgroundColor: "#1E1E2F",
        color: "#fff",
        width: "100%",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#343450",
    },

    saveButton: {
        backgroundColor: "#4B3FFF",
        width: "100%",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 5,
    },

    saveText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 15,
    },

    removeOverlay: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    removeBox: {
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },

    removeText: {
        color: "#fff",
        marginTop: 10,
        fontSize: 14,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalBox: {
        backgroundColor: "#2C2C44",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 10,
    },

    modalMessage: {
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
    },

    modalBtn: {
        backgroundColor: "#4B3FFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 15,
    },

    modalBtnText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },

    favContainer: {
        flex: 1,
        backgroundColor: "#1d1d2e",
    },

    favHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 52,
        paddingBottom: 12,
        paddingHorizontal: 22,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff1b",
    },

    favTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },

    favItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff12",
    },

    favImage: {
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: "#2C2C44",
    },

    favName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        marginRight: 5,
    },

    favPrice: {
        color: "#00C851",
        marginTop: 6,
        fontWeight: "700",
    },

    favViewBtn: {
        backgroundColor: "#5A3FFF",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
    },

    favViewText: {
        color: "#fff",
        fontWeight: "700",
    },

    favDelBtn: {
        backgroundColor: "#FF4B4B",
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
    },
    historyItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        // borderColor: "#3a3a5cff",
        backgroundColor: "#25253b",
        borderRadius: 14,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },

    historyTitle: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 5,
    },

    historyDate: {
        color: "#b3b3c4",
        fontSize: 13,
        marginBottom: 5,
    },

    historyStatus: {
        color: "#9c9cb8",
        fontSize: 13,
        marginBottom: 5,
    },

    historyPrice: {
        color: "#00C851",
        fontWeight: "800",
        fontSize: 16,
        marginBottom: 5,
    },

    historyPoints: {
        color: "#FFD700",
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "600",
    },

    historyRight: {
        alignItems: "flex-end",
        // justifyContent: "space-between",
    },

    historyLeft: {
        flex: 1,
        paddingRight: 10,
    },

    buttonsContainer: {
        flexDirection: 'row',
        // alignItems: 'flex-end',
        // justifyContent: 'space-between',
        marginTop: 8,
    },

    detailButton: {
        backgroundColor: '#5A3FFF',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
        shadowColor: '#5A3FFF',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },

    detailButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },

    pointsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#FFD70015',
    },

    pointsText: {
        color: '#FFD700',
        fontWeight: '700',
        fontSize: 14,
        marginHorizontal: 6,
    },
})