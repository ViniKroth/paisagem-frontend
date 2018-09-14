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


class DadisEspecie extends React.Component {
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
                
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>

                            <Typography variant="body1" gutterBottom>
                                <b>Nome Científico: </b> {this.props.NomeCientifico}
                            </Typography>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>
                                <b>Família: </b> {this.props.Familia}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="body1" gutterBottom>
                                <b>Origem: </b> {this.props.Origem}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>
                                <b>Folhagem: </b> {this.props.Folhagem}
                            </Typography>
                        </Grid>


                        <Grid item xs={6}>
                        <Typography variant="body1" gutterBottom>
                                <b>Porte: </b> {this.props.Porte}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="body1" gutterBottom>
                                <b>Período de Floração: </b> {this.props.Porte}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                   

                </form>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DadisEspecie);
