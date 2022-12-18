import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/UserContext";
import Router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
