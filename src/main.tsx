import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RoutesApplication } from "./routes";
import "./styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApplication />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
