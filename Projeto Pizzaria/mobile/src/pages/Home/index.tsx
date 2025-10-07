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
import { formatarPreco } from "../../components/utils/formatPrice"
import { useRoute, RouteProp } from "@react-navigation/native";
import { StackParamsList } from "../../routes/app.routes";
import { useComanda } from "../../contexts/comandaContext";




type RootStackParamList = {
	Home: undefined;
	ProductInfo: {
		product: Product;
	};
	Order: undefined;
};


// const PromoCard = ({ title, price }: { title: string; price: string }) => (
// 	<View style={styles.card}>
// 		<Text style={styles.promoText}>{title}</Text>
// 		<Text style={styles.priceText}>{price}</Text>
// 		<TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
// 			<Text style={styles.buttonText}>VER</Text>
// 		</TouchableOpacity>
// 	</View>
// );
interface Categories {
	name: string;
	id: string;
	image_url: string;
}

interface Product {
	id: string;
	name: string;
	price: string;
	description?: string;
	image_url: string;
	category_id: string
}

const CategoryCard = ({
	image_url,
	label,
}: {
	image_url: string;
	label: string;
}) => (
	<View style={styles.categoryBg}>
		<Image source={{ uri: image_url }} style={styles.categoryImage}
		// onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
		// onLoad={() => console.log('Image loaded successfully')}
		// Adicione um placeholder enquanto a imagem carrega
		// defaultSource={require('../../assets/placeholder.png')}
		/>
		<Text style={styles.categoryText} numberOfLines={2} ellipsizeMode="tail">{label}</Text>
	</View>
);

