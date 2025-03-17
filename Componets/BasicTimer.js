import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles"; // Importar estilos

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

  // Detener el temporizador
  const stopTimer = () => {
    setRunning(false);
  };

  // Reiniciar el temporizador
  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(null);
    setHours("00");
    setMinutes("00");
    setSeconds("00");
  };

  // Contar el tiempo
  useEffect(() => {
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

      {/* Contenedor en fila para etiquetas y entradas */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Hr</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            value={hours}
            onChangeText={setHours}
            editable={!running}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Min</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            value={minutes}
            onChangeText={setMinutes}
            editable={!running}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Sec</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            value={seconds}
            onChangeText={setSeconds}
            editable={!running}
          />
        </View>
      </View>

      {/* Mostrar tiempo en cuenta regresiva si está corriendo */}
      {running && <Text style={styles.timerText}>{formatTime()}</Text>}

      {/* Botones */}
      <View style={styles.buttonContainer}>
        {!running ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={stopTimer}>
            <Text style={styles.buttonText}>Detener</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasicTimer;
