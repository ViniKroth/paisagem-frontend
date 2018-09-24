import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
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

class CadastroIndividuo extends Page {
  constructor(props) {
    super(props);
    this.state = {
      imagens: [],
      localizacao: null,
      comentario: null
    }             
  }

  handleChange = event => {
    return this.setState({ [event.target.name]:event.target.value });
  };

  handleChangeImage = imgState => {
    var especie = this.state.especie;
    especie["image"] = imgState;
    return this.setState({ especie });
  };

//Nomes populares
  handleNomePopularChange = (idx) => (evt) => {
    var especie = this.state.especie;
    const nomesPopulares = this.state.especie.nomePopular.map((nomePop, sidx) => {
      if (idx !== sidx) return nomePop;
      return { ...nomePop, name: evt.target.value };
    });
    especie["nomePopular"] = nomesPopulares;
    this.setState({ especie });
  }
  
  handleAddNomePopular = () => {
    var especie = this.state.especie;
    especie["nomePopular"] = this.state.especie.nomePopular.concat([{ name: '' }]) ;
    this.setState({ especie });
    console.log(this.state);
  }
  
  handleRemoveNomePopular = (idx) => () => {
    var especie = this.state.especie;
    especie["nomePopular"] =this.state.especie.nomePopular.filter((s, sidx) => idx !== sidx);
    this.setState({ especie  });
  }

///
 //Função acionada quando clicado no upload
 handleSubmitImage(e) {
  e.preventDefault();
  //Aqui vai ser feito o upload para a api e depois inserido no banco
  this.setState({qntImagensError : false})
      var imageUploadAtual = this.state.imageUpload //Pega o status atual
      imageUploadAtual.push(this.state.file) //Na parte do file tanto faz usar o stateAtual ou o this.state

      this.setState({ imageUpload: imageUploadAtual }, () => {
          console.log(this.state.imageUpload)
          console.log('UPLOAD', this.state.file);
      });
 
}

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
          <input
          name="comentario"
          onChange={this.handleChange}
          >
          </input>
        </Paper>
      </main>
    );
  };
}

CadastroIndividuo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CadastroIndividuo);
