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

import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { listAll } from '../../services/familia/familia';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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
    grow: {
        flexGrow: 1,
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
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
    },
    img: {
        height: '10%',
        width: '25%',
        align: 'center'
    },
    chip: {
        margin: theme.spacing.unit,
    },
});


class ListagemFamilia extends Page {
    constructor() {
        super();
        this.state = {
            familias: []
        }
    }

    familiasLista = async () => {
        var result = await listAll();
        result = result.data;
        var familias = [];
        if (result && result.length > 0) {
            result.map(e => {
                var nome = e["nome"]
                var descricao = e["descricao"]


                var familia = {
                    nome,
                    descricao
                }

                familias.push(familia);
            })

        }
        console.log(familias);
        //console.log(this.state.familias);
        this.setState({ familias });
    }

    componentDidMount() {
        this.familiasLista()
    }

    authenticated = () => {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <React.Fragment>
                {this.state.familias.map(item =>
                    <Card className={classes.card}>

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {/* colocar o nome da espécie aqui */}
                            Nome da Espécie: {item.nome}
                        </Typography>

                        <Typography component="p">
                            Descição: {item.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                )
            }
                </React.Fragment>

        );


        SimpleCard.propTypes = {
            classes: PropTypes.object.isRequired,
        };

    }

    //Alterando para Authenticated pra manter o padrão do resto do sistema.

}
export default withStyles(styles)(ListagemFamilia)