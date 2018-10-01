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

  RemoveNome:{
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    
  },

  AddNome: {
    marginTop: theme.spacing.unit * 2
  },

});



class LocalizacaoIndividuo extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
   
  };

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
         Localização
        </Typography>





       
          
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
          
          </React.Fragment>
   
    );
  }
}

export default withStyles(styles)(LocalizacaoIndividuo);
