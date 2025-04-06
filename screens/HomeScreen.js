import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/styles";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    
    <View style={styles.container}>
      {/* Header con logo y menú */}
      
      <View >
      
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.menuIcon}>
  
</TouchableOpacity>

      </View>

      <Text style={styles.welcomeText}>Welcome to CardioFlash</Text>
      <Text style={styles.motivationText}>
        "No matter your age, gender, or fitness level – every step counts!"
      </Text>

      <View style={styles.videoPlaceholder}>
        <Text style={styles.videoText}>Video Coming Soon</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Exercises")}>
        <Text style={styles.buttonText}>Go to Exercises</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Timers")}>
        <Text style={styles.buttonText}>Go to Timers</Text>
      </TouchableOpacity>

      {!isLoggedIn && (
  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
  <Text style={styles.loginText}>🔐 Create Account / Login</Text>
</TouchableOpacity>
)}

    </View>
  );
};

export default HomeScreen;
