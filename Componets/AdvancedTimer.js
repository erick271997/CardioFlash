import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { styles } from "../styles/styles";

const AdvancedTimer = () => {
  const [timers, setTimers] = useState([
    { id: 1, hours: 0, minutes: 2, seconds: 0, original: { minutes: 2, seconds: 0 }, paused: false },
    { id: 2, hours: 0, minutes: 0, seconds: 30, original: { minutes: 0, seconds: 30 }, paused: false }
  ]);
  const [running, setRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimers((prevTimers) => {
          const newTimers = [...prevTimers];

          if (newTimers[currentIndex].paused) return newTimers; // Si está pausado, no hace nada

          if (newTimers[currentIndex].seconds > 0) {
            newTimers[currentIndex].seconds -= 1;
          } else if (newTimers[currentIndex].minutes > 0) {
            newTimers[currentIndex].minutes -= 1;
            newTimers[currentIndex].seconds = 59;
          } else if (newTimers[currentIndex].hours > 0) {
            newTimers[currentIndex].hours -= 1;
            newTimers[currentIndex].minutes = 59;
            newTimers[currentIndex].seconds = 59;
          } else {
            // Restaurar tiempo original
            newTimers[currentIndex] = {
              ...newTimers[currentIndex],
              minutes: newTimers[currentIndex].original.minutes,
              seconds: newTimers[currentIndex].original.seconds
            };

            // Pasar al siguiente temporizador (si es el último, vuelve al primero)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newTimers.length);
          }

          return newTimers;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, currentIndex, timers]);

  // Agregar un nuevo temporizador
  const addTimer = () => {
    setTimers([
      ...timers,
      {
        id: Date.now(),
        hours: 0,
        minutes: 0,
        seconds: 0,
        original: { minutes: 0, seconds: 0 },
        paused: false
      }
    ]);
  };

  // Eliminar un temporizador
  const removeTimer = (id) => {
    const newTimers = timers.filter((timer) => timer.id !== id);
    setTimers(newTimers);
    if (currentIndex >= newTimers.length) {
      setCurrentIndex(0);
    }
  };

  // Actualizar tiempo de un temporizador
  const updateTimer = (id, field, value) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id
          ? {
              ...timer,
              [field]: parseInt(value) || 0,
              original: { ...timer.original, [field]: parseInt(value) || 0 }
            }
          : timer
      )
    );
  };

  // Pausar/Reanudar temporizador individual
  const togglePause = (id) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id ? { ...timer, paused: !timer.paused } : timer
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>🔥 Temporizador HIIT - Ciclo Infinito</Text>

      <ScrollView style={{ maxHeight: 300, width: "100%" }}>
        {timers.map((timer, index) => (
          <View key={timer.id} style={[styles.timerContainer, currentIndex === index && styles.activeTimer]}>
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeTimer(timer.id)}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>Timer {index + 1}</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={timer.hours.toString()}
                onChangeText={(value) => updateTimer(timer.id, "hours", value)}
              />
              <Text style={styles.separator}>:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={timer.minutes.toString()}
                onChangeText={(value) => updateTimer(timer.id, "minutes", value)}
              />
              <Text style={styles.separator}>:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={timer.seconds.toString()}
                onChangeText={(value) => updateTimer(timer.id, "seconds", value)}
              />
            </View>

            {/* ⏯ Botón de pausa/reanudar para cada temporizador */}
            <TouchableOpacity style={styles.pauseButton} onPress={() => togglePause(timer.id)}>
              <Text style={styles.pauseText}>{timer.paused ? "▶️ Reanudar" : "⏸️ Pausar"}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={addTimer}>
        <Text style={styles.addText}>➕ Add Timer</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setRunning(!running)}>
          <Text style={styles.buttonText}>{running ? "⏹️ Detener" : "▶️ Iniciar"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvancedTimer;
