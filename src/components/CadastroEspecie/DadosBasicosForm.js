import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import withStyles from "@material-ui/core/styles/withStyles";



const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 5
  }
});
const origem = [
  {
    value: "",
    label: "Selecione a Origem da espécie"
  },
  {
    value: "n",
    label: "Nativa"
  },
  {
    value: "e",
    label: "Exótica"
  }
];

const folhagem = [
  {
    value: "",
    label: "Selecione o tipo de folhagem"
  },
  {
    value: "c",
    label: "Caduca"
  },
  {
    value: "p",
    label: "Perene"
  }
];
const familia = [
  {
    value: "",
    label: "Selecione uma família"
  },
  {
    value: "Acanthaceae‎",
    label: "Acanthaceae‎"
  },
  {
    value: "Blandfordiaceae‎",
    label: "Blandfordiaceae‎"
  }
];

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class DadosBasicosForm extends React.Component {
  constructor() {
    super();
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    outono: true,
    primavera: false,
    verao: false,
    inverno: false,
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { classes } = this.props;
    const { outono, verao, primavera, inverno } = this.state;
    return (
      <React.Fragment>
        <Typography variant="title" gutterBottom>
          Dados Básicos
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <TextField
                id="nomeCientifico"
                name="nomeCientifico"
                label="Nome Científico"
                onChange={this.props.onChangenomeCientifico}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Familia"
                select
                fullWidth
                onChange={this.props.onChangeFamilia}
                SelectProps={{ native: true }}
                margin="normal"
              >
                {familia.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="origem"
                select
                fullWidth
                onChange={this.props.onChangeOrigem}
                SelectProps={{ native: true }}
                margin="normal"
              >
                {origem.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="folhagem"
                select
                onChange={this.props.onChangeFolhagem}
                fullWidth
                SelectProps={{ native: true }}
                margin="normal"
             >
                {folhagem.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid><FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={outono}  value="gilad" />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox checked={verao}  value="jason" />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={inverno}
                  
                  value="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
            <Grid item xs={6}>
            
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="altura"
                name="altura"
                label="Porte (metros)"
                onChange={this.props.onChangeAltura}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <Button
                id="next"
                onClick={e => this.handleSubmit(e)}
                variant="contained"
                color="primary"
              >
                PROXIMO
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DadosBasicosForm);
