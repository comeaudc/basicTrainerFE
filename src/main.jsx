import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import AppContext from "./contexts/AppContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <AppContext>
        <Router>
          <App />
        </Router>
      </AppContext>
    </CookiesProvider>
  </StrictMode>
);
