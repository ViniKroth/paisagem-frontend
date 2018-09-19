import React from "react";

import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Biblioteca de Componentes

// Views
import Page from "views/Page/Page";

import "./styles.css";

import img from "./paisagem.jpeg";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3
  },
  input: {
    display: "none"
  },

  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3
    }
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class HomePage extends Page {
  authenticated = () => {
    return (
      <React.Fragment>
        <div
          style={{
            paddingTop: "100px"
          }}
        />
      </React.Fragment>
    );
  };

  unauthenticated = () => {
    return (
      <React.Fragment>
        <div
          className="blur-bgimage"
          style={{
            height: "93vh",
            backgroundImage: `url(${img})`
          }}
        />
      </React.Fragment>
    );
  };
}

export default withRouter(HomePage);
