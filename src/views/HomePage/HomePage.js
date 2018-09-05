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
  // Uma das varias maneiras de proteger uma rota é criar uma Rota protegida e usa-la com herança. Ver ProtectedPage para entender a lógica

  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      userListAnchor: null
    };
  }

  componentDidMount() {
    this.loadUserMenuItens();
    this.showHeader();

    this.setState(() => {
      return {
        render: this.isAuthenticated().value
          ? this.authenticated()
          : this.unauthenticated()
      };
    });
  }

  userMenuHandleClick = event => {
    console.log(event);
    this.setState({ userListAnchor: event.currentTarget });
  };

  userMenuHandleClose = () => {
    this.setState({ userListAnchor: null });
  };

  loadUserMenuItens = async () => {
    let users = await listAll();
    console.log(users);
    users = users.data.map(user => {
      return {
        label: `${user.id_user}: ${user.name}`,
        value: user.id_user,
        data: user
      };
    });
    console.warn(users);
    this.setState({ userList: users });
    console.log(this.state);
  };

  authenticated = () => {
    const open = Boolean(this.state.userListAnchor);

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
