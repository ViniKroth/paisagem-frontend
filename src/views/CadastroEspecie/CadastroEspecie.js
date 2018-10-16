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
import { upload } from "services/uploadImg/uploadImagem";

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
      especie: {
        nomePopular: [
          {
            nome: ""
          }
        ],
        image: [],
        floracao: {
          outono: false,
          primavera: false,
          inverno: false,
          verao: false
        },
        frutificacao: {    outono: false,
          primavera: false,
          inverno: false,
          verao: false}
      }
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToBack = this.goToBack.bind(this);
  }

  getStep(step) {
    switch (step) {
      case 0:
        return (
          <DadosBasicosForm
            key="Dados"
            onSubmit={this.goToNext}
            // Begin Dados básicos
            nomeCientifico={this.state.especie.nome_cientifico}
            nomePopular={this.state.especie.nomePopular}
            familia={this.state.especie.familia}
            origem={this.state.especie.origem}
            porte={this.state.especie.porte}
            classificacao={this.state.especie.classificacao}
            folhagem={this.state.especie.folhagem}
            tipoFruto={this.state.especie.tipoFruto}
            // Begin dados Floração
            floracaoOutono={this.state.especie.floracao.outono}
            floracaoVerao={this.state.especie.floracao.verao}
            floracaoInverno={this.state.especie.floracao.inverno}
            floracaoPrimavera={this.state.especie.floracao.primavera}
            // Begin dados Frutificação
            frutificacaoOutono={this.state.especie.frutificacao.outono}
            frutificacaoVerao={this.state.especie.frutificacao.verao}
            frutificacaoInverno={this.state.especie.frutificacao.inverno}
            frutificacaoPrimavera={this.state.especie.frutificacao.primavera}
            // Begin Handlers
            onChange={this.handleChange}
            onChangeFloracao={this.handleChangeFloracao}
            onChangeFrutificacao={this.handleChangeFrutificacao}
            handleNomePopularChange={this.handleNomePopularChange}
            handleAddNomePopular={this.handleAddNomePopular}
            handleRemoveNomePopular={this.handleRemoveNomePopular}
          />
        );
      case 1:
        return (
          <PotenciaisForm
            key="Potenciais"
            onSubmit={this.goToNext}
            onBack={this.goToBack}
            onChangenomeCientifico={this.handleChange("nome_cientifico")}
            onChangeDescricao={this.handleChange("descricao")}
            onChangePotencialPaisag={this.handleChange("potencialpaisag")}
          />
        );
      case 2:
        return (
          <ImageForm
            key="ImgUpLoad"
            onBack={this.goToBack}
            onSubmit={this.goToNext}
            handleChangeImage={this.handleChangeImage}
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
      
      this.setState({ step: step + 1 });
    } else {//console.log("final" ,this.state.especie);
      
    


    var result = await upload(this.state.especie.image[0]);
    var result = await upload(this.state.especie.image[1]);
    
    console.log("resposta up", this.state.especie.image[0].tipo);
    
    //var result = await create(this.state.especie); //salva dados da especie


     // await uploadImage(this.state.especie.image); //salva imagens da especie

      //console.log(this.state.especie);
      //alert("Cadastrado com Sucesso!");
    }
  }

  handleChangeFrutificacao = name => event => {
    var especie = this.state.especie;

    especie.frutificacao[name] = event.target.checked;

    this.setState({
      especie
    });
  };

  handleChangeFloracao = name => event => {
    var especie = this.state.especie;

    especie.floracao[name] = event.target.checked;

    this.setState({
      especie
    });
  };

  goToBack() {
    const { step } = this.state;
    if (step !== 0) {
      
      this.setState({
        step: step - 1
      });
    }
  }

  handleChange = campo => event => {
    var especie = this.state.especie;
    especie[campo] = event.target.value;
    return this.setState({
      especie
    });
  };

  handleChangeImage = imgState => {
    var especie = this.state.especie;
    especie["image"].push(imgState);
    this.setState({especie});
  };

  //Nomes populares
  handleNomePopularChange = idx => evt => {

    var especie = this.state.especie;
    const nomesPopulares = this.state.especie.nomePopular.map(
      (nomePop, sidx) => {
        if (idx !== sidx) return nomePop;
        return {
          nome: evt.target.value
        };
      }
    );
    console.log(nomesPopulares)
    especie["nomePopular"] = nomesPopulares;
    this.setState({
      especie
    });
  };

  handleAddNomePopular = () => {
    var especie = this.state.especie;
    especie["nomePopular"] = this.state.especie.nomePopular.concat([
      {
        nome: ""
      }
    ]);
    this.setState({
      especie
    });
    console.log(this.state);
  };

  handleRemoveNomePopular = idx => () => {
    var especie = this.state.especie;
    especie["nomePopular"] = this.state.especie.nomePopular.filter(
      (s, sidx) => idx !== sidx
    );
    this.setState({
      especie
    });
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
                <StepLabel> {label} </StepLabel>
              </Step>
            ))}
          </Stepper>
          {this.getStep(this.state.step)}
        </Paper>
      </main>
    );
  };
}
CadastroEspecie.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(CadastroEspecie);
