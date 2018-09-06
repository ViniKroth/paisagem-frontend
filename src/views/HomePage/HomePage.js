import React from "react";
import "./styles.css";
import { withRouter } from "react-router-dom";

// Biblioteca de Componentes

// Views
import Page from "views/Page/Page";
import { Button, Menu, MenuItem, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Serviços
import { listAll } from "services/user/user";

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
          color="secondary"
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
          paddingTop: "100px"
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="secondary"
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
          color="secondary"
          onClick={() => this.redirect("/cadastroEspecie")}
          className="clickable"
        >
          Cadastrar Especie
        </Button>
      </div>
    );
  };
}

export default withRouter(HomePage);
