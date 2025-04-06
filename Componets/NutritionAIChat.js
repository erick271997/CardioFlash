import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";
import AuthContext from "../context/AuthContext";

const NutritionAIChat = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Simulación de respuesta AI
    const response = {
      text: generateResponse(input),
      sender: "ai",
    };
    setMessages((prev) => [...prev, response]);
    setInput("");
  };

  const generateResponse = (question) => {
    // Aquí puedes mejorar las respuestas o luego conectarlo a una IA real
    if (question.toLowerCase().includes("bajar de peso")) {
      return "Intenta mantener un déficit calórico, duerme bien y haz ejercicio moderado.";
    } else if (question.toLowerCase().includes("peso ideal")) {
      return "Tu peso ideal depende de tu altura, edad y nivel de actividad.";
    } else {
      return "¡Gracias por tu pregunta! Estoy aprendiendo, pero te puedo orientar en lo básico.";
    }
  };

  // Solo mostrar si tiene membresía
  if (!user?.subscription || user.subscription !== "Premium") {
    return null;
  }

  return (
    <View style={styles.aiChatContainer}>
      <ScrollView style={styles.aiChatBox}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={msg.sender === "user" ? styles.aiBubbleUser : styles.aiBubbleAI}
          >
            <Text style={styles.aiText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.aiInputRow}>
        <TextInput
          style={styles.aiInput}
          placeholder="Escribe tu pregunta nutricional..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.aiSendButton} onPress={handleSend}>
          <Text style={styles.aiSendText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NutritionAIChat;
