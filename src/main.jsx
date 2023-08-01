import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextWrappeer } from "./context/elementTop.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextWrappeer>
      <App />
    </ContextWrappeer>
  </BrowserRouter>
);
