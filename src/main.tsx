import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { NotesProvider } from "./contexts/NotesContext";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <NotesProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NotesProvider>,
);
