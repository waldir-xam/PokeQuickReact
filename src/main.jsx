import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { AuthProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router />
  </AuthProvider>
);
