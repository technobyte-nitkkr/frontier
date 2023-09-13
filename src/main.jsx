import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "swiper/css/bundle";

import axios from "axios";

axios.defaults.baseURL =
  "https://us-central1-technobyte-87928.cloudfunctions.net/api2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
