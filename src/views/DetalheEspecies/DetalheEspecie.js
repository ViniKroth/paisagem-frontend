import React from "react";
import ImagemReferencia from "../../components/DetalhesEspecieForm/ImagemReferencia.js";
import DadosEspecie from "../../components/DetalhesEspecieForm/DadosEspecie.js";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DadosBasicosForm from "components/CadastroEspecie/DadosBasicosForm.js";
import PotenciaisForm from "components/CadastroEspecie/PotenciaisForm.js";
import ImageForm from "components/CadastroEspecie/ImageForm.js";
import map from "./map.png";


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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

    buttons: {
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit
    }
});


class DetalheEspecie extends Page {
    state = {
        value: 0,
        nome_cientifico: '',
        nome_familia:'',
        floracao:'',
        folhagem:'',
        origem:'',
        nome_popular:'',
        potencialarq:'',
        potencialpaisag:'',
        porte:'',
        genero:'',
        populacao:'',
        foto:'',
        desenho:'',
        qtd_individuos:'',
        outono:'',
        verao:'',
        primavera: '',
        inverno:'',
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    authenticated = () => {
        const { value } = this.state;
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <div className={classes.root}>
                            <Grid item xs={12}>
                                <AppBar position="static">
                                    <Tabs value={value} onChange={this.handleChange}>
                                        <Tab label="Detalhes Espécie" />
                                        <Tab label="Potenciais" />
                                        <Tab label="Indivíduos" href="#basic-tabs" />
                                    </Tabs>
                                </AppBar>
                            </Grid>
                            <Grid item xs={12}>
                                {value === 0 && <TabContainer><Typography variant="display1" align="center">
                                    Araucaria
              </Typography>
              <Grid item xs={24} sm={12}>
                                        <ImagemReferencia />

                                    </Grid>
                                    
                                    <DadosEspecie nome_cientifico={this.state.nome_cientifico} nome_popular={this.state.nome_popular} nome_familia={this.state.nome_familia} origem={this.state.origem} folhagem={this.state.folhagem} porte={this.state.porte} floracao={this.state.floracao} genero={this.state.genero} populacao={this.state.populacao} />
                                    
                                </TabContainer>}
                                {value === 1 && <TabContainer><b>Potencial Arquitetônico:</b> {this.state.potencialarq}<br/> <b>Potencial Paisagístico:</b> {this.state.potencialpaisag}</TabContainer>}
                                {value === 2 && <TabContainer><img
                                    className={classes.img}
                                    src={map}
                                    alt="map"
                                    height="300" width="600"
                                /></TabContainer>}


                            </Grid>
                        </div>
                    </Paper>
                </main>
            </Grid>
        );
    }
}
DetalheEspecie.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DetalheEspecie);

