import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";
//import Stepper from "@material-ui/core/Stepper";
//import Step from "@material-ui/core/Step";
//import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";

import FamiliaForm from "components/CadastroFamilia/FamiliaForm.js";

import { create } from "services/familia/familia";

const styles = theme => ({
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
  /*stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },*/
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class CadastroFamilia extends Page {
  constructor() {
    super();
    this.state = {
      familia: {
        nome : '',
        descricao : ''
    
      }
               
    };
    this.end = this.end.bind(this);

  }

  handleChange = campo => event => {
    var familia = this.state.familia;
    familia[campo] = event.target.value;
    return this.setState({ familia });
  };

  async end() {
      var familia = Object.assign({}, this.state.familia);

      var result = await create(this.state.familia);

      console.log(result);
    }

  //Alterando para Authenticated pra manter o padrão do resto do sistema.
  authenticated = () => {
    const { classes } = this.props;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center">
            Cadastro de Familia
          </Typography>
          <FamiliaForm
            key="Familias"
            onSubmit={this.end}
            onChangeNome={this.handleChange("nome")}
            onChangeDescricao={this.handleChange("descricao")}
          />
        </Paper>
      </main>
    );
  };
}

CadastroFamilia.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CadastroFamilia);
