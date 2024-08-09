import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
