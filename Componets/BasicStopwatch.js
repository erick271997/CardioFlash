import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles  from "../styles/styles"; // Importar los estilos

const BasicStopwatch = ({ navigation }) => {
  const [segundos, setSegundos] = useState(0);
  const [milisegundos, setMilisegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (corriendo) {
      intervalo = setInterval(() => {
        setMilisegundos((prev) => {
          if (prev === 99) {
            setSegundos((seg) => seg + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 10);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [corriendo]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Cronómetro</Text>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{segundos}:</Text>
        <Text style={styles.timerText}>{milisegundos}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCorriendo(!corriendo)}>
          <Text style={styles.buttonText}>{corriendo ? "Detener" : "Iniciar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { setSegundos(0); setMilisegundos(0); }}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasicStopwatch;
