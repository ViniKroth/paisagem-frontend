import React from "react";

import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Biblioteca de Componentes

// Views
import Page from "views/Page/Page";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

// Serviços
import { listAll } from "services/user/user";

import img from "./paisagem.jpeg"

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
      <div
        style={{
          paddingTop: "100px"
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => this.redirect("/cadastroEspecie")}
          className="clickable"
        >
          Cadastrar Especie
        </Button>
      </div>
    );
  };

  unauthenticated = () => {
   
    return (
      <div
        style={{
          height: "93vh",
          backgroundImage:`url(${img})`
        }}
      >
       <Paper elevation={1}>
                <Grid container spacing={60}>
                  <Grid item xs={40}>
                  </Grid>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => this.redirect("/login")}
          className="clickable"
        >
          login
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => this.redirect("/listagemEspecie")}
          className="clickable"
        >
          Listagem de Especie
        </Button>
       
     
      </Grid>
      </Paper>
      </div>
        
    );
  };
}

export default withRouter(HomePage);
