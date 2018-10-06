import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";

import LocalizacaoIndividuo from "components/LocalizacaoIndividuo/LocalizacaoIndividuo.js";
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

const steps = ["Localização",  "Imagens"];

class CadastroIndividuo extends Page {
  constructor(props) {
    super(props);
    this.state = {
      imagens: [],
      localizacao: null,
      comentario: null,
      step: 0,
    }    
    this.goToNext = this.goToNext.bind(this);
    this.goToBack = this.goToBack.bind(this);         
  }

  getStep(step) {
    switch (step) {
      case 0:
      return (
        <LocalizacaoIndividuo
        
        onSubmit={this.goToNext}
        
        />
      );      
      case 1:
      return (
       <ImageForm
            key="ImgUpLoad"
            onBack={this.goToBack}
            onSubmit={this.goToNext}
            handleChangeImage={this.handleChangeImage}

          />
      );
        
      case 2: {
       
      }
    }
  }


  async goToNext() {
    const { step } = this.state;
    if (step !== 2) {
      //Adicionou o this.renderAuthentication pq triamos probçema mudando de passo
      this.setState({ step: step + 1 }
        //, () => this.renderAuthentication()
      );
    } else {
      var especie = Object.assign({}, this.state.especie);

      delete especie.FloracaoVerao;
      delete especie.FloracaoOutono;
      delete especie.FloracaoInverno;
      delete especie.FloracaoPrimavera;

      var result = await create(this.state.especie);

      console.log(result);
      //alert("Cadastrado com Sucesso!");
    }
  }


  goToBack() {
    const { step } = this.state;
    if (step !== 0) {
      //Adicionou o this.renderAuthentication pq triamos probçema mudando de passo
      this.setState({ step: step - 1 }, () => this.renderAuthentication());
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
  unauthenticated = () => {
    const { classes } = this.props;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center">
            Cadastro de Individuo
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

CadastroIndividuo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CadastroIndividuo);
