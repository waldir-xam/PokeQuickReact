import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { AuthProvider } from "./context/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
