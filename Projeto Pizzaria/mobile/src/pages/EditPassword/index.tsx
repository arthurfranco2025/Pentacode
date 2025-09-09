import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
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
						{"Alterar senha"}
					</Text>
				</View>
				<View style={styles.column2}>
					<Text style={styles.text4}>
						{"Senha"}
					</Text>
					<TextInput
						placeholder={"Digite a nova senha"}
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
		marginBottom: 20,
		marginLeft: 53,
	},
	input: {
		color: "#F0F0F0",
		fontSize: 14,
		backgroundColor: "#101026",
		borderColor: "#8A8A8A",
		borderRadius: 3,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 13,
	},
	input2: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 493,
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
		marginBottom: 10,
	},
	view: {
		alignItems: "center",
		marginTop: 57,
		marginBottom: 62,
	},
	view2: {
		alignItems: "flex-end",
	},
	view3: {
		alignItems: "center",
		marginBottom: 60,
	},
});