import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./components/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter basename="/WebDevKurs">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
