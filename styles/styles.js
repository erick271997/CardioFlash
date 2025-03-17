import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  timerText: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
