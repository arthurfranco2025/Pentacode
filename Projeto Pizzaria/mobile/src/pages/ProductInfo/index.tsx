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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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

  // Busca favoritos
  useEffect(() => {
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
  }, [product.id, user.id]);

  const handleFavoritePress = async () => {
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
    Alert.alert(
      "Como funciona nossa mecânica de pontos?",
      "Na PentaPizza, todo produto possui um valor em pontos. Você pode pagar seu pedido com os pontos que voce adquirir no nosso aplicativo, sem gastar dinheiro real! Adquira seus pontos fazendo compras no app."
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#3D1F93", "#1d1d2e"]}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png",
            }}
            style={{ width: 26, height: 26 }}
          />
        </TouchableOpacity>
        <Text style={styles.logoText}>
          Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
        </Text>
        <View style={{ width: 26 }} />
      </LinearGradient>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
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
                    : "https://img.icons8.com/ios/50/ffffff/like--v1.png",
                }}
                style={[
                  styles.favoriteIcon,
                  { transform: [{ scale: favoriteAnim }] },
                ]}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.desc}>
            {product.description || "Sem descrição disponível."}
          </Text>

          {/* 🔹 PREÇOS (dinheiro e pontos com botão) */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>{formatarPreco(product.price)}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={styles.pointsContainer}
                onPress={handlePointsInfo}
              >
                <Ionicons name="star" size={21} color="#FFD700" />
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
            onPress={() => navigation.navigate("CustomizeProduct", { product })}
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
          <Text style={styles.orderText}>Pedido</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 12,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff1b",
  },
  logoText: { color: "#fff", fontSize: 22, fontWeight: "700" },
  image: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 10,
  },
  contentContainer: { paddingHorizontal: 22, paddingVertical: 20 },
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
    color: "#FFD700",
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
});
