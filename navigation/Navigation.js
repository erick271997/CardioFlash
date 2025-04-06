import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
} from "react-native";

// Importar pantallas
import HomeScreen from "../screens/HomeScreen";
import TimersScreen from "../screens/TimersScreen";
import BasicStopwatch from "../Componets/BasicStopwatch";
import BasicTimer from "../Componets/BasicTimer";
import AdvancedTimer from "../Componets/AdvancedTimer";
import ExercisesScreen from "../screens/ExercisesScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen"; 

// Importa el modal
import ModalMenu from "../Componets/ModalMenu";
import NutritionAIChat from "../Componets/NutritionAIChat";

const Stack = createStackNavigator();

export default function Navigation() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
        height:
          Platform.OS === "android"
            ? 100 + StatusBar.currentHeight
            : 100,
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
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
                style={{ marginLeft: 250 }}
              >
                <Text style={{ fontSize: 26 }}>☰</Text>
              </TouchableOpacity>
            </View>

            {/* Modal del Menú */}
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

    {/* Otras pantallas */}
    <Stack.Screen name="Exercises" component={ExercisesScreen} />
    <Stack.Screen name="Timers" component={TimersScreen} />
    <Stack.Screen name="BasicStopwatch" component={BasicStopwatch} />
    <Stack.Screen name="BasicTimer" component={BasicTimer} />
    <Stack.Screen name="AdvancedTimer" component={AdvancedTimer} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>

  {/* ✅ Coloca aquí el Chat de IA fuera del Navigator pero dentro del NavigationContainer */}
  <NutritionAIChat />
</NavigationContainer>
  );
}
