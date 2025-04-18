import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  
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

  
//modal


modalOverlay: {

  flex: 1,
  justifyContent: "flex-start",
  alignItems: "flex-end",
  padding: 20,
  backgroundColor: "rgba(143, 134, 134, 0.03)", // opcional: para oscurecer fondo
},
modalBox: {
 
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 10,
  width: 200,
  position: "absolute",
  top: 20,        // Lo bajamos un poco menos para que quede en línea con el logo
  right: 50,      // Más a la derecha aún
  zIndex: 9999,   // Asegura que esté por encima de otros elementos
  elevation: 10,  // Sombra para Android
  shadowColor: "#000",  // Sombra para iOS
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},

modalTitle: {

  fontSize: 25,//menu
  fontWeight: "bold",
  marginBottom: 10,

},
modalOption: {
 
  paddingVertical: 10,
},
modalOptionText: {
  
  fontSize: 16,
  color: "#333",
},
modalCloseText: {
  marginTop: 15,
  textAlign: "center",
  color: "#007bff",
  fontWeight: "bold",
},

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
  //BasicTimer
  timerInput: {
    backgroundColor: "#e0e0e0",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: 60,
    height: 60,
    borderRadius: 12,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
//advancedTimer
  advancedInput: {
    backgroundColor: "#f0f0f0",
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: "#aaa",
  },
  timerNameInput: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    width: "100%",
    height: 50,
  },
  
  
  separator: {
    fontSize: 24,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 15,
    flexWrap: "wrap",
    justifyContent: "center",
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

// Estilo solo para los filtros
filterContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingHorizontal: 10,
  marginBottom: 20,
},

filterButton: {
  backgroundColor: "#f0f0f0",
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: "#007bff",
  margin: 6,
  minWidth: "28%", // Esto asegura que entren 3 por fila
  alignItems: "center",
},

filterButtonActive: {
  backgroundColor: "#007bff",
  borderColor: "#007bff",
},

filterText: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
},

filterTextActive: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center",
},
// Estilo para la lista de videos

videoList: {
  width: "100%",
  paddingHorizontal: 10,
},
videoItem: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
  padding: 10,
  marginBottom: 10,
  borderRadius: 10,
  elevation: 2,
},


videoThumbnail: {
  width: 100,
  height: 70,
  borderRadius: 8,
  marginRight: 12,
  backgroundColor: "#ccc", // Placeholder hasta que pongas las imágenes
},

videoInfo: {
  flex: 1,
},

videoTitle: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#333",
  marginBottom: 4,
},

videoTags: {
  fontSize: 13,
  color: "#666",
  flexWrap: "wrap",
},

  
  

  videoCard: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  videoCategory: {
    fontSize: 14,
    color: "#666",
  },
  videoCard: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
  borderRadius: 10,
  padding: 10,
  marginBottom: 15,
  width: "100%",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
},
  premiumBox: {
    backgroundColor: "#ffe9b3",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  premiumText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#b8860b",
  },
  premiumNote: {
    fontSize: 14,
    color: "#555",
  },
  
  // Estilo para la sección de perfil


userProfileContainer: {
  flex: 1,
  padding: 20,
  backgroundColor: "#fff",
},

title: {
  fontSize: 26,
  fontWeight: "bold",
  marginBottom: 20,
  textAlign: "center",
  color: "#007bff",
},

infoBox: {
  backgroundColor: "#f2f2f2",
  padding: 15,
  borderRadius: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},

label: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#333",
  marginTop: 10,
},

value: {
  fontSize: 16,
  color: "#666",
},


loginText: {
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
},

// 🔒 Login Styles
loginContainer: {
  flex: 1,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 20,
},

loginBox: {
  width: "100%",
  maxWidth: 400,
  backgroundColor: "#f9f9f9",
  padding: 20,
  borderRadius: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4,
},

loginTitle: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 20,
  textAlign: "center",
  color: "#007bff",
},

input: {
  backgroundColor: "#e0e0e0",
  padding: 12,
  borderRadius: 8,
  fontSize: 16,
  marginBottom: 15,
  color: "#000",
  width: "100%",
},

loginButton: {
  backgroundColor: "#007bff",
  padding: 14,
  borderRadius: 8,
  alignItems: "center",
  marginBottom: 10,
},

loginButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},

createAccountText: {
  marginTop: 10,
  fontSize: 14,
  color: "#007bff",
  textAlign: "center",
  textDecorationLine: "underline",
},

// Estilos para Login y Registro
authContainer: {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  backgroundColor: "#fff",
},
authTitle: {
  fontSize: 26,
  fontWeight: "bold",
  marginBottom: 20,
  textAlign: "center",
},
input: {
  width: "100%",
  backgroundColor: "#f0f0f0",
  borderRadius: 10,
  paddingHorizontal: 15,
  paddingVertical: 12,
  fontSize: 16,
  marginBottom: 15,
  borderWidth: 1,
  borderColor: "#ccc",
},
authButton: {
  backgroundColor: "#007bff",
  paddingVertical: 14,
  borderRadius: 10,
  width: "100%",
  alignItems: "center",
  marginBottom: 20,
},
authButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},
loginText: {
  fontSize: 14,
  color: "#007bff",
  textAlign: "center",
},

forgotText: {
  color: "#007bff",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 10,
},

//chatAi
aiChatContainer: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "#fff",
  borderTopWidth: 1,
  borderColor: "#ccc",
  paddingBottom: 10,
  paddingHorizontal: 10,
},

aiChatBox: {
  maxHeight: 180,
  paddingVertical: 5,
},

aiBubbleUser: {
  alignSelf: "flex-end",
  backgroundColor: "#007bff",
  padding: 10,
  borderRadius: 10,
  marginBottom: 5,
  maxWidth: "80%",
},

aiBubbleAI: {
  alignSelf: "flex-start",
  backgroundColor: "#e0e0e0",
  padding: 10,
  borderRadius: 10,
  marginBottom: 5,
  maxWidth: "80%",
},

aiText: {
  color: "#000",
},

aiInputRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
},

aiInput: {
  flex: 1,
  backgroundColor: "#f0f0f0",
  padding: 10,
  borderRadius: 10,
  fontSize: 16,
  marginRight: 10,
},

aiSendButton: {
  backgroundColor: "#007bff",
  padding: 10,
  borderRadius: 10,
},

aiSendText: {
  color: "#fff",
  fontWeight: "bold",
},



});



