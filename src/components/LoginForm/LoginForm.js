import React from "react";
//import "./styles.css";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// import {show_stringify} from 'helpers/json'

import { login } from "services/auth/auth";

import { withRouter } from "react-router-dom";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoading: false,
      errors: {}
    };
    console.log(this.state);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const { username, password } = this.state;
    const loginAttempt = await login(username, password, true);

    if (loginAttempt) {
      if (loginAttempt.statusCode !== 200) {
        // status code OK
        const { history } = this.props;
        history.push("/");
        return true;
      } else {
        await this.setState({ errors: { username: true, password: true } });
        return false;
      }
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { username, password, isLoading, errors } = this.state;
    const { classes } = this.props;

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <TextField
            id="username"
            className="input"
            name="username"
            label="Usuário"
            onChange={this.onChange}
            error={errors.username}
            value={username}
          />
          <br />
          <TextField
            id="senha"
            className="input"
            name="password"
            label="Senha"
            onChange={this.onChange}
            value={password}
            error={errors.password}
            type="password"
          />
          <br />
          <Button variant="contained" color="primary" >
        Primary
      </Button>
          
        </form>
        {/* {show_stringify(this.state)} */}
      </div>
    );
  }
}

export default withRouter(LoginForm);
