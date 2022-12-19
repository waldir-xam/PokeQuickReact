import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [datosCon, setDatosCon] = useState(false);

  function mostrar(dato) {
    setDatos(dato);
  }

  return (
    <AuthContext.Provider value={{ datosCon, mostrar, setDatosCon }}>
      {children}
    </AuthContext.Provider>
  );
};
