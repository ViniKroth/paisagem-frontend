import React from "react";
import logo from "./logo_ages.svg";
import "./styles.css";
import { withRouter } from "react-router-dom";
// import {show_stringify} from 'helpers/json'

// Serviços
import { validToken, logout } from "services/auth/auth";

// Biblioteca de Componentes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: null,
      render: null
    };
    //console.log('Show Header?', props.display)
  }

  componentWillReceiveProps(props) {
    const { display } = this.props;
    if (props.display !== display) {
      this.setState({ display: props.display });
    }
  }

  componentWillMount() {
    this.renderHeaderButtons();
  }

  redirect = path => {
    const { history } = this.props;
    history.push(path);
  };

  renderLogin = () => {
    return (
      <Button
        color="inherit"
        id="loginBtn" // Colocar ids diferentes para os automatores de software poderem encontrar esse elemento da pagina. Agradecimentos Pasquinha
        onClick={() => {
          this.redirect("/login");
        }}
      >
        Logar-se
      </Button>
    );
  };

  renderLogout = () => {
    return (
      <Button
        color="inherit"
        id="logoutBtn"
        onClick={() => {
          logout();
          this.setState({ render: this.renderLogin() });
        }}
      >
        Deslogar
      </Button>
    );
  };

  renderHeaderButtons = async () => {
    try {
      const isAuthenticated = await validToken();

      if (!isAuthenticated) {
        await this.setState({ render: this.renderLogin() });
      } else {
        await this.setState({ render: this.renderLogout() });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { display, classes } = this.props;
    const { render } = this.state;
    if (display) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <img
                className={classes.menuButton + " App-logo"}
                src={logo}
                alt="logo"
                onClick={() => {
                  this.redirect("/");
                }}
              />
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Paisagem
              </Typography>
              {render}
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default withStyles(styles)(withRouter(Header));
