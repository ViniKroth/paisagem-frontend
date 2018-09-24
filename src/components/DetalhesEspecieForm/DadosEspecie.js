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
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import icone from './icone.png';



const styles = theme => ({
    button: {
        marginTop: theme.spacing.unit * 5
    },
    root: {
        overflow: 'hidden',
        padding: `0 ${theme.spacing.unit * 3}px`,
    },
    wrapper: {
        maxWidth: 400,
    },
    paper: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
    },
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


class DadosEspecie extends React.Component {
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
        const message = "TEste";
        return (
            <React.Fragment>
                <h6></h6>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.root}>
                        <div className={classes.wrapper}>
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar> <img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap> <b>Nome Popular: </b> {this.props.nome_popular}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap><b>Família: </b> {this.props.nome_familia}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap> <b>Origem: </b> {this.props.origem}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap> <b>Folhagem: </b> {this.props.folhagem}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap> <b>Porte: </b> {this.props.porte}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap>   <b>Gênero: </b> {this.props.genero}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap>  <b>População: </b> {this.props.populacao}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item>
                                        <Avatar><img
                                                    className={classes.img}
                                                    src={icone}
                                                    alt="nativa"
                                                    height="30" width="30"
                                                /></Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap>  <b>Época de Floração: </b> {this.props.floracao}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </div>

                </form>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DadosEspecie);
