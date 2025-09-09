import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/k5Lg2oImfD/aq8ll7e9_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={styles.image}
				/>
				<View style={styles.view}>
					<View style={styles.column}>
						<View style={styles.view2}>
							<Text style={styles.text}>
								{"Pizza"}
							</Text>
						</View>
						<Text style={styles.text2}>
							{"Sujeito"}
						</Text>
					</View>
				</View>
				<Text style={styles.text3}>
					{"Esqueceu a senha?"}
				</Text>
				<View style={styles.column2}>
					<Text style={styles.text4}>
						{"Email"}
					</Text>
					<TextInput
						placeholder={"Digite seu email"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
				</View>
				<View style={styles.view3}>
					<Text style={styles.text5}>
						{"Enviar"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	column: {
		paddingVertical: 4,
		paddingHorizontal: 1,
	},
	column2: {
		marginBottom: 19,
		marginHorizontal: 44,
	},
	image: {
		width: 46,
		height: 46,
		marginTop: 11,
		marginLeft: 11,
	},
	input: {
		color: "#F0F0F0",
		fontSize: 14,
		backgroundColor: "#101026",
		borderColor: "#8A8A8A",
		borderRadius: 3,
		borderWidth: 1,
		paddingVertical: 10,
		paddingLeft: 12,
		paddingRight: 24,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#1D1D2E",
	},
	text: {
		color: "#FF3F4B",
		fontSize: 48,
		fontWeight: "bold",
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 48,
		fontWeight: "bold",
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 58,
		marginHorizontal: 22,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 10,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: 135,
	},
	view: {
		alignItems: "center",
		marginBottom: 57,
	},
	view2: {
		alignItems: "flex-end",
	},
	view3: {
		backgroundColor: "#FF3F4B",
		borderRadius: 3,
		paddingVertical: 11,
		marginBottom: 499,
		marginHorizontal: 44,
	},
});