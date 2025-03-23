import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Image, Platform, StatusBar } from "react-native";

// Pantallas
import HomeScreen from "../screens/HomeScreen";
import TimersScreen from "../screens/TimersScreen";
import BasicStopwatch from "../Componets/BasicStopwatch";
import BasicTimer from "../Componets/BasicTimer";
import AdvancedTimer from "../Componets/AdvancedTimer";

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
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                  source={require("../Imagen/logo.webp")}
                  style={{
                    width: 220,
                    height: 92,
                    resizeMode: "contain",
                    marginLeft: -75,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 10,
                    transform: [{ scale: 1.05 }, { rotateX: "3deg" }],
                  }}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => null,
          })}
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
