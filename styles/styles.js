import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Estilos generales
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  // Texto de bienvenida
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  motivationText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },

  // Logo en pantalla principal
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 240,
    height: 240,
    resizeMode: "contain",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 15,
    transform: [
      { perspective: 1000 },
      { rotateX: "8deg" },
      { rotateY: "-5deg" },
      { scale: 1.05 },
    ],
  },
  headerLogo: {
    width: 220,
    height: 92,
    resizeMode: "contain",
    marginLeft: -75,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
    transform: [
      { perspective: 800 },
      { rotateY: "-4deg" },
      { scale: 1.04 },
    ],
  },

  // Sección de video
  videoPlaceholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  videoText: {
    fontSize: 18,
    color: "#555",
  },

  // Botones
  button: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 60,
    alignItems: "center",
    marginBottom: 10,
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Estilos para temporizador
  labelText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  timerContainer: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  activeTimer: {
    borderColor: "#0f0",
    borderWidth: 2,
  },
  timerText: {
    fontSize: 20,
    color: "#000",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#e0e0e0",
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  separator: {
    fontSize: 24,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  addText: {
    color: "#fff",
    fontSize: 18,
  },
  deleteButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  deleteText: {
    fontSize: 18,
    color: "#FF4444",
  },
});
