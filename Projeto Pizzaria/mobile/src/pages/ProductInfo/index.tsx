import React, { useState, useRef, useEffect, useContext } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
  Alert,
  Modal
} from "react-native";
// LinearGradient removed — header uses plain View now
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type RootStackParamList = {
  Home: undefined;
  ProductInfo: { product: Product };
  CustomizeProduct: { product: Product };
  Order: undefined;
};

type RouteParams = RouteProp<RootStackParamList, "ProductInfo">;

interface Product {
  id: string;
  name: string;
  price: number;
  points: number;
  description?: string;
  image_url: string;
  category_id: string;
}

export default function ProductInfo() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteAnim = useRef(new Animated.Value(1)).current;
  const { user } = useContext(AuthContext);
  const route = useRoute<RouteParams>();
  const { product } = route.params;

  const [pointsModal, setPointsModal] = useState(false);


  const isGuest = user?.guest || !user?.email;

  // Busca favoritos (só se não for guest)
  useEffect(() => {
    if (isGuest) return;
    async function fetchFavorites() {
      try {
        const response = await api.get("/favoritos", {
          params: { cliente_id: user.id },
        });
        const favoritos: any[] = response.data;
        setIsFavorite(favoritos.some(fav => fav.product_id === product.id));
      } catch (err) {
        console.log("Erro ao buscar favoritos:", err);
      }
    }
    fetchFavorites();
  }, [product.id, user.id, isGuest]);

  const handleFavoritePress = async () => {
    if (isGuest) {
      Alert.alert("Aviso", "Convidados não podem adicionar favoritos.");
      return;
    }

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

    try {
      if (!isFavorite) {
        await api.post("/favorito", {
          cliente_id: user.id,
          product_id: product.id,
        });
        setIsFavorite(true);
      } else {
        const response = await api.get("/favoritos", {
          params: { cliente_id: user.id },
        });
        const favoritos: any[] = response.data;
        const favoritoToRemove = favoritos.find(
          fav => fav.product_id === product.id
        );
        if (favoritoToRemove) {
          await api.delete("/favorito/delete", {
            data: { id: favoritoToRemove.id },
          });
          setIsFavorite(false);
        }
      }
    } catch (err) {
      console.log("Erro ao adicionar/remover favorito:", err);
      setIsFavorite(prev => !prev);
    }
  };

  const handlePointsInfo = () => {
    setPointsModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logoText}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Image
          source={{ uri: product.image_url }}
          resizeMode="cover"
          style={styles.image}
        />

        <View style={styles.contentContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{product.name}</Text>
            {/* 🔹 Favorito: só mostra se não for guest */}
            {!isGuest && (
              <TouchableOpacity onPress={handleFavoritePress}>
                <Animated.Image
                  source={{
                    uri: isFavorite
                      ? "https://img.icons8.com/ios-filled/50/FF3F4B/like.png"
                      : "https://img.icons8.com/ios/50/ffffff/like--v1.png",
                  }}
                  style={[styles.favoriteIcon, { transform: [{ scale: favoriteAnim }] }]}
                />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.desc}>
            {product.description || "Sem descrição disponível."}
          </Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>{formatarPreco(product.price)}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={styles.pointsContainer}
                onPress={handlePointsInfo}
              >
                <Ionicons name="star" size={21} color="#ffde09ff" />
                <Text style={styles.pointsText}>{product.points.toFixed(1)} pts</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginLeft: 8 }}
                onPress={handlePointsInfo}
              >
                <MaterialIcons name="help-outline" size={22} color="#cdcdcdff" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              navigation.navigate("CustomizeProduct", { product });
            }}
          >
            <Text style={styles.addButtonText}>Adicionar ao Pedido</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate("Order")}
        >
          <Text style={styles.orderText}>Pedido atual</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={pointsModal}
        transparent
        animationType="fade"
        onRequestClose={() => setPointsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalCard]}>

            {/* Ícone */}
            <View style={styles.iconWrapper}>
              <Ionicons name="star" size={42} color="#ffde09ff" />
            </View>

            <Text style={styles.modalTitle}>Mecânica de Pontos</Text>

            <Text style={styles.modalMessage}>
              Cada produto da PentaPizza possui um valor em pontos. Utilize seus pontos acumulados para pagar pedidos sem gastar dinheiro!
              {"\n\n"}
              Ganhe pontos automaticamente ao fazer compras no app.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setPointsModal(false)}
            >
              <Text style={styles.modalButtonText}>Entendi</Text>
            </TouchableOpacity>

          </Animated.View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1d1d2e" },
  backButton: { width: 24, height: 24, justifyContent: "center", alignItems: "center" },
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
  logoText: { color: "#fff", fontSize: 22, fontWeight: "700" },
  image: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contentContainer: { paddingHorizontal: 22, paddingVertical: 20, },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: { fontSize: 24, fontWeight: "700", color: "#fff", flex: 1 },
  favoriteIcon: { width: 30, height: 30 },
  desc: { color: "#ccc", fontSize: 15, lineHeight: 22, marginBottom: 20 },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#00C851",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    color: "#ffde09ff",
    fontWeight: "700",
    marginLeft: 6,
    fontSize: 20,
  },
  addButton: {
    backgroundColor: "#5A3FFF",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 15,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  orderButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF3F4B",
    borderRadius: 10,
    paddingVertical: 12,
  },
  orderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  modalCard: {
    width: "100%",
    backgroundColor: "#1F1F2E",
    borderRadius: 18,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: "center",

    // Glass effect leve
    borderColor: "rgba(255,255,255,0.06)",
    borderWidth: 1.2,

    // Sombra suave
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },

  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,222,9,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 14,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  modalMessage: {
    fontSize: 16,
    color: "#dcdcdc",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 28,
    paddingHorizontal: 5,
  },

  modalButton: {
    width: "85%",
    backgroundColor: "#FF3F4B",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",

    shadowColor: "#FF3F4B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  modalButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
});
