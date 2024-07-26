import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/Apicontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
