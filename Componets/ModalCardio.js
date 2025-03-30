// components/ModalCardio.js
import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import styles from "../styles/styles"; // Estilos globales

const ModalCardio = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          {/* Imagen en la parte superior */}
          <Image
            source={require("../Imagen/logo.webp")}
            style={styles.modalLogo}
          />

          {/* Título */}
          <Text style={styles.modalTitle}>Unlock CardioFlash Premium</Text>

          {/* Texto */}
          <Text style={styles.modalText}>
            Enjoy 100+ exclusive videos without ads for only{" "}
            <Text style={{ fontWeight: "bold" }}>$5/month</Text>
          </Text>

          {/* Botón */}
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Upgrade Now</Text>
          </TouchableOpacity>

          {/* Opción de cerrar */}
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalCloseText}>Not now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCardio;
