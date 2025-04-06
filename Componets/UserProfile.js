import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserProfile = () => {
  // Aquí luego recibirás los datos del usuario desde la API
  const userData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    goals: "Fat Burn, Strength, Flexibility",
    phone: "+1234567890",
    weight: 70,
    height: 175,
    activityLevel: "Moderate",
    subscription: "Premium",
    subscriptionStartDate: "2023-01-01",
    subscriptionEndDate: "2024-01-01",

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 User Profile</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData.name}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{userData.age}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData.email}</Text>

        <Text style={styles.label}>Goals:</Text>
        <Text style={styles.value}>{userData.goals}</Text>

        <Text style={styles.label}>Number of Phone:</Text>
        <Text style={styles.value}>{userData.phone}</Text>

        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>{userData.weight} kg</Text>

        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>{userData.height} lbs</Text>

        <Text style={styles.label}>Activity Level:</Text>
        <Text style={styles.value}>{userData.activityLevel}</Text>

        <Text style={styles.label}>Subscription:</Text>
        <Text style={styles.value}>{userData.subscription}</Text>

        <Text style={styles.label}>Subscription Start Date:</Text>
        <Text style={styles.value}>{userData.subscriptionStartDate}</Text>
        
        <Text style={styles.label}>Subscription End Date:</Text>
        <Text style={styles.value}>{userData.subscriptionEndDate}</Text>
      </View>
    </View>
  );
};

export default UserProfile;

