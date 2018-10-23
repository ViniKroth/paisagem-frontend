import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { listAll } from "services/especies/especies";

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

class SelecionaEspecie extends Component {
  constructor(props) {
    super(props); 
    this.state        
  }
    //Alterando para Authenticated pra manter o padrão do resto do sistema.
    
    handleSubmit(evt) {
      evt.preventDefault();
      this.props.onSubmit();
    }

    selecionaEspecie = async () => {
      var result = await listAll();
    var especies = [];

    if(result && result.length > 0){
      result.map(e =>{
        var id = e["id_especie"]
        var nomeCien = e["nome_cientifico"]
        

        var especie = {
          id,
          nome_cientifico: nomeCien
        }
      
        especies.push(especie)
      })
    }
    this.setState({especies})

      console.log(result);
  }

    componentDidMount(){
      this.selecionaEspecie();
    }

    render(){
      const { classes } = this.props;
  
      return (
        <main className={classes.layout}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Seleciona Espécie
          </InputLabel>
        <NativeSelect
            value={"Seleciona Espécie"}
            input={<Input name="Seleciona Espécie" id="age-native-label-placeholder" />}
          >
        
          </NativeSelect>
        </FormControl>
         <Button
                id="next"
                onClick={e => this.handleSubmit(e)}
                variant="contained"
                fullWidth
                //color="primary"
              >
                OK, PROXIMO
              </Button>
        </main>
      );
    };
  }
  

SelecionaEspecie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelecionaEspecie);
