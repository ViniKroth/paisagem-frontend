import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import registerServiceWorker from "registerServiceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import App from "boot";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
