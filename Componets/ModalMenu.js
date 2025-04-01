import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/styles";

const ModalMenu = ({ visible, onClose, isLoggedIn }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalBox, { right: 10 }]}> {/* << AJUSTE AQUÍ */}
          <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}></TouchableOpacity>
          <Text style={styles.modalTitle}>Menu</Text>

          {isLoggedIn ? (
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.modalOptionText}>👤 Profile</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.modalOptionText}>🔐 Log In / Sign Up</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.modalOption}>
            <Text style={styles.modalOptionText}>💼 Subscription Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <Text style={styles.modalOptionText}>📜 Terms & Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <Text style={styles.modalOptionText}>🆘 Support / Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <Text style={styles.modalOptionText}>🌐 Language (soon)</Text>
          </TouchableOpacity>

          {isLoggedIn && (
            <TouchableOpacity style={styles.modalOption}>
              <Text style={[styles.modalOptionText, { color: "#ff4444" }]}>
                🚪 Log Out
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMenu;
