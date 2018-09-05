import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";

import DadosBasicosForm from "components/CadastroEspecie/DadosBasicosForm.js";
import PotenciaisForm from "components/CadastroEspecie/PotenciaisForm.js";
import ImageForm from "components/CadastroEspecie/ImageForm.js";

import { create } from "services/especies/especies";

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
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["Dados", "Potencial", "Imagens"];

class CadastroEspecie extends Page {
  constructor() {
    super();
    this.state = {
      step: 0,
      especie: {}
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToBack = this.goToBack.bind(this);
  }

  componentDidMount = () => {
    this.showHeader();
    this.renderAuthentication();
  };

  getStep(step) {
    switch (step) {
      case 0:
        return (
          <DadosBasicosForm
            key="Dados"
            onSubmit={this.goToNext}
            nomeCientifico={this.state.especie.nomeCientifico}
            familia={this.state.especie.familia}
            outono={this.state.especie.FloracaoOutono}
            verao={this.state.especie.FloracaoVerao}
            inverno={this.state.especie.FloracaoInverno}
            primavera={this.state.especie.FloracaoPrimavera}
            onChangenomeCientifico={this.handleChange("nomeCientifico")}
            onChangeFamilia={this.handleChange("familia")}
            onChangeFolhagem={this.handleChange("folhagem")}
            onChangeOrigem={this.handleChange("origem")}
            onChangePorte={this.handleChange("porte")}
            onChangeOutono={this.handleChangeFloracao("FloracaoOutono")}
            onChangeVerao={this.handleChangeFloracao("FloracaoVerao")}
            onChangeInverno={this.handleChangeFloracao("FloracaoInverno")}
            onChangePrimavera={this.handleChangeFloracao("FloracaoPrimavera")}
          />
        );
      case 1:
        return (
          <PotenciaisForm
            key="Potenciais"
            onSubmit={this.goToNext}
            onBack={this.goToBack}
            onChangenomeCientifico={this.handleChange("nomeCientifico")}
            onChangePotencialArq={this.handleChange("potencialarq")}
            onChangePotencialPaisag={this.handleChange("potencialpaisag")}
          />
        );
      case 2:
        return (
          <ImageForm
            key="ImgUpLoad"
            onBack={this.goToBack}
            onSubmit={this.goToNext}
          />
        );
      case 3: {
        console.log(this.state);
      }
    }
  }

  async goToNext() {
    const { step } = this.state;
    if (step !== 2) {
      //Adicionou o this.renderAuthentication pq triamos probçema mudando de passo
      this.setState({ step: step + 1 }, () => this.renderAuthentication());
    } else {
      console.log(this.state);
      var result = await create(this.state.especie);

      console.log(result);
      //alert("Cadastrado com Sucesso!");
    }
  }

  handleChangeFloracao = name => event => {
    var especie = this.state.especie;
    especie[name] = event.target.checked;
    this.setState({ especie }, () => this.renderAuthentication());
    // this.setState({ [name]: event.target.checked });
  };

  goToBack() {
    const { step } = this.state;
    if (step !== 0) {
      //Adicionou o this.renderAuthentication pq triamos probçema mudando de passo
      this.setState({ step: step - 1 }, () => this.renderAuthentication());
    }
  }

  handleChange = campo => event => {
    var especie = this.state.especie;
    especie[campo] = event.target.value;
    return this.setState({ especie });
  };

  //Alterando para Authenticated pra manter o padrão do resto do sistema.
  authenticated = () => {
    const { classes } = this.props;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center">
            Cadastro de Espécie
          </Typography>
          <Stepper activeStep={this.state.step} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {this.getStep(this.state.step)}
        </Paper>
      </main>
    );
  };
}

CadastroEspecie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CadastroEspecie);
