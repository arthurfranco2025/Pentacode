import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
	View,
	ScrollView,
	Image,
	ActivityIndicator,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
// LinearGradient removed — header/footer use plain View now
import { api } from "../../services/api";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { useComanda } from "../../contexts/comandaContext";
import { usePedido } from "../../contexts/pedidoContext";
import { Ionicons } from "@expo/vector-icons";

interface Categories {
	id: string;
	name: string;
	image_url: string;
}

interface Product {
	id: string;
	name: string;
	price: number;
	description?: string;
	image_url: string;
	category_id: string;
}

type RootStackParamList = {
	Home: undefined;
	ProductInfo: { product: Product };
	Order: undefined;
	OrderTicket: undefined;
	UserPage: undefined;
};

const CategoryCard = ({ image_url, label }: { image_url: string; label: string }) => (
	<View style={styles.categoryBg}>
		<Image source={{ uri: image_url }} style={styles.categoryImage} />
		<Text style={styles.categoryText} numberOfLines={1} ellipsizeMode="tail">
			{label}
		</Text>
	</View>
);

const ItemCard = ({
	product,
	onPress,
	showCategories,
}: {
	product: Product;
	onPress: () => void;
	showCategories: boolean;
}) => (
	<View style={[styles.card, !showCategories && styles.ThreeCards]}>
		<Image
			source={{ uri: product.image_url }}
			style={styles.productImage}
			resizeMode="cover"
		/>
		<View style={styles.productInfo}>
			<Text style={styles.promoText} numberOfLines={2} ellipsizeMode="tail">
				{product.name}
			</Text>

			<View style={{ marginTop: "auto" }}>
				<Text style={styles.priceText}>{formatarPreco(product.price)}</Text>
				<TouchableOpacity style={styles.button} onPress={onPress}>
					<Text style={styles.buttonText}>Ver</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

export default function Home() {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { comanda } = useComanda();
	const { totalPedido } = usePedido();
	const { user: authUser, signOut } = useContext(AuthContext);

	const [categories, setCategories] = useState<Categories[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [showCategories, setShowCategories] = useState(true);
	const [loadingCategories, setLoadingCategories] = useState(false);
	const [loadingProducts, setLoadingProducts] = useState(false);
	const [debounceTimer, setDebounceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
	const [pontos, setPontos] = useState(0)

	useEffect(() => {
		const loadPontos = async () => {
			try {
				const res = await api.get("/me");
				setPontos(res.data.points || 0);
			} catch (err) {
				console.log("Erro ao carregar pontos:", err);
			}
		};

		loadPontos();
	}, []);

	async function fetchProductsByName(name: string) {
		if (!name || name.trim() === "") {
			setProducts([]);
			return;
		}

		try {
			setLoadingProducts(true);
			const res = await api.get("/product/search", { params: { name } });
			setProducts(res.data);
		} catch (err) {
			console.error("Error searching products:", err);
			setProducts([]);
		} finally {
			setLoadingProducts(false);
		}
	}

	function handleSearch() {
		fetchProductsByName(searchTerm);
	}

	useEffect(() => {
		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}

		const timer = setTimeout(() => {
			if (searchTerm && searchTerm.trim() !== "") {
				fetchProductsByName(searchTerm);
			} else {
				setProducts([]);
			}
		}, 500);

		setDebounceTimer(timer);

		return () => {
			clearTimeout(timer);
		};
	}, [searchTerm]);

	useEffect(() => {
		const loadCategories = async () => {
			try {
				setLoadingCategories(true);
				const res = await api.get("/category/list");
				setCategories(res.data);
			} catch (err) {
				console.error("Error loading categories:", err);
			} finally {
				setLoadingCategories(false);
			}
		};
		loadCategories();
	}, []);

	useEffect(() => {
		const loadProducts = async () => {
			if (searchTerm && searchTerm.trim() !== "") return;

			if (!selectedCategory) {
				setProducts([]);
				return;
			}
			try {
				setLoadingProducts(true);
				const res = await api.get("/category/products", {
					params: { category_id: selectedCategory },
				});
				setProducts(res.data);
			} catch (err) {
				console.error("Error loading products:", err);
				setProducts([]);
			} finally {
				setLoadingProducts(false);
			}
		};
		loadProducts();
	}, [selectedCategory]);

	return (
		<View style={styles.container}>
			{/* HEADER */}
			<View style={styles.header}>
				{/* Botão de usuário */}
				<TouchableOpacity onPress={() => navigation.navigate("UserPage")}>
					<Image
						source={
							authUser?.image_url
								? { uri: authUser.image_url }
								: { uri: "https://img.icons8.com/?size=100&id=85147&format=png&color=FFFFFF" }
						}
						style={[styles.icon24, authUser?.image_url && styles.avatarIcon]}
					/>
				</TouchableOpacity>

				{/* Logo */}
				<View style={styles.logoContainer}>
					<Text style={styles.logoText}>
						Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
					</Text>
				</View>


				{/* Ícone de pontos */}
				<View style={styles.pointsContainer}>
					<Ionicons name="star" size={24} color="#FFD700" />
					<Text style={styles.pointsText}>{pontos.toFixed(2)}</Text>
				</View>

				{/* Lado direito do header */}
				<TouchableOpacity
					onPress={() => navigation.navigate("OrderTicket")}
					style={{
						backgroundColor: "rgba(255,255,255,0.15)",
						paddingHorizontal: 10,
						paddingVertical: 5,
						borderRadius: 10,
						flexDirection: "row",
						alignItems: "center",
						gap: 8,
					}}
					activeOpacity={0.8}
				>
					<Text style={[styles.mesaText, { fontWeight: "bold", color: "#fff" }]}>
						Mesa {comanda?.numero_mesa}
					</Text>
					<Ionicons name="reader-sharp" size={18} color="#fff" />
					{totalPedido > 0 && (
						<View
							style={{
								position: "absolute",
								top: -3,
								right: -3,
								backgroundColor: "#FF3F4B",
								width: 10,
								height: 10,
								borderRadius: 5,
							}}
						/>
					)}
				</TouchableOpacity>

			</View>


			{/* SEARCH ROW */}
			<View style={styles.menuSearchRow}>
				<TouchableOpacity onPress={() => setShowCategories((v) => !v)} activeOpacity={0.8}>
					<Image
						source={{
							uri: "https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF",
						}}
						style={styles.sideIcon}
					/>
				</TouchableOpacity>

				<View style={styles.searchBox}>
					<Image
						source={{
							uri: "https://img.icons8.com/?size=100&id=7695&format=png&color=8A8A8A",
						}}
						style={styles.searchIcon}
					/>
					<TextInput
						placeholder="Buscar"
						placeholderTextColor="#8A8A8A"
						style={styles.input}
						value={searchTerm}
						onChangeText={(text) => setSearchTerm(text)}
						onSubmitEditing={handleSearch}
					/>
				</View>
			</View>

			{/* CONTENT */}
			<View style={styles.content}>
				<View style={styles.mainRow}>
					{/* LEFT COLUMN */}
					{showCategories && (
						<ScrollView
							style={styles.leftColumn}
							contentContainerStyle={styles.categoriesContainer}
							showsVerticalScrollIndicator={false}
						>
							{loadingCategories ? (
								<ActivityIndicator size="large" color="#391D8A" style={{ marginTop: 20 }} />
							) : (
								categories.map((cat) => (
									<TouchableOpacity
										key={cat.id}
										onPress={() => {
											setSelectedCategory(cat.id);
											setSearchTerm("");
										}}
										style={[
											styles.categoryItem,
											selectedCategory === cat.id && styles.selectedCategory,
										]}
										activeOpacity={0.8}
									>
										<CategoryCard image_url={cat.image_url} label={cat.name} />
									</TouchableOpacity>
								))
							)}
						</ScrollView>
					)}

					{/* RIGHT COLUMN */}
					<View style={[styles.rightColumn, !showCategories && styles.rightColumnFull]}>
						{loadingProducts ? (
							<ActivityIndicator size="large" color="#FF3F4B" style={{ marginTop: 20 }} />
						) : products.length > 0 ? (
							<ScrollView
								contentContainerStyle={styles.productsContainer}
								showsVerticalScrollIndicator={false}
							>
								<View style={styles.productsGrid}>
									{products.map((prod) => (
										<ItemCard
											key={prod.id}
											product={prod}
											onPress={() => navigation.navigate("ProductInfo", { product: prod })}
											showCategories={showCategories}
										/>
									))}
								</View>
							</ScrollView>
						) : (
							<Text style={styles.emptyText}>
								{searchTerm && searchTerm.trim() !== ""
									? "Nenhum produto encontrado para sua busca"
									: selectedCategory
										? "Nenhum produto nesta categoria"
										: "Selecione uma categoria"}
							</Text>
						)}
					</View>
				</View>
			</View>

			{/* FOOTER */}
			<View style={styles.footer}>
				<View style={styles.footerRow}>
					<Image
						source={{
							uri: "https://img.icons8.com/?size=100&id=rX7GcyLQDDjE&format=png&color=FFFFFF",
						}}
						style={styles.cartIcon}
					/>
					<Text style={styles.cartText}>{formatarPreco(totalPedido)}</Text>
				</View>

				<TouchableOpacity
					style={styles.orderButton}
					onPress={() => navigation.navigate("Order")}
				>
					<Text style={styles.orderText}>Pedido atual</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	pointsContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.3)",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 12,
	},
	pointsText: {
		color: "#FFD700",
		fontWeight: "700",
		marginLeft: 5,
	},
	container: { flex: 1, backgroundColor: "#1d1d2e" },
	content: { flex: 1 },
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
	icon24: { width: 24, height: 24 },
	logoContainer: {
		position: "absolute",
		left: 0,
		right: 0,
		alignItems: "center",
		zIndex: 0, // antes era 10
		pointerEvents: "none", 
	},
	logoText: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "700",
		marginBottom: 50,
	},
	mesaText: { color: "#fff", fontSize: 14, fontWeight: "600" },
	menuSearchRow: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		marginVertical: 10,
	},
	sideIcon: { width: 40, height: 40, marginRight: 10 },
	searchBox: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#8A8A8A",
		borderRadius: 15,
		borderWidth: 1,
		paddingHorizontal: 10,
		height: 40,
	},
	searchIcon: { width: 20, height: 20, marginRight: 8 },
	input: { flex: 1, color: "#FFF" },
	mainRow: { flexDirection: "row", width: "100%", height: "100%" },
	leftColumn: { width: "35%", borderRightWidth: 1, borderRightColor: "#ffffff1b" },
	rightColumn: { width: "65%", paddingHorizontal: 8 },
	rightColumnFull: { width: "100%" },
	categoriesContainer: { paddingVertical: 10 },
	categoryItem: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#ffffff1b" },
	selectedCategory: { backgroundColor: "#3b3b55f7" },
	categoryBg: { alignItems: "center", paddingHorizontal: 5 },
	categoryImage: { width: 65, height: 65 },
	categoryText: {
		color: "#FFF",
		fontWeight: "600",
		fontSize: 15,
		marginTop: 5,
		textAlign: "center",
	},
	productsContainer: { paddingVertical: 10, flexGrow: 1 },
	productsGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		gap: 7,
	},
	card: {
		width: "48%",
		backgroundColor: "#2a2a40",
		borderRadius: 12,
		elevation: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		marginBottom: 5,
	},
	ThreeCards: { width: "32%" },
	productImage: {
		width: "100%",
		height: 120,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
	},
	productInfo: { padding: 8, flex: 1, justifyContent: "space-between" },
	promoText: { color: "#FFF", fontSize: 16, fontWeight: "600", marginBottom: 4 },
	priceText: { color: "#00C851", fontSize: 14, fontWeight: "700", marginBottom: 8 },
	button: {
		backgroundColor: "#5A3FFF",
		borderRadius: 8,
		paddingVertical: 8,
		alignItems: "center",
		elevation: 8,
		shadowColor: "#5A3FFF",
	},
	buttonText: {
		color: "#FFF",
		fontSize: 12,
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 0.8,
	},
	emptyText: {
		textAlign: "center",
		fontSize: 16,
		color: "#FFF",
		marginTop: 20,
		paddingHorizontal: 25,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderTopWidth: 1,
		borderTopColor: "#ffffff1b",
	},
	footerRow: { flexDirection: "row", alignItems: "center", gap: 8 },
	cartIcon: { width: 32, height: 32 },
	cartText: { color: "#fff", fontSize: 18, fontWeight: "600" },
	orderButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF3F4B",
		borderRadius: 7,
		marginLeft: 16,
		padding: 5,
		width: "60%",
		elevation: 8,
		shadowColor: "#FF3F4B",
	},
	orderText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 0.8,
	},
	avatarIcon: {
		borderRadius: 12,
		borderWidth: 0.5,
		borderColor: "#FFF",
		// marginLeft: 25,
	},
});