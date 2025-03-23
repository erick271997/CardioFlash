import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import styles from "../styles/styles";

const AdvancedTimer = () => {
  const [timers, setTimers] = useState([
    {
      id: 1,
      hours: 0,
      minutes: 0,
      seconds: 30,
      original: { hours: 0, minutes: 0, seconds: 30 },
      paused: false,
    },
    {
      id: 2,
      hours: 0,
      minutes: 0,
      seconds: 20,
      original: { hours: 0, minutes: 0, seconds: 20 },
      paused: false,
    }
  ]);
  const [running, setRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimers((prevTimers) => {
          const newTimers = [...prevTimers];
          const current = newTimers[currentIndex];

          if (current.paused) return newTimers;

          if (current.seconds > 0) {
            current.seconds -= 1;
          } else if (current.minutes > 0) {
            current.minutes -= 1;
            current.seconds = 59;
          } else if (current.hours > 0) {
            current.hours -= 1;
            current.minutes = 59;
            current.seconds = 59;
          } else {
            // Reiniciar el temporizador actual
            current.hours = current.original.hours;
            current.minutes = current.original.minutes;
            current.seconds = current.original.seconds;

            // Pasar al siguiente temporizador
            setCurrentIndex((prev) => (prev + 1) % newTimers.length);
          }

          return newTimers;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, currentIndex]);

  const addTimer = () => {
    const newTimer = {
      id: Date.now(),
      hours: 0,
      minutes: 0,
      seconds: 0,
      original: { hours: 0, minutes: 0, seconds: 0 },
      paused: false,
    };
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (id) => {
    const filtered = timers.filter((t) => t.id !== id);
    setTimers(filtered);
    if (currentIndex >= filtered.length) {
      setCurrentIndex(0);
    }
  };

  const updateTimer = (id, field, value) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id
          ? {
              ...timer,
              [field]: parseInt(value) || 0,
              original: { ...timer.original, [field]: parseInt(value) || 0 },
            }
          : timer
      )
    );
  };

  const togglePause = (id) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, paused: !timer.paused } : timer
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>🔥 Temporizador HIIT - Ciclo Infinito</Text>

      <ScrollView style={{ maxHeight: 300, width: "100%" }}>
        {timers.map((timer, index) => (
          <View
            key={timer.id}
            style={[
              styles.timerContainer,
              index === currentIndex && styles.activeTimer,
            ]}
          >
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeTimer(timer.id)}
            >
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>

            <Text style={styles.timerText}>Timer {index + 1}</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={timer.hours.toString()}
                onChangeText={(val) => updateTimer(timer.id, "hours", val)}
              />
              <Text style={styles.separator}>:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={timer.minutes.toString()}
                onChangeText={(val) => updateTimer(timer.id, "minutes", val)}
              />
              <Text style={styles.separator}>:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={timer.seconds.toString()}
                onChangeText={(val) => updateTimer(timer.id, "seconds", val)}
              />
            </View>

            <TouchableOpacity
              style={styles.pauseButton}
              onPress={() => togglePause(timer.id)}
            >
              <Text style={styles.pauseText}>
                {timer.paused ? "▶️ Reanudar" : "⏸️ Pausar"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={addTimer}>
        <Text style={styles.addText}>➕ Add Timer</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setRunning(!running)}>
          <Text style={styles.buttonText}>
            {running ? "⏹️ Stop" : "▶️ Start"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvancedTimer;
