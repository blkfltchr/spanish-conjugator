import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
