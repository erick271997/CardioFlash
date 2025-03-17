import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles"; // Importar los estilos

const HomeScreen = ({ navigation }) => {
  console.log(styles);
  return (
    

    <View style={styles.container}>
      <Text style={styles.labelText}>Selecciona una opción:</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BasicStopwatch")}>
        <Text style={styles.buttonText}>Cronómetro Básico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BasicTimer")}>
        <Text style={styles.buttonText}>Temporizador Básico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdvancedTimer")}>
        <Text style={styles.buttonText}>Temporizador Avanzado</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default HomeScreen;
