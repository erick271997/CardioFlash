import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Image, SafeAreaView, View, Platform, StatusBar } from "react-native";

// Importar pantallas
import HomeScreen from "../screens/HomeScreen";
import TimersScreen from "../screens/TimersScreen";
import BasicStopwatch from "../Componets/BasicStopwatch";
import BasicTimer from "../Componets/BasicTimer";
import AdvancedTimer from "../Componets/AdvancedTimer";
import ExercisesScreen from "../screens/ExercisesScreen"; // 👈 Agregamos esta línea

const Stack = createStackNavigator();

export default function Navigation() {
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
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <View style={{ marginTop: 10, marginLeft: -10 }}>
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
                  </View>
                </TouchableOpacity>
              </SafeAreaView>
            ),
            headerLeft: () => null,
          })}
        />

        <Stack.Screen
          name="Exercises"
          component={ExercisesScreen} // 👈 Aquí se conecta
          options={{ title: "Exercises" }}
        />
        <Stack.Screen
          name="Timers"
          component={TimersScreen}
          options={{ title: "Timers" }}
        />
        <Stack.Screen
          name="BasicStopwatch"
          component={BasicStopwatch}
          options={{ title: "Basic Stopwatch" }}
        />
        <Stack.Screen
          name="BasicTimer"
          component={BasicTimer}
          options={{ title: "Basic Timer" }}
        />
        <Stack.Screen
          name="AdvancedTimer"
          component={AdvancedTimer}
          options={{ title: "Advanced Timer" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
