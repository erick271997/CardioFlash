import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Image, SafeAreaView, View, Text, Platform, StatusBar } from "react-native";

// Importar pantallas
import HomeScreen from "../screens/HomeScreen";
import TimersScreen from "../screens/TimersScreen";
import BasicStopwatch from "../Componets/BasicStopwatch";
import BasicTimer from "../Componets/BasicTimer";
import AdvancedTimer from "../Componets/AdvancedTimer";
import ExercisesScreen from "../screens/ExercisesScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen"; 


// Importa el modal
import ModalMenu from "../Componets/ModalMenu";

const Stack = createStackNavigator();

export default function Navigation() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            height: Platform.OS === "android" ? 100 + StatusBar.currentHeight : 100,
          },
          headerTintColor: "#000",
          headerTitleAlign: "left",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <SafeAreaView>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* Logo */}
                  <TouchableOpacity>
                    <Image
                      source={require("../Imagen/logo.webp")}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 40,
                        resizeMode: "cover",
                        borderWidth: 2,
                        borderColor: "#007bff",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 6,
                      }}
                    />
                  </TouchableOpacity>
          
                  {/* Botón ☰ */}
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ marginLeft: 250 }}>
                    <Text style={{ fontSize: 26 }}>☰</Text>
                  </TouchableOpacity>
                </View>
          
             
                <ModalMenu
                  visible={modalVisible}
                  onClose={() => setModalVisible(false)}
                  isLoggedIn={true}
                  navigation={navigation} 
                />
              </SafeAreaView>
            ),
            headerLeft: () => null,
          })}
        />          

        <Stack.Screen name="Exercises" component={ExercisesScreen} options={{ title: "Exercises" }} />
        <Stack.Screen name="Timers" component={TimersScreen} options={{ title: "Timers" }} />
        <Stack.Screen name="BasicStopwatch" component={BasicStopwatch} options={{ title: "Basic Stopwatch" }} />
        <Stack.Screen name="BasicTimer" component={BasicTimer} options={{ title: "Basic Timer" }} />
        <Stack.Screen name="AdvancedTimer" component={AdvancedTimer} options={{ title: "Advanced Timer" }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Create Account" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
