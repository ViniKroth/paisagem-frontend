import React from "react";
import ImagemReferencia from "../../components/DetalhesEspecieForm/ImagemReferencia.js";
import DadosEspecie from "../../components/DetalhesEspecieForm/DadosEspecie.js";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import nativa from "./nativa.png";
import exotica from "./exotica.png";
import { readE } from "services/especies/especies";
import { get } from "../../services/nomesPopulares/nomesPopulares";
import Avatar from '@material-ui/core/Avatar';
import icone from '../../components/DetalhesEspecieForm/icone.png';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { read } from '../../services/familia/familia';

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
    constructor() {
        super();
        this.state = {
            value: 0,
            nome_cientifico: '',
            nome_familia: '',
            floracao: '',
            folhagem: '',
            origem: '',
            nome_popular: [],
            potencialarq: '',
            potencialpaisag: '',
            porte: '',
            genero: '',
            populacao: '',
            foto: '',
            desenho: '',
            qtd_individuos: '',
            outono: '',
            verao: '',
            primavera: '',
            inverno: '',
            especie: {}
        };
    }

    componentDidMount() {
        this.criaEspecie();
    }
    criaEspecie = async () => {
        this.setState({especie : ""})
        var result = await readE(this.props.match.params.id);
        var resNomesPopulares = await get(this.props.match.params.id);
        this.setState({ especie: result });
        var especie = this.state.especie;
        var idFamilia = especie["id_familia"]
        var resFamilia = await read(1);
        resFamilia = resFamilia.nome;
        var nomeCien = especie["nome_cientifico"]
        var flor = especie["floracao"]
        var folha = especie["folhagem"]
        var ori = especie["origem"]
        var potenArq = especie["descricao"]
        var pontenPaisag = especie["potencialpaisag"]
        var port = especie["porte"]
        var gen = especie["genero"]
        var popu = especie["populacao"]
        var fot = especie["foto"]
        var desen = especie["desenho"]
        var qtdIndivi = especie["qtd_individuos"]
        this.setState({
            nome_cientifico: nomeCien, nome_popular: resNomesPopulares, nome_familia: resFamilia, floracao: flor, folhagem: folha, origem: ori, potencialarq: potenArq,
            potencialpaisag: pontenPaisag, porte: port, genero: gen, populacao: popu, foto: fot, desenho: desen, qtd_individuos: qtdIndivi
        })
        console.log(this.state.nome_popular)
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    authenticated = () => {
        return (
            this.unauthenticated()
        );
    }
    unauthenticated = () => {
        const { value } = this.state;
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>

                <main className={classes.layout}>
                    <div className={classes.root}>
                        <h1></h1>
                        <Grid item xs={12}>
                            <AppBar position="static">
                                <Tabs value={value} onChange={this.handleChange}>
                                    <Tab label="Detalhes Espécie" />
                                    <Tab label="Potenciais" />
                                    <Tab label="Indivíduos" href="#tabs" />
                                </Tabs>
                            </AppBar>
                        </Grid>

                        <Grid item xs={12}>
                            {value === 0 && <TabContainer><Typography variant="display1" align="center">
                                <i>{this.state.nome_cientifico}</i>
                            </Typography>

                                <Grid item xs={12} sm={12}>
                                    <ImagemReferencia foto={this.state.foto} desenho={this.state.desenho} />

                                </Grid>
                                <Grid item xs={12}>
                                    <br />
                                    {
                                        (this.state.origem === "Nativa")
                                            ?
                                            <img
                                                className={classes.img}
                                                src={nativa}
                                                alt="nativa"
                                                height="59" width="100"
                                            />
                                            :
                                            <img
                                                className={classes.img}
                                                src={exotica}
                                                alt="exotica"
                                                height="59" width="100"
                                            />
                                    }
                                </Grid>
                                <DadosEspecie nome_cientifico={this.state.nome_cientifico} nome_popular={this.state.nome_popular} nome_familia={this.state.nome_familia} origem={this.state.origem} folhagem={this.state.folhagem} porte={this.state.porte} floracao={this.state.floracao} genero={this.state.genero} populacao={this.state.populacao} />

                            </TabContainer>}
                            {value === 1 && <TabContainer>
                                <List>
                                    <ListItem>
                                        <Avatar>
                                            <img
                                                className={classes.img}
                                                src={icone}
                                                alt="icon"
                                                height="30" width="30"
                                            />
                                        </Avatar>
                                        <ListItemText ><Typography > <b>Potencial Arquitetônico:</b> {this.state.potencialarq} </Typography></ListItemText>
                                    </ListItem>
                                    <li>
                                        <Divider inset />
                                    </li>
                                    <ListItem>
                                        <Avatar>
                                            <img
                                                className={classes.img}
                                                src={icone}
                                                alt="icon"
                                                height="30" width="30"
                                            />
                                        </Avatar>
                                        <ListItemText ><Typography > <b>Descrição Geral:</b> {this.state.potencialpaisag}</Typography></ListItemText>
                                    </ListItem>

                                </List>
                            </TabContainer>}
                            {value === 2 && <TabContainer>
                            </TabContainer>}


                        </Grid>
                    </div>

                </main>
            </Grid>
        );
    }
}
DetalheEspecie.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DetalheEspecie);

