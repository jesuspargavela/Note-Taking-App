import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { NotesProvider } from "./contexts/NotesContext";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <NotesProvider>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </NotesProvider>,
);
