import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Typography from "@material-ui/core/Typography";
import MapWithAMarker from './MapWithAMarker';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
class LocalizacaoIndividuo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
  }

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isMarkerShown: true
          }))
        }
      )
    } else {
      error => console.log(error)
    }
  }


  componentDidMount() {
    this.showCurrentLocation()
  }

  render() {
    return (
      <React.Fragment>
        
        <Typography variant="tittle1" gutterBottom>
          Localização
        </Typography>
      <Typography variant="caption" gutterBottom>
          Selecione a localização do individuo a ser cadastrado
        </Typography>

        <div>
          <MapWithAMarker
            isMarkerShown={this.state.isMarkerShown}
            currentLocation={this.state.currentLatLng} />
        </div>

        <Grid container spacing={24}>

            <Grid item xs={6} />
            <Grid item xs={6}>
              <Button
                id="next"
                onClick={e => this.handleSubmit(e)}
                variant="contained"
                //color="primary"
              >
                OK, PROXIMO
              </Button>
            </Grid>
          </Grid>
      </React.Fragment>
    );
  }
}


render(<LocalizacaoIndividuo />, document.getElementById('root'));
export default LocalizacaoIndividuo