// navigation/Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"; // Adjust the path as needed
import BasicStopwatch from "../Componets/BasicStopwatch";
import BasicTimer from "../Componets/BasicTimer";
import AdvancedTimer from "../Componets/AdvancedTimer";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BasicStopwatch" component={BasicStopwatch} />
        <Stack.Screen name="BasicTimer" component={BasicTimer} />
        <Stack.Screen name="AdvancedTimer" component={AdvancedTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
