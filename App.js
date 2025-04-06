import React from "react";
import Navigation from "./navigation/Navigation"; // Importar navegación
import { AuthProvider } from "./context/AuthContext"; // Importar contexto de autenticación

export default function App() {
  return (

    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
  
}