import React from "react";
import ImagemReferencia from "../../components/DetalhesEspecieForm/ImagemReferencia.js";
import DadosEspecie from "../../components/DetalhesEspecieForm/DadosEspecie.js";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Page from "views/Page/Page.js";

import DadosBasicosForm from "components/CadastroEspecie/DadosBasicosForm.js";
import PotenciaisForm from "components/CadastroEspecie/PotenciaisForm.js";
import ImageForm from "components/CadastroEspecie/ImageForm.js";
import map from "./map.png";


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

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="display1" align="center">
                        Araucaria
              </Typography>
                    <ImagemReferencia />
                    <DadosEspecie />
                    <img
                        className={classes.img}
                        src={map}
                        alt="map"
                        height="300" width="600"
                    />
                </Paper>
            </main>

        );
    }
}
DetalheEspecie.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DetalheEspecie);

