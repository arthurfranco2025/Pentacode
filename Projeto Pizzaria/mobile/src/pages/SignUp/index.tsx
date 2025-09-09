import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image, } from "react-native";
export default () => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	const [textInput5, onChangeTextInput5] = useState('');
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#1D1D2E",
				}}>
				<View 
					style={{
						alignItems: "center",
						marginVertical: 57,
					}}>
					<View 
						style={{
							paddingVertical: 4,
							paddingHorizontal: 1,
						}}>
						<View 
							style={{
								alignItems: "flex-end",
							}}>
							<Text 
								style={{
									color: "#FF3F4B",
									fontSize: 48,
									fontWeight: "bold",
								}}>
								{"Pizza"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 48,
								fontWeight: "bold",
							}}>
							{"Sujeito"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 57,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 38,
							fontWeight: "bold",
						}}>
						{"Cadastro"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 19,
						marginHorizontal: 45,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
							marginBottom: 12,
						}}>
						{"Nome"}
					</Text>
					<TextInput
						placeholder={"Digite seu nome"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#F0F0F0",
							fontSize: 12,
							fontWeight: "bold",
							backgroundColor: "#101026",
							borderColor: "#8A8A8A",
							borderRadius: 3,
							borderWidth: 1,
							paddingVertical: 11,
							paddingLeft: 12,
							paddingRight: 24,
						}}
					/>
				</View>
				<View 
					style={{
						marginBottom: 19,
						marginHorizontal: 44,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
							marginBottom: 12,
						}}>
						{"Email"}
					</Text>
					<TextInput
						placeholder={"Digite seu email"}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={{
							color: "#F0F0F0",
							fontSize: 12,
							fontWeight: "bold",
							marginHorizontal: 1,
							backgroundColor: "#101026",
							borderColor: "#8A8A8A",
							borderRadius: 3,
							borderWidth: 1,
							paddingVertical: 11,
							paddingLeft: 13,
							paddingRight: 26,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#FFFFFF",
						fontSize: 12,
						fontWeight: "bold",
						marginBottom: 13,
						marginLeft: 44,
					}}>
					{"Senha"}
				</Text>
				<TextInput
					placeholder={"Digite Sua senha"}
					value={textInput3}
					onChangeText={onChangeTextInput3}
					style={{
						color: "#F0F0F0",
						fontSize: 12,
						fontWeight: "bold",
						marginBottom: 18,
						marginHorizontal: 45,
						backgroundColor: "#101026",
						borderColor: "#8A8A8A",
						borderRadius: 3,
						borderWidth: 1,
						paddingVertical: 10,
						paddingLeft: 13,
						paddingRight: 26,
					}}
				/>
				<Text 
					style={{
						color: "#FFFFFF",
						fontSize: 12,
						fontWeight: "bold",
						marginBottom: 11,
						marginLeft: 45,
					}}>
					{"Confirmar senha"}
				</Text>
				<TextInput
					placeholder={"Confirme a sua senha"}
					value={textInput4}
					onChangeText={onChangeTextInput4}
					style={{
						color: "#F0F0F0",
						fontSize: 12,
						fontWeight: "bold",
						marginBottom: 18,
						marginHorizontal: 45,
						backgroundColor: "#101026",
						borderColor: "#8A8A8A",
						borderRadius: 3,
						borderWidth: 1,
						paddingVertical: 10,
						paddingLeft: 13,
						paddingRight: 26,
					}}
				/>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FF3F4B",
						borderRadius: 3,
						paddingVertical: 10,
						marginBottom: 19,
						marginHorizontal: 45,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"Registrar"}
					</Text>
				</TouchableOpacity>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 19,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"ou"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderRadius: 3,
						paddingVertical: 10,
						paddingHorizontal: 63,
						marginBottom: 19,
						marginHorizontal: 45,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/yaigou25_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
						}}
					/>
					<TextInput
						placeholder={"Continuar com Google"}
						value={textInput5}
						onChangeText={onChangeTextInput5}
						style={{
							color: "#1D1D2E",
							fontSize: 12,
							fontWeight: "bold",
							flex: 1,
						}}
					/>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 134,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"Possui conta? Login"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}