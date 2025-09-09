import React from "react";
import { SafeAreaView, View, ScrollView, Image, ImageBackground, Text, TouchableOpacity, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#391D8A", "#261B47"]}
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingTop: 52,
						paddingBottom: 7,
						paddingHorizontal: 30,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/ak455z3e_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 59,
							height: 59,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/58aawfe4_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 194,
							height: 44,
							marginTop: 8,
							marginBottom: 7,
						}}
					/>
				</LinearGradient>
				<View 
					style={{
						flexDirection: "row",
						marginLeft: 25,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/elfbi5a5_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 47,
							height: 48,
							marginRight: 78,
						}}
					/>
					<View 
						style={{
							backgroundColor: "#FFFFFF94",
							paddingVertical: 9,
							paddingHorizontal: 25,
						}}>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#8B8B8B08",
								borderRadius: 15,
								borderWidth: 1,
								paddingVertical: 9,
								paddingLeft: 8,
								paddingRight: 180,
								shadowColor: "#0000001C",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 2,
								    height: 2
								},
								shadowRadius: 5,
								elevation: 5,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/52m18ks0_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
					}}>
					<View 
						style={{
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							paddingBottom: 99,
							marginRight: 9,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/xfzo7enx_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingTop: 50,
								paddingBottom: 64,
								paddingHorizontal: 13,
							}}
							>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/9fygo7gl_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 126,
									height: 118,
								}}
							/>
							<Text 
								style={{
									position: "absolute",
									bottom: 27,
									left: 20,
									color: "#38207F",
									fontSize: 32,
								}}>
								{"Bebidas"}
							</Text>
						</ImageBackground>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/8p1f6qnp_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingTop: 30,
								paddingBottom: 50,
							}}
							>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/byxk8i28_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 126,
									height: 118,
									marginHorizontal: 13,
								}}
							/>
							<Text 
								style={{
									color: "#38207F",
									fontSize: 32,
									marginLeft: 37,
								}}>
								{"Pizzas"}
							</Text>
						</ImageBackground>
					</View>
					<View 
						style={{
							marginVertical: 5,
						}}>
						<Text 
							style={{
								color: "#38207F",
								fontSize: 24,
								fontWeight: "bold",
								marginBottom: 8,
							}}>
							{"Promoções"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								marginBottom: 32,
							}}>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#ECECEC75",
									borderRadius: 20,
									borderWidth: 1,
									paddingTop: 128,
									paddingBottom: 14,
									paddingHorizontal: 9,
									marginVertical: 2,
									marginRight: 13,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 3,
									elevation: 3,
								}}>
								<Text 
									style={{
										color: "#FF3F4B",
										fontSize: 24,
										marginBottom: 9,
									}}>
									{" 2 por 1"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										marginBottom: 7,
									}}>
									{"R$50,00"}
								</Text>
								<TouchableOpacity 
									style={{
										backgroundColor: "#38207F",
										borderColor: "#00000000",
										borderRadius: 16,
										borderWidth: 1,
										paddingVertical: 10,
										paddingHorizontal: 17,
										shadowColor: "#00000033",
										shadowOpacity: 0.2,
										shadowOffset: {
										    width: 0,
										    height: 4
										},
										shadowRadius: 4,
										elevation: 4,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 24,
										}}>
										{"VER"}
									</Text>
								</TouchableOpacity>
							</View>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#ECECEC75",
									borderRadius: 20,
									borderWidth: 1,
									paddingTop: 130,
									paddingBottom: 12,
									paddingHorizontal: 9,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 3,
									elevation: 3,
								}}>
								<Text 
									style={{
										color: "#FF3F4B",
										fontSize: 24,
										marginBottom: 9,
									}}>
									{" 2 por 1"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										marginBottom: 7,
									}}>
									{"R$50,00"}
								</Text>
								<TouchableOpacity 
									style={{
										backgroundColor: "#38207F",
										borderColor: "#00000000",
										borderRadius: 16,
										borderWidth: 1,
										paddingVertical: 10,
										paddingHorizontal: 17,
										shadowColor: "#00000033",
										shadowOpacity: 0.2,
										shadowOffset: {
										    width: 0,
										    height: 4
										},
										shadowRadius: 4,
										elevation: 4,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 24,
										}}>
										{"VER"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<Text 
							style={{
								color: "#38207F",
								fontSize: 24,
								fontWeight: "bold",
								marginBottom: 8,
							}}>
							{"Itens"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								marginBottom: 55,
							}}>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#ECECEC75",
									borderRadius: 20,
									borderWidth: 1,
									paddingTop: 128,
									paddingBottom: 14,
									paddingHorizontal: 9,
									marginVertical: 2,
									marginRight: 13,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 3,
									elevation: 3,
								}}>
								<Text 
									style={{
										color: "#FF3F4B",
										fontSize: 24,
										marginBottom: 9,
									}}>
									{" 2 por 1"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										marginBottom: 7,
									}}>
									{"R$50,00"}
								</Text>
								<TouchableOpacity 
									style={{
										backgroundColor: "#38207F",
										borderColor: "#00000000",
										borderRadius: 16,
										borderWidth: 1,
										paddingVertical: 10,
										paddingHorizontal: 17,
										shadowColor: "#00000033",
										shadowOpacity: 0.2,
										shadowOffset: {
										    width: 0,
										    height: 4
										},
										shadowRadius: 4,
										elevation: 4,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 24,
										}}>
										{"VER"}
									</Text>
								</TouchableOpacity>
							</View>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#ECECEC75",
									borderRadius: 20,
									borderWidth: 1,
									paddingTop: 130,
									paddingBottom: 12,
									paddingHorizontal: 9,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 3,
									elevation: 3,
								}}>
								<Text 
									style={{
										color: "#FF3F4B",
										fontSize: 24,
										marginBottom: 9,
									}}>
									{" 2 por 1"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										marginBottom: 7,
									}}>
									{"R$50,00"}
								</Text>
								<TouchableOpacity 
									style={{
										backgroundColor: "#38207F",
										borderColor: "#00000000",
										borderRadius: 16,
										borderWidth: 1,
										paddingVertical: 10,
										paddingHorizontal: 17,
										shadowColor: "#00000033",
										shadowOpacity: 0.2,
										shadowOffset: {
										    width: 0,
										    height: 4
										},
										shadowRadius: 4,
										elevation: 4,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 24,
										}}>
										{"VER"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
							}}>
							<View 
								style={{
									width: 139,
									height: 244,
									backgroundColor: "#FFFFFF",
									borderColor: "#ECECEC75",
									borderRadius: 20,
									borderWidth: 1,
									marginVertical: 2,
									marginRight: 13,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 3,
									elevation: 3,
								}}>
							</View>
							<View 
								style={{
									width: 139,
									height: 244,
									backgroundColor: "#FFFFFF",
									borderColor: "#ECECEC75",
									borderRadius: 20,
									borderWidth: 1,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 3,
									elevation: 3,
								}}>
							</View>
						</View>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/8jzvo0et_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 174,
							left: 0,
							width: 151,
							height: 236,
						}}
					/>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#391E8B", "#261B47"]}
						style={{
							position: "absolute",
							bottom: 164,
							left: 0,
							width: 412,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 23,
								marginBottom: 17,
								marginLeft: 31,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/YqbjNbi1fC/e6jpmght_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 38,
									height: 38,
									marginRight: 8,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 24,
								}}>
								{": 0.00"}
							</Text>
						</View>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#FF3F4B",
								borderRadius: 16,
								paddingVertical: 1,
								marginBottom: 24,
								marginLeft: 31,
								shadowColor: "#00000040",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 3,
								    height: 3
								},
								shadowRadius: 15,
								elevation: 15,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"Pedido"}
							</Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}