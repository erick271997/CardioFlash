import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  labelText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  timerContainer: {
    backgroundColor: "#222",
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
    color: "#fff",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  separator: {
    fontSize: 24,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
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
