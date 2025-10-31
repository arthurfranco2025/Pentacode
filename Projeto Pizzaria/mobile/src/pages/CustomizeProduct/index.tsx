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
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { usePedido } from "../../contexts/pedidoContext";
import { AuthContext } from "../../contexts/AuthContext";

type RootStackParamList = {
  CustomizeProduct: { product: Product };
  Order: { product: Product };
};

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
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CustomizeProduct() {
  const { addItem, pedidoId, setPedidoId } = usePedido();
  const { user } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "CustomizeProduct">>();
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

  const [showSecondFlavorModal, setShowSecondFlavorModal] = useState(false);
  const [secondFlavorProducts, setSecondFlavorProducts] = useState<Product[]>([]);
  const [selectedSecondFlavor, setSelectedSecondFlavor] = useState<Product | null>(null);

  // Carrega ingredientes (somente pizza)
  useEffect(() => {
    if (product.category_id === '1da0ee77-2a79-4a91-a3a4-863857d9691c') {
      async function loadIngredients() {
        try {
          const response = await api.get('produto_ingrediente/lista', {
            params: { product_id: product.id }
          });
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

  // Atualiza preço e pontos conforme quantidade e adicionais
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
    setTotalPoints((product.points || 0) * qtd);
  }, [quantity, selectedExtras, extras, selectedSecondFlavor, product.price, product.points]);

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

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#3D1F93", "#1d1d2e"]}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logoText}>Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text></Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Card principal */}
        <View style={styles.card}>
          <Image source={{ uri: product.image_url }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.price}>{formatarPreco(totalPrice)}</Text>

            {/* 🔸 PONTOS */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Ionicons name="star" size={20} color="#FFD700" />
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

        {/* Campo de observação */}
        <TextInput
          style={styles.textArea}
          placeholder="Observações..."
          placeholderTextColor="#aaa"
          value={observation}
          onChangeText={setObservation}
        />

        {/* Botões */}
        <TouchableOpacity
          style={[styles.confirmButton, isAdding && { backgroundColor: "#888" }]}
          disabled={isAdding}
        >
          <Text style={styles.confirmText}>
            {isAdding ? "Adicionando..." : `Adicionar ${formatarPreco(totalPrice)}`}
          </Text>
        </TouchableOpacity>

        {/* 🔸 Botão de pontos */}
        <TouchableOpacity style={styles.pointsButton}>
          <Text style={styles.pointsButtonText}>Adicionar com Pontos ({totalPoints.toFixed(1)} pts)</Text>
        </TouchableOpacity>

      </ScrollView>
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
  },
  logoText: { color: "#fff", fontSize: 22, fontWeight: "700" },
  card: {
    flexDirection: "row",
    backgroundColor: "#2a2a40",
    borderRadius: 12,
    padding: 12,
    margin: 15,
    alignItems: "center",
  },
  productImage: { width: 100, height: 100, borderRadius: 12 },
  productInfo: { flex: 1, marginLeft: 12 },
  productName: { fontSize: 18, fontWeight: "700", color: "#FFF" },
  price: { fontSize: 16, marginVertical: 5, color: "#00C851", fontWeight: "700" },
  pointsText: { color: "#FFD700", fontWeight: "700", marginLeft: 6, fontSize: 16 },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  button: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#5A3FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  quantity: { marginHorizontal: 12, fontSize: 16, color: "#FFF" },
  textArea: {
    borderColor: "#3b3b55f7",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 20,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#FFF",
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
    marginTop: 20,
  },
  confirmText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  pointsButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c9b84aff", // #DCC218
    elevation: 8,
    shadowColor: "#c9b84aff", // #DCC218
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  pointsButtonText: {
    color: "#1d1d2e",
    // color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
});
