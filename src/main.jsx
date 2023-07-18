import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextWrappeer } from "./context/elementTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ContextWrappeer>
      <App />
    </ContextWrappeer>
  </>
);

// "react-images": "^1.2.0-beta.7",
// "react-photo-gallery": "^8.0.0",