export default function Home() {
	const { signOut } = useContext(AuthContext)
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const [showCategories, setShowCategories] = useState(true);
	const [categories, setCategories] = useState<Categories[]>([])
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('');

	const [loadingCategories, setLoadingCategories] = useState(false);
	const [loadingProducts, setLoadingProducts] = useState(false);

	const { comanda } = useComanda()

	console.log("Mesa ID:", comanda?.mesaId);
	console.log("Número da mesa:", comanda?.numero_mesa);

	const ItemCard = ({ product }: { product: Product }) => (
		<View style={[styles.card, !showCategories && styles.ThreeCards]}>
			<Image
				source={{ uri: product.image_url }}
				style={styles.productImage}
				resizeMode="cover"
			/>
			<View style={styles.productInfo}>
				<Text style={styles.promoText} ellipsizeMode="tail" numberOfLines={2}>{product.name}</Text>
				<Text style={styles.priceText}>{formatarPreco(product.price)}</Text>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductInfo', { product })}>
					<Text style={styles.buttonText}>VER</Text>
				</TouchableOpacity>
			</View>
		</View>
	);



	useEffect(() => {
		async function loadCategories() {
			try {
				setLoadingCategories(true)
				const dbaCategories = await api.get('/category/list');
				// console.log('Categorias carregadas:', dbaCategories.data)
				dbaCategories.data.forEach((cat: Categories) => {
					console.log('Image path:', cat.image_url)
				});
				setCategories(dbaCategories.data);
			} catch (error) {
				console.error('Error loading data:', error)
			} finally {
				setLoadingCategories(false)
			}
		}

		loadCategories()

	}, [])

	useEffect(() => {
		async function LoadListProduct() {
			try {
				setLoadingProducts(true)
				if (selectedCategory) {
					const dbaListProductsByCategories = await api.get('category/products', {
						params: {
							category_id: selectedCategory
						}
					});
					// console.log('Produtos carregados:', dbaListProductsByCategories.data)
					setProducts(dbaListProductsByCategories.data)
				} else {
					setProducts([]);
				}
			} catch (error) {
				if (typeof error === 'object' && error !== null && 'response' in error) {
					console.error('Error loading products:', (error as any).response?.data || error);
				} else {
					console.error('Error loading products:', error);
				}
				setProducts([]);
			} finally {
				setLoadingProducts(false)
			}
		}

		LoadListProduct();
	}, [selectedCategory])


	return (
		<View style={styles.container}>
			{/* Header */}
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={["#391D8A", "#261B47"]}
				style={styles.header}
			>
				<TouchableOpacity>
					<Image
						source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png" }} //Alterar isso
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

			{/* Categorias */}
			<View style={styles.menuSearchRow}>
				<TouchableOpacity onPress={() => setShowCategories(v => !v)} activeOpacity={0.8}>
					<Image
						source={{ uri: "https://img.icons8.com/ios-filled/50/000000/menu.png" }}
						style={styles.sideIcon}
					/>
				</TouchableOpacity>

				{/* Barra de busca */}
				<View style={styles.searchBox}>
					<Image
						source={{
							uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/52m18ks0_expires_30_days.png",
						}}
						resizeMode="stretch"
						style={styles.searchIcon}
					/>
					<TextInput
						placeholder="Buscar"
						placeholderTextColor="#8A8A8A"
						style={styles.input}
					/>
				</View>
			</View>

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
								categories.map((category) => (
									<TouchableOpacity
										key={category.id}
										onPress={() => setSelectedCategory(category.id)}
										style={[
											styles.categoryItem,
											selectedCategory === category.id && styles.selectedCategory
										]}
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
								<ScrollView
									showsVerticalScrollIndicator={false}
									contentContainerStyle={styles.productsContainer}
								>
									<View style={styles.productsGrid}>
										{products.map((product) => (
											<ItemCard key={product.id} product={product} />
										))}
									</View>
								</ScrollView>
							) : (
								<Text style={styles.emptyText}>
									{selectedCategory
										? "Nenhum produto nesta categoria"
										: "Selecione uma categoria"}
								</Text>
							)}
						</View>
					</View>

					{/* Decoração
					<Image
						source={{
							uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/8jzvo0et_expires_30_days.png",
						}}
						resizeMode="stretch"
						style={styles.decoration}
					/> */}
				</View>
			</View>

			{/* Rodapé */}
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={["#391E8B", "#261B47"]}
				style={styles.footer}
			>
				<View style={styles.footerRow}>
					<Image
						source={{
							uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/e6jpmght_expires_30_days.png",
						}}
						resizeMode="stretch"
						style={styles.cartIcon}
					/>
					<Text style={styles.cartText}>: R$0.00</Text>
				</View>
				<TouchableOpacity
					style={styles.orderButton}
					onPress={() => navigation.navigate('Order')}
				>
					<Text style={styles.orderText}>Pedido</Text>
				</TouchableOpacity>

				<Button
					title='Sair do App'
					onPress={signOut}
				/>
			</LinearGradient>
		</View >
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
	},

	categoriesContainer: {
		paddingVertical: 10,
	},

	productsContainer: {
		paddingVertical: 10,
		flexGrow: 1,
	},

	productsGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		// padding: 5,
		gap: 7,
	},

	emptyText: {
		textAlign: 'center',
		fontSize: 16,
		color: '#666',
		marginTop: 20,
	},

	card: {
		width: '48%',
		// marginBottom: 15,
		alignItems: "stretch",
		backgroundColor: "#fff",
		borderColor: "#ECECEC75",
		borderRadius: 10,
		borderWidth: 1,
		padding: 1,
		elevation: 3,
		justifyContent: 'space-between'
	},
	ThreeCards: {
		width: '32%',
	},
	container: { flex: 1, backgroundColor: "#fff" },
	scroll: { flex: 1 },
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 52,
		paddingBottom: 7,
		paddingHorizontal: 30,
	},
	logoText: { color: "#fff", fontSize: 20, fontWeight: "700" },
	logo: { width: 59, height: 59 },
	titleLogo: { width: 194, height: 44, marginTop: 8, marginBottom: 7 },
	categoriesRow: { flexDirection: "row", marginLeft: 25 },
	sideIcon: { width: 40, height: 40, marginRight: 10 },
	searchBox: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#0000003b",
		borderRadius: 15,
		borderWidth: 1,
		paddingHorizontal: 10,
		height: 40,
	},
	menuSearchRow: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		marginVertical: 10,
	},
	searchWrapper: { backgroundColor: "#FFFFFF94", paddingVertical: 9, paddingHorizontal: 25 },
	input: { flex: 1 },
	searchIcon: {
		width: 20,
		height: 20,
		marginRight: 8,
	},
	mainRow: {
		flexDirection: "row",
		width: '100%',
		height: '100%',
	},

	rightColumn: {
		width: '65%', // Aumenta o espaço para produtos
		paddingHorizontal: 8,
		justifyContent: 'space-between'
	},
	rightColumnFull: {
		width: '100%'
	},
	leftColumn: {
		width: '35%', // Diminui a sidebar
		backgroundColor: "#fff",
		borderRightWidth: 1,
		borderRightColor: "#ECECEC",
		paddingVertical: 6,
		paddingHorizontal: 4,
		elevation: 4,
	},
	row: { flexDirection: "row", marginBottom: 32 },
	promoText: {
		color: "#FF3F4B",
		fontSize: 16,
		marginBottom: 9,
		textAlign: 'left',
		minHeight: 40,
	},
	priceText: { color: "#000", fontSize: 12, marginBottom: 7 },
	button: {
		backgroundColor: "#38207F",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
		elevation: 4,
		alignItems: 'center',
	},
	buttonText: { color: "#fff", fontSize: 12 },
	categoryBg: {
		alignItems: 'center',
		paddingHorizontal: 5,
		width: '100%',
	},
	productInfo: {
		padding: 5
	},
	productImage: {
		width: '100%',
		height: 120,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	categoryItem: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ECECEC',
	},
	categoryImage: {
		width: 65,
		height: 65,
		borderRadius: 10,
	},
	selectedCategory: {
		backgroundColor: '#f0f0f0',
		borderLeftWidth: 3,
		borderLeftColor: '#391D8A',
	},
	categoryText: {
		color: '#38207F',
		fontSize: 20,
		marginTop: 5,
		textAlign: 'center',
		width: '100%',
	},
	footer: {
		// position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 10,
		overflow: "hidden",
	},
	footerRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	cartIcon: { width: 32, height: 32 },
	cartText: { color: "#fff", fontSize: 18, fontWeight: "600" },
	orderButton: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF3F4B",
		borderRadius: 12,
		marginLeft: 16,
		paddingVertical: 12,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 6,
		elevation: 5,
	},
	orderText: { color: "#fff", fontSize: 20, fontWeight: "bold" },

});