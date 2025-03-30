import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "../styles/styles"; // Archivo de estilos

const ExercisesScreen = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "Fat Burn", "Overweight", "Age 50+", "Age 30 AND 40",
    "Knee Mobility", "Back Mobility", "Low Mobility",
    "Beginner", "Advanced", "Cardio", "Strength",
    "Flexibility", "Balance", "Endurance", "Core Strength",
  ];

  const videos = [
    {
      id: 1,
      title: "Low Impact Fat Burn",
      tags: ["Fat Burn", "Cardio", "Beginner"],
      image: "https://via.placeholder.com/300x180.png?text=Fat+Burn",
    },
    {
      id: 2,
      title: "Chair Workout for Seniors",
      tags: ["Age 50+", "Low Mobility", "Balance"],
      image: "https://via.placeholder.com/300x180.png?text=Senior+Workout",
    },
    {
      id: 3,
      title: "Core Strength at Home",
      tags: ["Core Strength", "Advanced", "Strength"],
      image: "https://via.placeholder.com/300x180.png?text=Core+Strength",
    },
    {
      id: 4,
      title: "Knee Mobility Stretch",
      tags: ["Knee Mobility", "Flexibility", "Beginner"],
      image: "https://via.placeholder.com/300x180.png?text=Knee+Mobility",
    },
    {
      id: 5,
      title: "Back Mobility Flow",
      tags: ["Back Mobility", "Flexibility", "Age 30 AND 40"],
      image: "https://via.placeholder.com/300x180.png?text=Back+Mobility",
    },
    {
      id: 6,
      title: "Endurance Cardio Blast",
      tags: ["Endurance", "Cardio", "Advanced"],
      image: "https://via.placeholder.com/300x180.png?text=Endurance+Cardio",
    },
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const filteredVideos = videos.filter((video) =>
    selectedFilters.length === 0 ? true : selectedFilters.some(tag => video.tags.includes(tag))
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Welcome to CardioFlash Exercises </Text>

      {/* 📺 Sección de video temporal */}
      <View style={styles.videoPlaceholder}>
        <Text style={styles.videoText}>Running video coming soon...</Text>
      </View>

      <Text style={styles.labelText}>Select your goals:</Text>

      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => toggleFilter(filter)}
            style={[
              styles.filterButton,
              selectedFilters.includes(filter) && styles.filterButtonActive,
            ]}
          >
            <Text style={selectedFilters.includes(filter) ? styles.filterTextActive : styles.filterText}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.labelText}>Recommended Videos:</Text>

      <View style={styles.videoList}>
        {filteredVideos.map((video) => (
          <View key={video.id} style={styles.videoItem}>
            <Image source={{ uri: video.image }} style={styles.videoImage} />
            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <Text style={styles.videoTags}>
                {video.tags.map((tag) => (
                  <Text
                    key={tag}
                    style={{
                      fontWeight: selectedFilters.includes(tag) ? "bold" : "normal",
                      color: "#333",
                    }}
                  >
                    {tag}{" "}
                  </Text>
                ))}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ExercisesScreen;
