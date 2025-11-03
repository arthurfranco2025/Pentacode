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

    function handleOpenProduct(product: any) {
        setFavoritesVisible(false);
        // navegar para o ProductInfo
        navigation.navigate('ProductInfo' as any, { product });
    }

    async function handleRemoveFavorite(favoritoId: string) {
        Alert.alert('Remover favorito', 'Deseja remover este favorito?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Remover', style: 'destructive', onPress: async () => {
                    try {
                        await api.delete('/favorito/delete', { data: { id: favoritoId } });
                        setFavoritesList(prev => prev.filter(p => p.favorito.id !== favoritoId));
                        Alert.alert('Sucesso', 'Favorito removido.');
                    } catch (err: any) {
                        console.log('Erro ao remover favorito:', err?.response || err);
                        Alert.alert('Erro', err?.response?.data?.error || 'Erro ao remover favorito');
                    }
                }
            }
        ]);
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

                        <TouchableOpacity style={styles.button}>
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
    container: { flex: 1, backgroundColor: "#1d1d2e" },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 52, paddingBottom: 10, paddingHorizontal: 30, borderBottomWidth: 1, borderBottomColor: "#ffffff1b" },
    disabledButton: { opacity: 0.5 },
    backButton: { width: 24, height: 24, justifyContent: "center", alignItems: "center" },
    logoText: { color: "#fff", fontSize: 22, fontWeight: "700" },
    scrollContent: { alignItems: "center", paddingVertical: 20 },
    avatarWrapper: { position: "relative", marginBottom: 10 },
    avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: "#2C2C44" },
    addPhotoBtn: { position: "absolute", bottom: 5, right: 5 },
    welcome: { color: "#fff", fontSize: 16, marginBottom: 20 },
    menu: { width: "80%", alignItems: "center", gap: 10 },
    button: { backgroundColor: "#2a2a40", paddingVertical: 14, borderRadius: 10, width: "100%", alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "600", fontSize: 15 },
    logoutButton: { backgroundColor: "#FF4B4B", paddingVertical: 14, borderRadius: 10, marginTop: 20, width: "80%", alignItems: "center" },
    logoutText: { color: "#fff", fontWeight: "700", fontSize: 15 },
    form: { width: "90%", alignItems: "center", gap: 10 },
    input: { backgroundColor: "#1E1E2F", color: "#fff", width: "100%", paddingVertical: 14, paddingHorizontal: 16, borderRadius: 10, borderWidth: 1, borderColor: "#343450" },
    saveButton: { backgroundColor: "#4B3FFF", width: "100%", paddingVertical: 14, borderRadius: 10, alignItems: "center", marginTop: 5 },
    saveText: { color: "#fff", fontWeight: "700", fontSize: 15 },
    removeOverlay: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    removeBox: { backgroundColor: 'rgba(0,0,0,0.6)', padding: 20, borderRadius: 10, alignItems: 'center' },
    removeText: { color: '#fff', marginTop: 10, fontSize: 14 },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
    modalBox: { backgroundColor: '#2C2C44', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' },
    modalTitle: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 10 },
    modalMessage: { fontSize: 15, color: '#fff', textAlign: 'center' },
    modalBtn: { backgroundColor: '#4B3FFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginTop: 15 },
    modalBtnText: { color: '#fff', fontWeight: '700', textAlign: 'center' },
    favContainer: { flex: 1, backgroundColor: '#1d1d2e' },
    favHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 52,
        paddingBottom: 12,
        paddingHorizontal: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff1b',
    },
    favTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
    favItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff12',
    },
    favImage: { width: 64, height: 64, borderRadius: 8, backgroundColor: '#2C2C44' },
    favName: { color: '#fff', fontSize: 16, fontWeight: '600', marginRight: 5 },
    favPrice: { color: '#00C851', marginTop: 6, fontWeight: '700' },
    favViewBtn: {
        backgroundColor: '#5A3FFF',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
    },
    favViewText: { color: '#fff', fontWeight: '700' },
    favDelBtn: {
        backgroundColor: '#FF4B4B',
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
    },

});