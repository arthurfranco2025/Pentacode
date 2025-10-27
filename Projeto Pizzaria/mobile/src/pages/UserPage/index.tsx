import React, { useState, useContext, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    ActivityIndicator,
    Alert,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

type RootStackParamList = {
    Home: undefined;
    UserPage: undefined;
    OrderTicket: undefined;
};

export default function UserPage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { user: authUser, updateLocalUser, signOut } = useContext(AuthContext);

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

    const isGuest = !authUser?.email || authUser?.name?.startsWith("CONVIDADO");

    useEffect(() => {
        async function fetchUserData() {
            if (authUser && !isGuest) {
                try {
                    const response = await api.get('/me');
                    const userData = response.data;

                    const formattedDate = userData.data_nasc ? formatDateToInput(userData.data_nasc) : "";

                    // set avatar if backend returns an image url
                    if (userData.image_url) {
                        setAvatarUri(userData.image_url);
                    }

                    setForm({
                        nome: userData.name || "",
                        email: userData.email || "",
                        senha: "",
                        cpf: userData.cpf || "",
                        nascimento: formattedDate,
                    });
                } catch (error) {
                    console.log('Erro ao buscar dados do usuário:', error);
                    setForm({
                        nome: authUser.name || "",
                        email: authUser.email || "",
                        senha: "",
                        cpf: "",
                        nascimento: "",
                    });
                }
            }
        }
        fetchUserData();
    }, [authUser, isGuest]);

    async function pickImage() {
        if (isGuest) {
            Alert.alert('Aviso', 'Convidados não podem editar o perfil.');
            return;
        }

        if (loading || removing) return;

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão negada', 'Precisamos de permissão para acessar suas fotos.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
            allowsEditing: true,
            aspect: [1, 1],
        });

        // expo-image-picker returns assets array
        const asset = (result as any).assets ? (result as any).assets[0] : result;

        if (!result.canceled && asset && asset.uri) {
            setPickedImage(asset);
            setAvatarUri(asset.uri);
        }
    }

    async function removePhoto() {
        if (isGuest) {
            Alert.alert('Aviso', 'Convidados não podem editar o perfil.');
            return;
        }

        Alert.alert(
            'Remover foto',
            'Deseja remover a foto de perfil?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Remover',
                    style: 'destructive',
                    onPress: async () => {
                        setRemoving(true);
                        try {
                            // pedir ao backend para remover a imagem
                            await api.put('/edit', { removeImage: true });
                            // limpar preview local
                            setAvatarUri(null);
                            setPickedImage(null);

                            Alert.alert('Sucesso', 'Foto removida.');
                        } catch (err: any) {
                            console.log('Erro ao remover foto:', err?.response || err);
                            Alert.alert('Erro', err?.response?.data?.error || 'Erro ao remover foto');
                        } finally {
                            setRemoving(false);
                        }
                    },
                },
            ]
        );
    }

    function formatDateToInput(dateStr: string) {
        if (!dateStr) return "";
        const dateOnly = dateStr.includes("T") ? dateStr.split("T")[0] : dateStr;
        const [year, month, day] = dateOnly.split("-");
        return `${day}/${month}/${year}`;
    }


    function formatCPF(cpf: string) {
        const numbers = cpf.replace(/\D/g, "");
        return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4").slice(0, 14);
    }

    function formatDate(date: string) {
        const numbers = date.replace(/\D/g, "");
        return numbers.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3").slice(0, 10);
    }

    function handleChange(field: string, value: string) {
        let formattedValue = value;
        if (field === "cpf") {
            formattedValue = formatCPF(value);
        } else if (field === "nascimento") {
            formattedValue = formatDate(value);
        }
        setForm((prev) => ({ ...prev, [field]: formattedValue }));
    }

    async function saveProfile() {
        if (isGuest) {
            Alert.alert("Aviso", "Convidados não podem editar o perfil.");
            return;
        }
        setLoading(true);
        try {
            const body: any = {};

            if (form.nome && form.nome !== authUser?.name) {
                body.novoName = form.nome;
            }

            if (form.email && form.email !== authUser?.email) {
                body.novoEmail = form.email;
                body.confirmEmail = form.email;
            }

            if (form.senha) body.novoPassword = form.senha;

            if (form.cpf) body.cpf = form.cpf.replace(/\D/g, "");

            if (form.cpf && form.cpf !== authUser?.cpf) {
                body.cpf = form.cpf.replace(/\D/g, "");
            }

            if (form.nascimento) {
                if (/^\d{2}\/\d{2}\/\d{4}$/.test(form.nascimento)) {
                    const [dia, mes, ano] = form.nascimento.split("/");
                    body.nascimento = `${ano}-${mes}-${dia}`;
                } else {
                    body.nascimento = form.nascimento;
                }
            }


            if (Object.keys(body).length === 0) {
                Alert.alert("Aviso", "Nenhuma alteração foi feita.");
                setLoading(false);
                return;
            }

            // If user picked an image, send multipart/form-data
            let res;
            if (pickedImage) {
                const dataForm = new FormData();

                // append other fields
                Object.keys(body).forEach((key) => {
                    dataForm.append(key, (body as any)[key]);
                });

                // prepare image file object for React Native
                const uri = pickedImage.uri;
                const filename = uri.split('/').pop();
                // infer the mime type
                const match = /\.([A-Za-z0-9]+)$/.exec(filename || '');
                const ext = match ? match[1].toLowerCase() : 'jpg';
                const mime = ext === 'png' ? 'image/png' : 'image/jpg';

                const file: any = {
                    uri: Platform.OS === 'ios' && uri.startsWith('file://') ? uri : uri,
                    name: filename || `photo.${ext}`,
                    type: mime,
                };

                dataForm.append('image', file as any);

                res = await api.put('/edit', dataForm, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                res = await api.put("/edit", body);
            }
            const updated = res.data;

            await updateLocalUser({
                id: updated.id,
                name: updated.name,
                email: updated.email,
            });

            Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
            setIsEditing(false);
        } catch (error: any) {
            console.log("Erro ao atualizar perfil:", error?.response || error);
            Alert.alert("Erro", error?.response?.data?.error || "Erro ao atualizar perfil");
        } finally {
            setLoading(false);
        }
    }


    return (
        <View style={styles.container}>
            {/* HEADER */}
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
                            setIsEditing(false);
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

            {/* CONTENT */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* AVATAR */}
                <View style={styles.avatarWrapper}>
                    <Image
                        source={avatarUri ? { uri: avatarUri } : require("../../assets/user.png")}
                        style={styles.avatar}
                    />
                    {isEditing && (
                        <>
                            <TouchableOpacity style={styles.addPhotoBtn} onPress={pickImage} disabled={loading || removing}>
                                <Ionicons name="add-circle" size={28} color={loading || removing ? "#777" : "#FF4B4B"} />
                            </TouchableOpacity>
                            {avatarUri && (
                                <TouchableOpacity style={[styles.addPhotoBtn, { right: 40 }]} onPress={removePhoto} disabled={removing || loading}>
                                    {removing ? (
                                        <ActivityIndicator size="small" color="#FF4B4B" />
                                    ) : (
                                        <Ionicons name="trash" size={26} color="#FF4B4B" />
                                    )}
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                </View>


                <Text style={styles.welcome}>
                    Olá,{" "}
                    <Text style={{ fontWeight: "bold" }}>
                        {form.nome || authUser?.name || "CONVIDADO"}
                    </Text>
                    !
                </Text>

                {/* PERFIL */}
                {!isEditing ? (
                    <View style={styles.menu}>
                        {!isGuest && (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setIsEditing(true)}
                            >
                                <Text style={styles.buttonText}>Editar Perfil</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Favoritos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Histórico</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.logoutButton}
                            onPress={signOut}
                        >
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
                        <TextInput
                            placeholder="CPF"
                            placeholderTextColor="#999"
                            style={styles.input}
                            value={form.cpf}
                            onChangeText={(t) => handleChange("cpf", t)}
                        />
                        <TextInput
                            placeholder="Data de nascimento"
                            placeholderTextColor="#999"
                            style={styles.input}
                            value={form.nascimento}
                            onChangeText={(t) => handleChange("nascimento", t)}
                        />

                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={saveProfile}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.saveText}>Salvar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            {removing && (
                <View style={styles.removeOverlay} pointerEvents="auto">
                    <View style={styles.removeBox}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={styles.removeText}>Removendo foto...</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#1d1d2e" },
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
    scrollContent: { alignItems: "center", paddingVertical: 20 },
    avatarWrapper: { position: "relative", marginBottom: 10 },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#2C2C44",
    },
    addPhotoBtn: { position: "absolute", bottom: 5, right: 5 },
    welcome: { color: "#fff", fontSize: 16, marginBottom: 20 },
    menu: { width: "80%", alignItems: "center", gap: 10 },
    button: {
        backgroundColor: "#2a2a40",
        paddingVertical: 14,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: { color: "#fff", fontWeight: "600", fontSize: 15 },
    disabledButton: { opacity: 0.5 },
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
    form: { width: "90%", alignItems: "center", gap: 10 },
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
    saveText: { color: "#fff", fontWeight: "700", fontSize: 15 },
    removeOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeBox: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    removeText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 14,
    },
});