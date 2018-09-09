import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import withStyles from "@material-ui/core/styles/withStyles";



const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 5
  }
});
const origem = [
  {
    value: "",
    label: "Origem da Espécie"
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
    label: "Tipo de Folhagem"
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
    label: "Família"
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


class DadosBasicosForm extends React.Component {
  constructor() {
    super();
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    outono: false,
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
                id="nomePopular"
                name="nomePopular"
                label="Nome Popular"
                onChange={this.props.onChangenomePopular}                
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
            </Grid>
            

            <Grid item xs={6}>
              <TextField
                id="porte"
                name="porte"
                label="Porte"
                onChange={this.props.onChangePorte}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
          <Grid item xs={24}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Selecione o período de Floração da Espécie</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={this.props.FloracaoOutono}  
                            value="outono"
                            onChange={this.props.onChangeOutono} 
                          />
                        }
                        label="Outono"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                          checked={this.props.FloracaoVerao}  
                            value="verao" 
                            onChange={this.props.onChangeVerao} 
                          />
                        }
                        label="Verão"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.props.FloracaoInverno}  
                            onChange={this.props.onChangeInverno} 
                            value="inverno"
                          />
                        }
                        label="Inverno"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.props.FloracaoPrimavera}  
                            onChange={this.props.onChangePrimavera} 
                            value="primavera"
                          />
                        }
                        label="Primavera"
                      />
                  </FormGroup>
                </FormControl>
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
