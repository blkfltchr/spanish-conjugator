import React from "react";
import ReactDOM from "react-dom";
import CustomBrowserRouter from "./Context/CustomBrowserRouter";
import App from "./App";
import Store from "./Context/Store";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Store>
    <CustomBrowserRouter>
      <App />
    </CustomBrowserRouter>
  </Store>,
  document.getElementById("root")
);
