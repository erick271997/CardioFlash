// screens/ForgotPasswordScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const ForgotPasswordScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleResetPassword = () => {
    // Aquí luego se conectará a la base de datos o API
    console.log("Solicitando restablecimiento para:", emailOrPhone);
    alert("Si este dato está registrado, recibirás un enlace para restablecer tu contraseña.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Recuperar contraseña</Text>
      <Text style={styles.labelText}>
        Ingresa tu correo o número de teléfono registrado
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Correo o Teléfono"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar enlace</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
