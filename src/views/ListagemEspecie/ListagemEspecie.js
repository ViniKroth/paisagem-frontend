import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Page from "views/Page/Page.js";
import Paper from "@material-ui/core/Paper";
import mate from "./mate.png";
import araucaria from "./araucaria.jpg";

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
        padding: theme.spacing.unit * 0.1,
        }
    },
    cardGrid: {
    padding: theme.spacing.unit * 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonSee: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //esse cards é temporario

class ListagemEspecie extends Page {
  constructor() {
    super();
    this.state = {
        value: 0,
        nome_cientifico: 'Paenibacillus riograndensis',
        nome_popular: ['po', 'de'],
        //foto: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        foto: araucaria,
        origem: mate, // com icone
        porte: '',
        folhagem: '', // com icone
    };
}


  //Alterando para Authenticated pra manter o padrão do resto do sistema.
  authenticated = () => {
    const { classes } = this.props;

  return (
    <React.Fragment>
      
      <main className={classes.layout}>
      <Paper className={classes.paper}>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Listagem de Espécies
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={24}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {this.state.foto} // eslint-disable-line max-len
                    title= {this.state.nome_cientifico.italics()}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2"  >
                    <img
                        src={this.state.origem}
                        alt="nativa"
                        height="40" width="40"
                      />
                      <i>
                     {"\t"} {this.state.nome_cientifico} 
                     </i>
                    </Typography>
                    <Typography>                      
                      <p>
                      Nomes Populares: {this.state.nome_popular} 
                      </p>                   
                      <p>
                      Porte: {this.state.porte}
                      </p>                      
                      <icon>
                        {this.state.folhagem}
                      </icon>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" color="primary" variant="contained" className={classes.buttonSee}>
                      detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.heroButtons}>
              <Grid container spacing={24} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
        </div>
        </Paper>
      </main>
    </React.Fragment>
  );
  };
}

ListagemEspecie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListagemEspecie);
