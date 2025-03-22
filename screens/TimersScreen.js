// screens/TimersScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const TimersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Select a Timer Option</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BasicStopwatch")}>
        <Text style={styles.buttonText}>Basic Stopwatch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BasicTimer")}>
        <Text style={styles.buttonText}>Basic Timer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdvancedTimer")}>
        <Text style={styles.buttonText}>Advanced Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimersScreen;
