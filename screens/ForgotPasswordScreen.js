import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    // Aquí luego conectamos con la API para enviar el correo de recuperación
    alert("Password reset instructions will be sent to: " + email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Forgot Password</Text>
      <Text style={styles.labelText}>Enter your email or phone number:</Text>

      <TextInput
        style={styles.input}
        placeholder="example@email.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Send Reset Instructions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
