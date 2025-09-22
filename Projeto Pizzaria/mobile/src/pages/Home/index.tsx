import React, { useState, useEffect } from "react";
import {
	View,
	ScrollView,
	Image,
	ImageBackground,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { api } from "../../services/api";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
	Home: undefined;
	ProductInfo: undefined;
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
	image: string;
}

interface Product {
	name: string;
	price: string;
	image: string;
	categoryId: string
}

const ItemCard = ({ product }: { product: Product }) => (
	<View style={styles.card}>
		<Image
			source={{ uri: product.image }}
			// style={styles.image}
			resizeMode="cover"
		/>
		<Text style={styles.promoText}>{product.name}</Text>
		<Text style={styles.priceText}>R$ {product.price}</Text>
		<TouchableOpacity style={styles.button} onPress={() => alert("Teste!")}>
			<Text style={styles.buttonText}>VER</Text>
		</TouchableOpacity>
	</View>
);


const CategoryCard = ({
	image,
	label,
}: {
	image: string;
	label: string;
}) => (
	<View style={styles.categoryBg}>
		<Image source={{ uri: image }} style={styles.categoryImage} />
		<Text style={styles.categoryText} numberOfLines={2} ellipsizeMode="tail">{label}</Text>
	</View>
);

export default function Home() {
	const [showCategories, setShowCategories] = useState(true);
	const [categories, setCategories] = useState<Categories[]>([])
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('');

	useEffect(() => {
		async function loadCategories() {
			try {
				const dbaCategories = await api.get('/category/list');
				console.log('sucesso em puxar as categorias')
				setCategories(dbaCategories.data);
			} catch (error) {
				console.error('Error loading data:', error)
			}
		}

		loadCategories()
	}, [])

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
							source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png" }}
							style={{ width: 24, height: 24 }}
						/>
					</TouchableOpacity>
					<Text style={styles.logoText}>
						Sujeito<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
					</Text>
					<View style={{ width: 24 }} />
				</LinearGradient>

			<ScrollView style={styles.scroll}>
				{/* Categorias */}
				<View style={styles.menuSearchRow}>
					{/* Menu só no ícone */}
					<TouchableOpacity onPress={() => setShowCategories(v => !v)} activeOpacity={0.8}>
						<Image
							source={{
								uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/elfbi5a5_expires_30_days.png",
							}}
							resizeMode="stretch"
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

				<View style={styles.mainRow}>
					{showCategories && (
						<ScrollView
							style={styles.leftColumn}
							showsVerticalScrollIndicator={false}
						>
							{categories.map((category, idx) => (
								<TouchableOpacity
									key={category.id}
									onPress={() => setSelectedCategory(category.id)}
									style={[
										styles.categoryItem,
										selectedCategory === category.id && styles.selectedCategory
									]}
								>
									<CategoryCard
										image={category.image}
										label={category.name}
									/>
								</TouchableOpacity>
							))}
						</ScrollView>
					)}

					<View style={styles.rightColumn}>
						<Text>Destaques</Text>

						<View style={styles.row}>
							{/* PRODUTOS AQUI */}

							{/* <ItemCard image="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/byxk8i28_expires_30_days.png" title="2 por 1" price="R$50,00" />  É POSSÍVEL ADICIONAR MAIS CARDS AQUI */}
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
			</ScrollView>

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
				<TouchableOpacity style={styles.orderButton} onPress={() => alert("Pressed!")}>
					<Text style={styles.orderText}>Pedido</Text>
				</TouchableOpacity>
			</LinearGradient>
		</View >
	);
}

const styles = StyleSheet.create({
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
		flex: 1, // 👈 ocupa o resto do espaço
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
	mainRow: { flexDirection: "row" },
	leftColumn: {
		width: 100, 
		backgroundColor: '#fff',
		borderRightWidth: 1,
		borderRightColor: '#ECECEC',
		height: '100%',
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		elevation: 4,
	},
	rightColumn: {
		flex: 1,
		marginVertical: 5,
		marginLeft: 10,
		paddingHorizontal: 10,
	},
	row: { flexDirection: "row", marginBottom: 32 },
	card: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#ECECEC75",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 128,
		paddingBottom: 14,
		paddingHorizontal: 9,
		marginRight: 13,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 3,
		elevation: 3,
	},
	promoText: { color: "#FF3F4B", fontSize: 24, marginBottom: 9 },
	priceText: { color: "#000", fontSize: 24, marginBottom: 7 },
	button: {
		backgroundColor: "#38207F",
		borderRadius: 16,
		paddingVertical: 10,
		paddingHorizontal: 15,
		shadowColor: "#00000033",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		elevation: 4,
	},
	buttonText: { color: "#fff", fontSize: 24 },
	categoryBg: {
		alignItems: 'center',
		paddingHorizontal: 5,
		width: '100%',
	},

	categoryItem: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ECECEC',
	},
	categoryImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	selectedCategory: {
		backgroundColor: '#f0f0f0',
		borderLeftWidth: 3,
		borderLeftColor: '#391D8A',
	},
	categoryText: {
		color: '#38207F',
		fontSize: 24,
		marginTop: 5,
		textAlign: 'left',
		width:'100%',
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