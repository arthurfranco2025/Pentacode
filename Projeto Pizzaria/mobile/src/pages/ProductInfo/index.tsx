import React, { useState, useRef } from "react";
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
	Animated,
	Easing,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { formatarPreco } from "../../components/utils/formatPrice";

type RootStackParamList = {
	Home: undefined;
	ProductInfo: {
		product: Product;
	};
	CustomizeProduct: {
		product: Product;
	};
};

type RouteParams = RouteProp<RootStackParamList, "ProductInfo">;

interface Product {
	id: string;
	name: string;
	price: string;
	description?: string;
	image_url: string;
	category_id: string;
}

export default function ProductInfo() {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const [isFavorite, setIsFavorite] = useState(false);
	const favoriteAnim = useRef(new Animated.Value(1)).current;

	const route = useRoute<RouteParams>();
	const { product } = route.params;

	const handleFavoritePress = () => {
		setIsFavorite((prev) => !prev);
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
	};

	return (
		<View style={styles.container}>
			{/* Header */}
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={["#3D1F93", "#1d1d2e"]}
				style={styles.header}
			>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/left.png" }}
						style={{ width: 26, height: 26 }}
					/>
				</TouchableOpacity>

				<Text style={styles.logoText}>
					Penta<Text style={{ color: "#FF3F4B" }}>Pizza</Text>
				</Text>

				<View style={{ width: 26 }} />
			</LinearGradient>

			{/* Conteúdo principal */}
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

					<View style={styles.priceRow}>
						<Text style={styles.price}>{formatarPreco(product.price)}</Text>
					</View>

					<TouchableOpacity
						style={styles.addButton}
						onPress={() =>
							navigation.navigate("CustomizeProduct", { product: product })
						}
					>
						<Text style={styles.addButtonText}>Adicionar ao Pedido</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.payButton}>
						<Text style={styles.payButtonText}>Pagar Separadamente</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			{/* Footer */}
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
					<Text style={styles.cartText}>: 0,00</Text>
				</View>
				<TouchableOpacity style={styles.orderButton}>
					<Text style={styles.orderText}>Pedido</Text>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1d1d2e",
	},
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
	logoText: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "700",
	},
	image: {
		width: "100%",
		height: 250,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	contentContainer: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	titleRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	title: {
		fontSize: 22,
		fontWeight: "700",
		color: "#fff",
		flex: 1,
		paddingRight: 10,
	},
	favoriteIcon: {
		width: 28,
		height: 28,
	},
	desc: {
		color: "#ccc",
		marginBottom: 15,
		fontSize: 15,
		lineHeight: 22,
	},
	priceRow: {
		marginBottom: 15,
	},
	price: {
		fontSize: 18,
		fontWeight: "700",
		color: "#00C851",
	},
	addButton: {
		backgroundColor: "#FF3F4B",
		borderRadius: 10,
		paddingVertical: 12,
		alignItems: "center",
		marginBottom: 12,
	},
	addButtonText: {
		color: "#fff",
		fontWeight: "700",
		fontSize: 16,
	},
	payButton: {
		backgroundColor: "#5A3FFF",
		borderRadius: 10,
		paddingVertical: 12,
		alignItems: "center",
		marginBottom: 15,
	},
	payButtonText: {
		color: "#fff",
		fontWeight: "700",
		fontSize: 16,
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
	cartIcon: {
		width: 32,
		height: 32,
	},
	cartText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "600",
	},
	orderButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF3F4B",
		borderRadius: 7,
		marginLeft: 16,
		paddingVertical: 8,
		elevation: 5,
		width: "50%",
	},
	orderText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});