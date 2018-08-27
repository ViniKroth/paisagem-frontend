// React Imports
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "registerServiceWorker";

// Style/CSS Imports
import CssBaseline from "@material-ui/core/CssBaseline";
import "index.css";

// Route Imports
import { BrowserRouter } from "react-router-dom";
import App from "boot";

// Theme Imports
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors/";

const theme = createMuiTheme({
  palette: {
    //Utilizando a cor verde como primaria, porém um pouco mais escura.
    primary: {
      light: colors.green[500],
      main: colors.green[700],
      dark: colors.green[900]
    },
    secondary: colors.green,
    error: colors.red,
    type: "light"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
