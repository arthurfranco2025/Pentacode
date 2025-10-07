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
	Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { api } from "../../services/api";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";
import { useComanda } from "../../contexts/comandaContext";
import { usePedido } from "../../contexts/pedidoContext";
import { StackParamsList } from "../../routes/app.routes";

type RootStackParamList = {
	Home: undefined;
	ProductInfo: {
		product: Product;
	};
	Order: undefined;
};

interface Categories {
	name: string;
	id: string;
	image_url: string;
}

interface Product {
	id: string;
	name: string;
	price: number; // alterei para number, já que o totalPedido é number
	description?: string;
	image_url: string;
	category_id: string;
}

const CategoryCard = ({ image_url, label }: { image_url: string; label: string }) => (
	<View style={styles.categoryBg}>
		<Image source={{ uri: image_url }} style={styles.categoryImage} />
		<Text style={styles.categoryText} numberOfLines={2} ellipsizeMode="tail">
			{label}
		</Text>
	</View>
);

export default function Home() {
	const { signOut } = useContext(AuthContext);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { comanda } = useComanda();
	const { pedido } = usePedido();

	const [showCategories, setShowCategories] = useState(true);
	const [categories, setCategories] = useState<Categories[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [loadingCategories, setLoadingCategories] = useState(false);
	const [loadingProducts, setLoadingProducts] = useState(false);

	const { totalPedido } = usePedido(); // total do pedido real

	const ItemCard = ({ product }: { product: Product }) => (
		<View style={[styles.card, !showCategories && styles.ThreeCards]}>
			<Image source={{ uri: product.image_url }} style={styles.productImage} resizeMode="cover" />
			<View style={styles.productInfo}>
				<Text
					style={styles.promoText}
					ellipsizeMode="tail"
					numberOfLines={2}
				>
					{product.name}
				</Text>
				<Text style={styles.priceText}>{formatarPreco(product.price)}</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProductInfo", { product })}
				>
					<Text style={styles.buttonText}>VER</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	useEffect(() => {
		async function loadCategories() {
			try {
				setLoadingCategories(true);
				const dbaCategories = await api.get("/category/list");
				setCategories(dbaCategories.data);
			} catch (error) {
				console.error("Error loading data:", error);
			} finally {
				setLoadingCategories(false);
			}
		}

		loadCategories();
	}, []);

	useEffect(() => {
		async function LoadListProduct() {
			try {
				setLoadingProducts(true);
				if (selectedCategory) {
					const dbaListProductsByCategories = await api.get(
						"category/products",
						{
							params: { category_id: selectedCategory },
						}
					);
					setProducts(dbaListProductsByCategories.data);
				} else {
					setProducts([]);
				}
			} catch (error) {
				console.error("Error loading products:", error);
				setProducts([]);
			} finally {
				setLoadingProducts(false);
			}
		}
		LoadListProduct();
	}, [selectedCategory]);

	return (
		<View style={styles.container}>
			{/* Header */}
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={["#3D1F93", "#1d1d2e"]}
				style={styles.header}
			>
				<TouchableOpacity>
					<Image
						source={{
							uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png",
						}}
						style={{ width: 24, height: 24 }}
					/>
				</TouchableOpacity>
				<Text style={styles.logoText}>
					Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
				</Text>
				<Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
					Mesa {comanda?.numero_mesa}
				</Text>
			</LinearGradient>

			{/* Categorias e Produtos */}
			<View style={styles.menuSearchRow}>
				<TouchableOpacity
					onPress={() => setShowCategories((v) => !v)}
					activeOpacity={0.8}
				>
					<Image
						source={{
							uri: "https://img.icons8.com/ios-filled/50/000000/menu.png",
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
					<TextInput placeholder="Buscar" placeholderTextColor="#8A8A8A" style={styles.input} />
				</View>
			</View>

			{/* Conteúdo */}
			<View style={styles.content}>
				<View style={styles.mainRow}>
					{showCategories && (
						<ScrollView
							style={styles.leftColumn}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.categoriesContainer}
						>
							{loadingCategories ? (
								<ActivityIndicator size="large" color="#391D8A" style={{ marginTop: 20 }} />
							) : (
								categories.map(category => (
									<TouchableOpacity
										key={category.id}
										onPress={() => setSelectedCategory(category.id)}
										style={[
											styles.categoryItem,
											selectedCategory === category.id && styles.selectedCategory,
										]}
										activeOpacity={0.8}
									>
										<CategoryCard image_url={category.image_url} label={category.name} />
									</TouchableOpacity>
								))
							)}
						</ScrollView>
					)}

					<View style={[styles.rightColumn, !showCategories && styles.rightColumnFull]}>
						<View style={styles.row}>
							{loadingProducts ? (
								<ActivityIndicator size="large" color="#FF3F4B" style={{ marginTop: 20 }} />
							) : products.length > 0 ? (
								<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.productsContainer}>
									<View style={styles.productsGrid}>
										{products.map(product => (
											<ItemCard key={product.id} product={product} />
										))}
									</View>
								</ScrollView>
							) : (
								<Text style={styles.emptyText}>
									{selectedCategory ? "Nenhum produto nesta categoria" : "Selecione uma categoria"}
								</Text>
							)}
						</View>
					</View>
				</View>
			</View>

			{/* Rodapé com total real */}
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={["#1d1d2e", "#3D1F93"]}
				style={styles.footer}
			>
				<View style={styles.footerRow}>
					<Image
						source={{
							uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/e6jpmght_expires_30_days.png",
						}}
						style={styles.cartIcon}
					/>
					<Text style={styles.cartText}>{formatarPreco(totalPedido)}</Text>
				</View>

				<TouchableOpacity
					style={styles.orderButton}
					onPress={() => navigation.navigate('Order')}
				>
					<Text style={styles.orderText}>Pedido</Text>
				</TouchableOpacity>

				<Button title="Sair do App" onPress={signOut} />
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1d1d2e",
	},
	content: { flex: 1 },
	categoriesContainer: { paddingVertical: 10 },
	productsContainer: { paddingVertical: 10, flexGrow: 1 },
	productsGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		gap: 7
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
	productInfo: {
		padding: 8,
		flex: 1,
		justifyContent: "space-between",
	},
	promoText: { color: "#FFF", fontSize: 16, fontWeight: "600", marginBottom: 4 },
	priceText: { color: "#00C851", fontSize: 14, fontWeight: "700", marginBottom: 8 },
	button: {
		backgroundColor: "#5A3FFF",
		borderRadius: 8,
		paddingVertical: 8,
		alignItems: "center",
	},
	buttonText: { color: "#FFF", fontSize: 12, fontWeight: "bold" },
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
	logoText: { color: "#fff", fontSize: 22, fontWeight: "700" },
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
	leftColumn: {
		width: "35%",
		borderRightWidth: 1,
		borderRightColor: "#ffffff1b",
	},
	rightColumn: {
		width: "65%",
		paddingHorizontal: 8,
	},
	rightColumnFull: { width: "100%" },
	mainRow: { flexDirection: "row", width: "100%", height: "100%" },
	row: { flexDirection: "row" },
	categoryItem: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ffffff1b",
	},
	selectedCategory: {
		backgroundColor: "#3b3b55f7",
	},
	categoryBg: {
		alignItems: "center",
		paddingHorizontal: 5,
	},
	categoryImage: { width: 65, height: 65 },
	categoryText: {
		color: "#FFF",
		fontWeight: "600",
		fontSize: 15,
		marginTop: 5,
		textAlign: "center",
	},
	emptyText: {
		textAlign: "center",
		fontSize: 16,
		color: "#FFF",
		marginTop: 20
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
	footerRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	cartIcon: { width: 32, height: 32 },
	cartText: { color: "#fff", fontSize: 18, fontWeight: "600" },
	orderButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF3F4B",
		borderRadius: 7,
		marginLeft: 16,
		padding: 5,
		elevation: 5,
		width: "60%",
	},
	orderText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});