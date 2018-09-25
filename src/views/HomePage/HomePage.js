import React from "react";

import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
// Biblioteca de Componentes
//&
// Views
import Page from "views/Page/Page";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Serviços
import { listAll } from "services/user/user";

import img from "./paisagem.jpeg"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3
  },
  input: {
    display: "none"
  },

  paper: {
    marginTop: theme.spacing.unit * 30,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 30,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3
    }
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});



class HomePage extends Page {
  constructor(props) {
    super(props);
  }
  
    
  authenticated = () => {
    return (
      <div
        style={{
          paddingTop: "100px"
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => this.redirect("/cadastroEspecie")}
          className="clickable"
        >
          Cadastrar Especie
        </Button>
      </div>
    );
  };


 
    
  unauthenticated = () => {

    
    const { classes } = this.props;
   
    return (
      <div
        style={{
          height: "93vh",
          backgroundImage:`url(${img})`
        }}
      >

       <Paper className={classes.paper}>
       O que é o projeto Paisagem? 

O projeto Paisagem surgiu a partir de uma demanda da professora Drª.Maria Alice Medeiros Dias do curso de Arquitetura e Urbanismo da Escola Politécnica da PUCRS,tendo ela notado a necessidade de um sistema que seria um facilitador para o mapeamento da flora e também com o intuito de trazer uma maior visibilidade e acessibilidade a área de pesquisa sobre Paisagismo, tanto para especialistas quanto para interessados no assunto.
Inicialmente o sistema web responsivo terá funcionalidades para facilitar a localização e mapeamento de espécies de plantas na PUCRS. Cada uma das plantas estará especificada no sistema com suas características, informações e geolocalização no campus. Mais informações das funcionalidades que estarão disponíveis no sistema podem ser encontradas na pagina de Requisitos.
O projeto Paisagem teve inicio na disciplina Prática na Agência Experimental de Engenharia de Software, do curso de bacharelado em Engenharia de Software da Escola Politécnica da PUCRS, em 2018/2 com previsão de conclusão ao final do semestre.
       </Paper>
  
      <main className={classes.layout}>
      <Grid container spacing={26}>
      <Grid item xs={26} sm={12}> 
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center">
            [imagem]
          </Typography>
    
              
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => this.redirect("/login")}
          className="clickable"
        >
          login
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => this.redirect("/listagemEspecie")}
          className="clickable"
        >
          Listagem de Especie
        </Button>
       
       
     
      </Paper>
      </Grid> 
      </Grid>
      
      </main>
      </div>
      
        
    );
  
  }
  };




export default withStyles(styles)(HomePage);
