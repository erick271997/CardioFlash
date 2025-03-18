import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles"; // Importar los estilos

const BasicStopwatch = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (corriendo) {
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => {
          if (prevSegundos === 59) {
            setMinutos((prevMinutos) => {
              if (prevMinutos === 59) {
                setHoras((prevHoras) => prevHoras + 1);
                return 0;
              }
              return prevMinutos + 1;
            });
            return 0;
          }
          return prevSegundos + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [corriendo]);

  const formatearNumero = (num) => (num < 10 ? `0${num}` : num); // Asegura formato 00 00 00

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Chronometer</Text>
      
      {/* Timer en una sola línea */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {formatearNumero(horas)} : {formatearNumero(minutos)} : {formatearNumero(segundos)}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCorriendo(!corriendo)}>
          <Text style={styles.buttonText}>{corriendo ? "Pausar" : "Iniciar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setHoras(0);
            setMinutos(0);
            setSegundos(0);
            setCorriendo(false);
          }}
        >
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasicStopwatch;
