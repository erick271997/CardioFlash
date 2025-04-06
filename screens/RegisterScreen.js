// screens/RegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import styles from "../styles/styles"; // Estilos globales

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert("All fields are required");
      return;
    }

    // Aquí en el futuro se conectará con la base de datos
    console.log("Registered:", { name, email, phone, password });
    Alert.alert("Account created successfully!");

    navigation.navigate("Login"); // Luego de registrar, lleva al login
  };

  return (
    <ScrollView contentContainerStyle={styles.authContainer}>
      <Text style={styles.authTitle}>📝 Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.authButton} onPress={handleRegister}>
        <Text style={styles.authButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={{ fontWeight: "bold" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
