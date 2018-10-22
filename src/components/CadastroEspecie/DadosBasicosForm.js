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
import FormLabel from '@material-ui/core/FormLabel';
import withStyles from "@material-ui/core/styles/withStyles";
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 5,

  },

  RemoveNome: {
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,

  },

  AddNome: {
    marginTop: theme.spacing.unit * 2
  },

});
const origem = [
  {
    value: "",
    label: "Origem da Espécie"
  },
  {
    value: "n",
    label: "Nativa do Rio Grande do Sul"
  },
  {
    value: "e",
    label: "Exótica"
  }
];

const frutificacao = [
  {
    value: "",
    label: "Frutificação"
  },
  {
    value: "carnosa",
    label: "Carnosa"
  },
  {
    value: "seco",
    label: "Seco"
  }
];


const classificacao = [
  {
    value: "",
    label: "Classificação/extrato"
  },
  {
    value: "arvore",
    label: "Árvore"
  },
  {
    value: "arbusto",
    label: "Arbusto"
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
  },
  {
    value: "Bignoniaceae",
    label: "Bignoniaceae"
  }
];


class DadosBasicosForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }




  render() {
    const { classes } = this.props;
    //const { outono, verao, primavera, inverno } = this.state;
    return (
      <React.Fragment>
        <Typography variant="title" gutterBottom>
          Dados Básicos
        </Typography>
        <Typography variant="caption" gutterBottom>
            Uma espécie precisa de alguns dados básicos para ser cadastrada, descreva-os aqui!
      </Typography>
     
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <TextField
                id="nomeCientifico"
                required
                name="nomeCientifico"
                label="Nome Científico"
                // TODO: Arrumar inconsistencia com os nome (usar ou "nomeCientifico" ou "nome_cientifico")
                value={this.props.nomeCientifico}
                onChange={() => this.props.onChange("nome_cientifico")}
                fullWidth
              />
            </Grid>



            <Grid item xs={6}>
              <TextField
                id="Familia"
                value={this.props.familia}
                select
                fullWidth
                onChange={() => this.props.onChange("familia")}
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
                value={this.props.origem}
                select
                fullWidth
                onChange={() => this.props.onChange("origem")}
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
                id="porte"
                name="porte"
                label="Porte"
                value={this.props.porte}
                onChange={() => this.props.onChange("porte")}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="classificacao"
                select
                value={this.props.classificacao}
                onChange={() => this.props.onChange("classificacao")}
                fullWidth
                SelectProps={{ native: true }}
                margin="normal"
              >
                {classificacao.map(option => (
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
                onChange={() => this.props.onChange("folhagem")}
                fullWidth
                value={this.props.folhagem}
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
                id="tipoFruto"
                select
                onChange={() => this.props.onChange("tipoFruto")}
                fullWidth
                SelectProps={{ native: true }}
                margin="normal"
              >
                {frutificacao.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>


          <Grid container spacing={24}>
            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Selecione o período de Frutificação da espécie</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="outono"
                        checked={this.props.frutificacaoOutono}
                        onChange={this.props.onChangeFrutificacao("outono")}
                      />
                    }
                    label="Outono"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="verao"
                        checked={this.props.frutificacaoVerao}
                        onChange={this.props.onChangeFrutificacao("verao")}
                      />
                    }
                    label="Verão"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="inverno"
                        checked={this.props.frutificacaoInverno}
                        onChange={this.props.onChangeFrutificacao("inverno")}
                      />
                    }
                    label="Inverno"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.frutificacaoPrimavera}
                        onChange={this.props.onChangeFrutificacao("primavera")}
                        value="primavera"
                      />
                    }
                    label="Primavera"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Selecione o período de Floração da Espécie</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.floracaoOutono}
                        value="outono"
                        onChange={this.props.onChangeFloracao("outono")}
                      />
                    }
                    label="Outono"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.floracaoVerao}
                        value="verao"
                        onChange={this.props.onChangeFloracao("verao")}
                      />
                    }
                    label="Verão"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.floracaoInverno}
                        onChange={this.props.onChangeFloracao("inverno")}
                        value="inverno"
                      />
                    }
                    label="Inverno"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.floracaoPrimavera}
                        onChange={this.props.onChangeFloracao("primavera")}
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
            <Grid item xs={1} sm={6}>

              {this.props.nomePopular.map((nomesPopulares, idx) => {
                console.log(nomesPopulares)
                return <div className="nomesPopulares" key={nomesPopulares.nome+idx}>
                  <TextField
                    placeholder={`Nome Popular (${idx + 1}) `}
                    value={nomesPopulares.nome}
                    onChange={this.props.handleNomePopularChange(idx)}
                  />
                  <IconButton

                    onClick={this.props.handleRemoveNomePopular(idx)}
                    className={classes.RemoveNome}
                  >
                    <ClearIcon />
                  </IconButton>
                </div>
              })}
              <Button
                onClick={this.props.handleAddNomePopular}
                variant="contained"
                className={classes.AddNome}

              >
                Adicionar Nome Popular
              </Button>

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
