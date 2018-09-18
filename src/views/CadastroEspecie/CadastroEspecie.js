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

class CadastroEspecie extends Page {
  constructor() {
    super();
    this.state = {
      step: 0,
      especie: {nomePopular: [{ name: '' }],
    
      image : {},
    
    },
               
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
            nomeCientifico={this.state.especie.nome_cientifico}
            nomePopular={this.state.especie.nome_popular}
            familia={this.state.especie.familia}
            outono={this.state.especie.FloracaoOutono}
            verao={this.state.especie.FloracaoVerao}
            inverno={this.state.especie.FloracaoInverno}
            primavera={this.state.especie.FloracaoPrimavera}
            nomePopular = {this.state.especie.nomePopular}
            porte={this.state.especie.porte}
            onChangenomeCientifico={this.handleChange("nome_cientifico")}
            onChangenomePopular={this.handleChange("nome_popular")}
            onChangeFamilia={this.handleChange("familia")}
            onChangeFolhagem={this.handleChange("folhagem")}
            onChangeOrigem={this.handleChange("origem")}
            onChangePorte={this.handleChange("porte")}
            onChangeOutono={this.handleChangeFloracao("FloracaoOutono")}
            onChangeVerao={this.handleChangeFloracao("FloracaoVerao")}
            onChangeInverno={this.handleChangeFloracao("FloracaoInverno")}
            onChangePrimavera={this.handleChangeFloracao("FloracaoPrimavera")}
            onChangeFrutificacaoOutono={this.handleChangeFrutificacao("FrutificacaoOutono")}
            onChangeFrutificacaoVerao={this.handleChangeFrutificacao("FrutificacaoVerao")}
            onChangeFrutificacaoInverno={this.handleChangeFrutificacao("FrutificacaoInverno")}
            onChangeFrutificacaoPrimavera={this.handleChangeFrutificacao("FrutificacaoPrimavera")}
            onChangeClassificacao={this.handleChange("classificacao")}
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

  handleChangeFrutificacao = name => event => {
    var especie = this.state.especie;
    event.target.checked
      ? undefined
      : name == "FrutificacaoOutono"
        ? "outono"
        : name == "FrutificacaoVerao"
          ? "verao"
          : name == "FrutificacaoInverno"
            ? "inverno"
            : name == "FrutificacaoPrimavera"
              ? "primavera"
              : undefined;

    //TODO - Remover isso e usar a string acima para ver quem esta marcado
    especie[name] = event.target.checked;

    //this.setState({ especie }, () => this.renderAuthentication());
    this.setState({ [name]: event.target.checked });
  };

  handleChangeFloracao = name => event => {
    var especie = this.state.especie;
    event.target.checked
      ? undefined
      : name == "FloracaoOutono"
        ? "outono"
        : name == "FloracaoVerao"
          ? "verao"
          : name == "FloracaoInverno"
            ? "inverno"
            : name == "FloracaoPrimavera"
              ? "primavera"
              : undefined;

    //TODO - Remover isso e usar a string acima para ver quem esta marcado
    especie[name] = event.target.checked;

    //this.setState({ especie }, () => this.renderAuthentication());
    this.setState({ [name]: event.target.checked });
  };

  goToBack() {
    const { step } = this.state;
    if (step !== 0) {
      //Adicionou o this.renderAuthentication pq triamos probçema mudando de passo
      this.setState({ step: step - 1 }) //, () => this.renderAuthentication());
    }
  }

  handleChange = campo => event => {
    var especie = this.state.especie;
    especie[campo] = event.target.value;
    return this.setState({ especie });
  };


  handleChangeImage = imgState => {
    console.log(1,imgState)
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
  unauthenticated = () => {
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
