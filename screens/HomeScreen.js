import React from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import styles from '../styles/styles'; // Importar los estilos

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* Logo en el encabezado ya está en Navigation.js */}

      {/* Mensaje de bienvenida */}
      <Text style={styles.welcomeText}>Welcome to CardioFlash</Text>
      <Text style={styles.motivationText}>
        "No matter your age, gender, or fitness level – every step counts!"
      </Text>

      {/* Sección de video (fondo gris) */}
      <View style={styles.videoPlaceholder}>
        <Text style={styles.videoText}>Video Coming Soon</Text>
      </View>

      {/* Botones de navegación */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Exercises")}>
        <Text style={styles.buttonText}>Go to Exercises</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Timers")}>
        <Text style={styles.buttonText}>Go to Timers</Text>
      </TouchableOpacity>


      {/* Modal en la parte derecha (aún sin contenido) */}
      <Modal transparent={true} visible={false}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Modal Content Here</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
