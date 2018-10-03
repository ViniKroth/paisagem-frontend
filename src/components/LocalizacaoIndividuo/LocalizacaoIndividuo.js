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
import GoogleMapReact from 'google-map-react';



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
    this.state= {
      center: {
        lat:navigator.geolocation.getCurrentPosition(function(position) {
         return position.coords.latitude
        }),
        lng: navigator.geolocation.getCurrentPosition(function(position) {
          return position.coords.longitude
        })
      },
      zoom: 11
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }






 

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  
 
  
  render() {

    const AnyReactComponent = ({ text }) => (
      <div style={{
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
        {text}
      </div>
    );
    const { classes } = this.props;
    //const { outono, verao, primavera, inverno } = this.state;
 


    return (
        <React.Fragment>
      
        <Typography variant="title" gutterBottom>
         Localização
        </Typography>



        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        
          bootstrapURLKeys={{ key:  "AIzaSyClb62KCYOAJU_X1r90q4mUU0R600BoTGM"  }}
          defaultCenter={this.state.center}
          defaultZoom={11}
        >


        
          {/* <AnyReactComponent
            lat={
             center ["lat"]
            }
            lng={center ["lgn"]}


            text={'YOU'}
          /> */}

        </GoogleMapReact>
      </div>

       
          
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
