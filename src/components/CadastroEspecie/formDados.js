import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }, 
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit*3,
      paddingBottom: theme.spacing.unit*3,
      marginLeft: theme.spacing.unit*3,
      marginRight: theme.spacing.unit*3,
    },
    titulo: {
      textAlign: 'center',
    },
    root: {
      flexGrow: 1,
    },
    
    
  });
  
  const origem = [
    {
      value: 'nativa',
      label: 'Nativa',
    },
    {
      value: 'exotica',
      label: 'Exótica',
    },
  ];

  const folhagem = [
    {
      value: 'c',
      label: 'Caduca',
    },
    {
      value: 'p',
      label: 'Perene',
    },
  ];
function DadosBasicosForm() {
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Dados Básicos
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6} >
          <TextField
            required
            id="nomeCientifico"
            name="nomeCientifico"
            label="Nome Científico"
            fullWidth
           
          />
        </Grid>
        <Grid item xs={6} >
        <TextField
			id="Familia"
			label="Família"
            margin="normal"
            fullWidth
		/>
        </Grid>
        
        <Grid item xs={6}>
        <TextField
			id="origem"
			select
			label="Origem"
			fullWidth
			SelectProps={{
						  native: true,
							}}
							helperText="Selecione a Origem da espécie"
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
			label="Folhagem"
			fullWidth
			SelectProps={{
						  native: true,
							}}
							helperText="Selecione o tipo de folhagem"
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
            required
            id="altura"
            name="altura"
            label="Altura (metros)"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} >
          <TextField id="diametroCopa" name="diametroCopa" label="Diâmetro Copa" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


export default DadosBasicosForm;
