import React from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
// import {show_stringify} from 'helpers/json'

import { create } from "services/user/user";

import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";

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

  tipo: "Aluno",

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

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

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
      passwordc
    } = this.state;
    const { isLoading, errors } = this.state;
    const { classes } = this.props;

    return (
        <main className={classes.layout}>
      <div className="container" autoComplete="off">
          <Paper className={classes.paper}>
        <form onSubmit={this.onSubmit}>
            <Typography variant="display2" gutterBottom color="primary">
                Cadastro de Usuário
            </Typography>
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
            label="Usuário"
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
            label="Confirmar senha"
            onChange={this.onChange}
            value={passwordc}
            error={errors.passwordc}
            type="password"

          />
          <br />

          {/* Tipo de Usuario*/}
            <FormControl component="fieldset" className={classes.formControl}>

                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="adm" control={<Radio color="primary"/>}  label="Administrador" />
                    <FormControlLabel value="especialista" control={<Radio color="primary" />} label="Especialista" />

                </RadioGroup>
            </FormControl>



            <br/>
          <Button className={classes.button} color="primary"  variant="contained" type="submit" disabled={isLoading}>
            Cadastrar
          </Button>
        </form>
        {/* {show_stringify(this.state)} */}
          </Paper>
      </div>
        </main>
    );
  }
}

UserForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(UserForm));
