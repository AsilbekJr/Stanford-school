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
