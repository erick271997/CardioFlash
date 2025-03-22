import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles"; // Importar estilos

const BasicTimer = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [timeLeft, setTimeLeft] = useState(null);
  const [running, setRunning] = useState(false);

  // Iniciar el temporizador
  const startTimer = () => {
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setRunning(true);
    }
  };

  // Contar el tiempo
  React.useEffect(() => {
    if (timeLeft === 0) {
      setRunning(false);
    } else if (running && timeLeft !== null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, running]);

  // Convertir los segundos a formato HH:MM:SS
  const formatTime = () => {
    const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const s = String(timeLeft % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temporizador Básico</Text>

      {/* Encabezado Hr Min Sec */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Hr</Text>
        <Text style={styles.label}>Min</Text>
        <Text style={styles.label}>Sec</Text>
      </View>

      {/* Campos de entrada */}
      {!running ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            value={hours}
            onChangeText={setHours}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            value={minutes}
            onChangeText={setMinutes}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            value={seconds}
            onChangeText={setSeconds}
          />
        </View>
      ) : (
        <Text style={styles.timerText}>{formatTime()}</Text>
      )}

      {/* Botón de inicio */}
      {!running && (
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BasicTimer;
