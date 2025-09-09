import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, StyleSheet, } from "react-native";
export default () => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/k5Lg2oImfD/ea3pgiaa_expires_30_days.png"}} 
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
				<View style={styles.view3}>
					<Text style={styles.text3}>
						{"Recuperar conta"}
					</Text>
				</View>
				<Text style={styles.text4}>
					{"Um e-mail com um código de verificação foi enviado para @email.com."}
				</Text>
				<View style={styles.column2}>
					<Text style={styles.text5}>
						{"Código"}
					</Text>
					<TextInput
						placeholder={"Digite o código"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
				</View>
				<TextInput
					placeholder={"Enviar"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input2}
				/>
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
		marginBottom: 31,
		marginLeft: 53,
	},
	image: {
		width: 46,
		height: 46,
		marginTop: 11,
		marginLeft: 7,
	},
	input: {
		color: "#F0F0F0",
		fontSize: 14,
		backgroundColor: "#101026",
		borderColor: "#8A8A8A",
		borderRadius: 3,
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
	input2: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 454,
		marginLeft: 53,
		backgroundColor: "#FF3F4B",
		borderRadius: 3,
		paddingVertical: 11,
		paddingHorizontal: 135,
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
		fontSize: 34,
		fontWeight: "bold",
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 31,
		marginHorizontal: 47,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 10,
	},
	view: {
		alignItems: "center",
		marginBottom: 61,
	},
	view2: {
		alignItems: "flex-end",
	},
	view3: {
		alignItems: "center",
		marginBottom: 24,
	},
});