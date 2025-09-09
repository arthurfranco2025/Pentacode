import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image, } from "react-native";
export default () => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
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
						marginBottom: 56,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 38,
							fontWeight: "bold",
						}}>
						{"Entrar"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 11,
						marginHorizontal: 45,
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
						value={textInput1}
						onChangeText={onChangeTextInput1}
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
						marginLeft: 45,
					}}>
					{"Senha"}
				</Text>
				<TextInput
					placeholder={"Digite Sua senha"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={{
						color: "#F0F0F0",
						fontSize: 12,
						fontWeight: "bold",
						marginBottom: 10,
						marginHorizontal: 46,
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
						marginLeft: 43,
					}}>
					{"Esqueceu a senha?"}
				</Text>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FF3F4B",
						borderRadius: 3,
						paddingVertical: 11,
						marginBottom: 11,
						marginHorizontal: 46,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"Acessar"}
					</Text>
				</TouchableOpacity>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 11,
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
						marginBottom: 11,
						marginHorizontal: 46,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/k5Lg2oImfD/f1ss8fk5_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
						}}
					/>
					<TextInput
						placeholder={"Continuar com Google"}
						value={textInput3}
						onChangeText={onChangeTextInput3}
						style={{
							color: "#1D1D2E",
							fontSize: 12,
							fontWeight: "bold",
							flex: 1,
						}}
					/>
				</View>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderRadius: 3,
						paddingVertical: 12,
						marginBottom: 11,
						marginHorizontal: 46,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#1D1D2E",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"Entrar como convidado"}
					</Text>
				</TouchableOpacity>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/k5Lg2oImfD/g67ybkkp_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						width: 24,
						height: 24,
						marginBottom: 11,
						marginLeft: 98,
					}}
				/>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 229,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"Não possui conta? Cadastre-se"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}