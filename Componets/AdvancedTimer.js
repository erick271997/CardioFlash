import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import  styles  from "../styles/styles";

const AdvancedTimer = ({ navigation }) => {
  const [tiempo, setTiempo] = useState(120);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (corriendo && tiempo > 0) {
      intervalo = setInterval(() => setTiempo((t) => t - 1), 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [corriendo, tiempo]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Temporizador Avanzado</Text>
      <Text style={styles.timerText}>{tiempo} s</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCorriendo(!corriendo)}>
          <Text style={styles.buttonText}>{corriendo ? "Pausar" : "Iniciar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setTiempo(120)}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvancedTimer;
