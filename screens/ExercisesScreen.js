import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";

const ExercisesScreen = () => {
  const [age, setAge] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  const filters = ["Low Mobility", "Overweight", "Fat Burn", "Beginner", "Advanced"];

  const allVideos = [
    { id: 1, title: "Chair Workout for Seniors", category: "Low Mobility", minAge: 60 },
    { id: 2, title: "Gentle Fat Burn", category: "Fat Burn", minAge: 30 },
    { id: 3, title: "Mobility Flow", category: "Low Mobility", minAge: 18 },
    { id: 4, title: "Overweight Friendly Cardio", category: "Overweight", minAge: 20 },
    { id: 5, title: "Beginner HIIT", category: "Beginner", minAge: 18 },
    { id: 6, title: "Fat Burn Blast", category: "Fat Burn", minAge: 18 },
    { id: 7, title: "Chair Stretching", category: "Low Mobility", minAge: 50 },
  ];

  useEffect(() => {
    const ageNum = parseInt(age);
    const filtered = allVideos.filter((video) => {
      const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(video.category);
      const matchesAge = !isNaN(ageNum) ? ageNum >= video.minAge : true;
      return matchesFilter && matchesAge;
    });
    setFilteredVideos(filtered);
  }, [selectedFilters, age]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎥 CardioFlash Exercises</Text>

      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Your Age:</Text>
      <TextInput
        placeholder="Enter your age"
        keyboardType="numeric"
        maxLength={3}
        value={age}
        onChangeText={setAge}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          width: "50%",
          marginBottom: 15,
          textAlign: "center",
        }}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
        {filters.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => toggleFilter(item)}
            style={[
              styles.filterButton,
              selectedFilters.includes(item) && styles.filterButtonActive
            ]}
          >
            <Text style={styles.filterText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedFilters.length > 0 || age ? (
        <View style={{ marginBottom: 10 }}>
          <Text>🔍 You selected:</Text>
          {age ? <Text>• Age: {age}</Text> : null}
          {selectedFilters.map((filter) => (
            <Text key={filter}>• {filter}</Text>
          ))}
        </View>
      ) : null}

      <ScrollView style={{ width: "100%" }}>
        {filteredVideos.map((video) => (
          <View key={video.id} style={styles.videoCard}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoCategory}>{video.category}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.premiumBox}>
        <Text style={styles.premiumText}>✨ Unlock more videos with Premium! ($5/month)</Text>
        <Text style={styles.premiumNote}>Free users can access up to 30 videos with ads.</Text>
      </View>
    </View>
  );
};

export default ExercisesScreen;
