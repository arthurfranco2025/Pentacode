import React, { useState } from "react";
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

const ItemCard = ({ title, price, image }: { title: string; price: string; image: string }) => (
	<View style={styles.card}>
		<Text style={styles.promoText}>{title}</Text>
		<Text style={styles.priceText}>{price}</Text>
		<TouchableOpacity style={styles.button} onPress={() => alert("Teste!")}>
			<Text style={styles.buttonText}>VER</Text>
		</TouchableOpacity>
	</View>
);

const CategoryCard = ({
	image,
	label,
	bgImage,
}: {
	image: string;
	label: string;
	bgImage: string;
}) => (
	<ImageBackground source={{ uri: bgImage }} resizeMode="stretch" style={styles.categoryBg}>
		<Image source={{ uri: image }} resizeMode="stretch" style={styles.categoryImage} />
		<Text style={styles.categoryText}>{label}</Text>
	</ImageBackground>
);

export default function Home() {
	const [showCategories, setShowCategories] = useState(true);

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scroll}>
				{/* Header */}
				<LinearGradient
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
					colors={["#391D8A", "#261B47"]}
					style={styles.header}
				>
					<Image
						source={{
							uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/ak455z3e_expires_30_days.png",
						}}
						resizeMode="stretch"
						style={styles.logo}
					/>
					<Image
						source={{
							uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/58aawfe4_expires_30_days.png",
						}}
						resizeMode="stretch"
						style={styles.titleLogo}
					/>
				</LinearGradient>

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
						<View style={styles.leftColumn}>
							<CategoryCard
								image="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/byxk8i28_expires_30_days.png"
								bgImage="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/8p1f6qnp_expires_30_days.png"
								label="Pizzas"
							/>

							{/* <CategoryCard
								image="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/byxk8i28_expires_30_days.png"
								bgImage="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/8p1f6qnp_expires_30_days.png"
								label="Pizzas"
							/> É POSSÍVEL ADICIONAR MAIS CATEGORIAS AQUI, mas não é um jeito automatizado  */}
						</View>
					)
					}

					<View style={styles.rightColumn}>
						<Text style={styles.sectionTitle}>Destaques</Text>

						<View style={styles.row}>
							<ItemCard image="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/byxk8i28_expires_30_days.png" title="2 por 1" price="R$50,00" />

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
		alignItems: "center",
		backgroundColor: "#fff",
		paddingBottom: 99,
		marginRight: 9,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		elevation: 4,
	},
	rightColumn: { marginVertical: 5, marginLeft: 5 },
	sectionTitle: {
		color: "#38207F",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
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
	categoryBg: { alignItems: "center", paddingVertical: 40, paddingHorizontal: 13 },
	categoryImage: { width: 126, height: 118 },
	categoryText: { color: "#38207F", fontSize: 32, marginTop: 10 },
	// emptyCard: {
	// 	width: 139,
	// 	height: 244,
	// 	backgroundColor: "#fff",
	// 	borderColor: "#ECECEC75",
	// 	borderRadius: 20,
	// 	borderWidth: 1,
	// 	shadowColor: "#00000040",
	// 	shadowOpacity: 0.3,
	// 	shadowOffset: { width: 0, height: 4 },
	// 	shadowRadius: 3,
	// 	elevation: 3,
	// },
	// decoration: { position: "absolute", bottom: 174, left: 0, width: 151, height: 236 },
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