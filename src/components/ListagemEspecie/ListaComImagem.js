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
import nativa from "./nativa.png";
import exotica from "./exotica.png";
import perene from "./perene.png";
import caduca from "./caduca.png";
import araucaria from "./araucaria.jpg";
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Filter from '@material-ui/icons/Filter';
import { Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { listAll } from '../../services/especies/especies';
import CardActionArea from '@material-ui/core/CardActionArea';

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

class ListaComImagem extends Page{
    constructor(props){
        super(props);
    }


render(){
    return(
      <div></div>

    );

}
}
ListaComImagem.propTypes = {
classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListaComImagem);


  