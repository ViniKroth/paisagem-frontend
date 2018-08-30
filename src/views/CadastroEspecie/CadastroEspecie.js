import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Page from "views/Page/Page.js";

import DadosBasicosForm from "components/CadastroEspecie/DadosBasicosForm.js"
import PotenciaisForm from "components/CadastroEspecie/PotenciaisForm.js"

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
	  padding: theme.spacing.unit * 3,
	  
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Dados básicos', 'Potencial', 'Imagens'];


class CadastroEspecie extends Page {
  constructor() {
    super();
    this.state = {
      step: 0,
      //nomeCientifico: "",
      //familia: "",
    };
    this.goToNext = this.goToNext.bind(this);
  }

  getStep(step){
    switch (step) {
      case 0:
        return <DadosBasicosForm
          key="Dados"
          onSubmit={this.goToNext}
          nomeCientifico={this.state.nomeCientifico}
          familia={this.state.familia}
          onChangenomeCientifico={this.handleChange('nomeCientifico')}
          onChangeFamilia={this.handleChange('familia')}
          onChangeFolhagem={this.handleChange('folhagem')}
          onChangeOrigem={this.handleChange('origem')}
          onChangeAtura={this.handleChange('altura')}
        />;
      case 1:
        return <PotenciaisForm
          key="Potenciais"
          onSubmit={this.goToNext}
        />
      case 2:
        return ;
    }
  }

  goToNext() {
    const { step } = this.state;
    if (step !== 3) {
      this.setState({ step: step + 1 });
    } else {
      alert('Submitting');
      
      const values = {
        //nomeCientifico: this.state.nomeCientifico,
        //familia: this.state.familia,
        
      };
      console.log(this.state) ;
    }
  };

  handleChange(campo) {
    return (evt) => this.setState({ [campo]: evt.target.value });
  }
  render() {
    

          return(
       
          <Paper className="paper">
            <Typography variant="display1" align="center">
              Cadastro de Espécie
            </Typography>
            <Stepper activeStep={this.state.step} className="stepper">
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
              {this.getStep(this.state.step)}  
          </Paper>
       
      );



    }
  }







CadastroEspecie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadastroEspecie);
