import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppRouter from "./routes/route.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  
    <AppRouter/>
);
