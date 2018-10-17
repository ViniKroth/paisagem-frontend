import React from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// import {show_stringify} from 'helpers/json'

import { create } from "services/user/user";

import { withRouter } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 8
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
  },

  typography: {}
});

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",

  type: "Aluno",
  status: "Ativo",
  matricula: "",
  gitlab: "",

  isLoading: false,
  errors: {}
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      // Workaround Firefox dando autocomplete no form com dados de login, procurar forma de escutar ao evento de autofill e impedi-lo de acontecer
      this.setState(initialState);
    }, 500);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    let user = { ...this.state };
    delete user.isLoading;
    delete user.errors;

    console.log(user);
    create(user, (error, data) => {
      if (error) {
        this.setState({ errors: {} });
        console.error(`Error creating user: ${JSON.stringify(error)}`);
        console.log({ [error.statusDesc.path]: true });
        return false;
      } else {
        console.log(`Created user succesfully: ${JSON.stringify(data)}`);
        return true;
      }
    });
    this.setState({
      isLoading: false
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {
      name,
      email,
      username,
      password,
      tipo
    } = this.state;
    const { isLoading, errors } = this.state;

    return (
      <div className="container" autoComplete="off">
        <form onSubmit={this.onSubmit}>
          <h1>Cadastro de Usuário</h1>
          {/* Nome */}
          <TextField
            className="input"
            name="name"
            label="Nome"
            onChange={this.onChange}
            error={errors.name}
            value={name}
          />
          <br />

          {/* Email */}
          <TextField
            className="input"
            name="email"
            label="Email"
            onChange={this.onChange}
            error={errors.email}
            value={email}
          />
          <br />

          {/* Username */}
          <TextField
            className="input"
            name="username"
            label="Login"
            onChange={this.onChange}
            value={username}
            error={errors.username}
            type="username"
          />
          <br />

          {/* Senha */}
          <TextField
            className="input"
            name="password"
            label="Senha"
            onChange={this.onChange}
            value={password}
            error={errors.password}
            type="password"
          />
          <br />

          {/* Senha */}
          <TextField
            className="input"
            name="password"
            label="Senha"
            onChange={this.onChange}
            value={password}
            error={errors.password}
            type="password"
          />
          <br />
          {/* Tipo de Usuario*/}
          <TextField
            className="input"
            name="tipo"
            label="Tipo"
            onChange={this.onChange}
            value={tipo}
            error={errors.tipo}
          />
          <br />

          <Button className="submitBtn" type="submit" disabled={isLoading}>
            Cadastrar
          </Button>
        </form>
        {/* {show_stringify(this.state)} */}
      </div>
    );
  }
}

export default withRouter(UserForm);
