import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";

import LocalizacaoIndividuo from "components/LocalizacaoIndividuo/LocalizacaoIndividuo.js";
import ImgForm from "components/LocalizacaoIndividuo/ImgForm.js";
import SelecionaEspecie from "components/LocalizacaoIndividuo/SelecionaEspecie.js"
import { Grid } from "@material-ui/core";

import img from "./plantas.jpg"

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

const steps = ["Localização", "Espécie", "Imagens"];
const refs = {};
class CadastroIndividuo extends Page {
  constructor(props) {
    super(props);
    this.state = {
      localizacao: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false,
      imageUpload: [],
      comentario: null,
      step: 0,
    }
    this.goToNext = this.goToNext.bind(this);
    this.goToBack = this.goToBack.bind(this);
  }

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {

          console.log(position.coords);
          this.setState(prevState => ({
            localizacao: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isMarkerShown: true


          }))
        }
      ), { maximumAge: Infinity, timeout: 5000, enableHighAccuracy: true }
    } else {
      error => console.log(error)
    }

  }
  componentDidMount() {
    this.showCurrentLocation();
  }

  onMarkerMounted = ref => {
    refs.marker = ref;

  }

  onPositionChanged = () => {
    const position = refs.marker.getPosition();
    var newcurrentLatLng = {
      lat: position.lat(),
      lng: position.lng()
    }
    this.setState({ localizacao: newcurrentLatLng }, console.log(this.state))
  }

  getStep(step) {
    switch (step) {
      case 0:
        return (
          <LocalizacaoIndividuo

            onSubmit={this.goToNext}
            isMarkerShown={this.state.isMarkerShown}
            currentLocation={this.state.localizacao}
            onPositionChanged={this.onPositionChanged}
            onMarkerMounted={this.onMarkerMounted}
            onChangeDescLocal={this.handleChange}

          />
        );
      case 1:
        const { classes } = this.props;
        return (
          <Grid container className={classes.root} spacing={24}>
            <SelecionaEspecie
              onSubmit={this.goToNext}
            />

            <Grid item xs={6}>
              <Button
                id="back"
                onClick={() => this.goToBack()}
                variant="contained"

              //color="primary"
              >
                Voltar
            </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                id="next"
                onClick={() => this.goToNext()}
                variant="contained"

                color="primary"
              >
                Próximo
            </Button>

            </Grid>
          </Grid>
        );

      case 2:
        return (
          <ImgForm
            onBack={this.goToBack}
            onSubmit={this.goToNext}
            handleChangeImage={this.handleChangeImage}

          />
        );
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
      var individuo = Object.assign({}, this.state);

      //var result = await create(this.state.especie);

      console.log(individuo);
      //alert("Cadastrado com Sucesso!");
    }
  }


  goToBack() {
    const { step } = this.state;
    if (step !== 0) {
      //Adicionou o this.renderAuthentication pq triamos probçema mudando de passo
      this.setState({ step: step - 1 });
    }
  }

  handleChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeImage = imgState => {
    //console.log(1,imgState)
    var imageUploadAtual = this.state.imageUpload;
    imageUploadAtual.push(imgState);
    return this.setState({ imageUpload: imageUploadAtual }, console.log(this.state));
  };



  handleSubmitImage(e) {
    e.preventDefault();

    this.setState({ qntImagensError: false })
    var imageUploadAtual = this.state.imageUpload
    imageUploadAtual.push(this.state.file)
    this.setState({ imageUpload: imageUploadAtual }, () => {
      //console.log(this.state.imageUpload)
      console.log('UPLOAD', this.state.file);
    });

  }
  authenticated = () => {

    return (

      this.unauthenticated()
    );
  }
  //Alterando para Authenticated pra manter o padrão do resto do sistema.
  unauthenticated = () => {
    const { classes } = this.props;

    return (
      <div
        style={{
          height: "109vh",
          backgroundImage: `url(${img})`,
          paddingTop: "2%",  
          
        }}
      >
      
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
      </div>
    );
  };
}

CadastroIndividuo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CadastroIndividuo);
