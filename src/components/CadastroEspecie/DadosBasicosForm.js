import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 30,
    marginRight: 0,
  },
});
  const origem = [
    {
      value: '',
      label: 'Selecione a Origem da espécie',
    },
    {
      value: 'n',
      label: 'Nativa',
    },
    {
      value: 'e',
      label: 'Exótica',
    },
  ];

  const folhagem = [
    {
      value: '',
      label: 'Selecione o tipo de folhagem',
    },
    {
      value: 'c',
      label: 'Caduca',
    },
    {
      value: 'p',
      label: 'Perene',
    },
  ];
  const familia = [
    {
      value: '',
      label: 'Selecione uma família',
    },
    {
      value: 'Acanthaceae‎',
      label: 'Acanthaceae‎',
    },
    {
      value: 'Blandfordiaceae‎',
      label: 'Blandfordiaceae‎',
    },
  ];
 
  


class DadosBasicosForm extends React.Component{
  constructor() {
    super();    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { classes} = this.props;
    return (
      <React.Fragment>
        <Typography variant="title" gutterBottom>
          Dados Básicos
        </Typography>
        <form onSubmit={this.handleSubmit}>
        <Grid container spacing={24}>
          <Grid item xs={6} >
            <TextField
              id="nomeCientifico"
              name="nomeCientifico"
              label="Nome Científico"
              onChange={this.props.onChangenomeCientifico}
              fullWidth
                />
          </Grid>
          <Grid item xs={6} >
                        
            <TextField
                id="Familia"
                select
                fullWidth
                onChange={this.props.onChangeFamilia}
                SelectProps={{native: true,}}
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
                SelectProps={{native: true,}}
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
                  SelectProps={{native: true,}}
                          margin="normal"
              >
                  {folhagem.map(option => (
                      <option key={option.value} value={option.value}>
                         {option.label}
                      </option>
                        ))}
                  </TextField>
          </Grid>

          <Grid item xs={6}>
              <TextField
                id="altura"
                name="altura"
                label="Altura (metros)"
                onChange={this.props.onChangeAtura}
                fullWidth
              />
          </Grid>
          <Grid item xs={6} >
             <TextField   id="diametroCopa" name="diametroCopa" label="Diâmetro Copa" fullWidth />
          </Grid>
        </Grid>
        <Grid item xs={6} >
           <Button id="next" onClick={(e) => this.handleSubmit(e)} variant="contained" color="primary" className={classes.button}>PROXIMO</Button>
        </Grid>
        </form>
      </React.Fragment>
    );
  }
}




export default withStyles(styles)(DadosBasicosForm);

