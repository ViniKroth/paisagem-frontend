import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import ImageComponent from "components/UploadImg/ImageComponent.js";
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
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3
  }
});

class ImageForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
    
  }

  handleBack(evt) {
    evt.preventDefault();
    this.props.onBack();
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={64}>
        <Grid item xs={12} >
        <Typography variant="title" gutterBottom>
            Imagens
          </Typography>
        </Grid>
     
            <form onSubmit={this.handleSubmit}>
            
              
                <React.Fragment>
                <Grid item xs={24} >
                  <ImageComponent 
                    handleChangeImage = {this.props.handleChangeImage}
                    qntImagensError= {this.props.qntImagensError}
                  
                  />
                  </Grid>
              </React.Fragment>
              
            
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Button
                id="back"
                onClick={e => this.handleBack(e)}
                variant="contained"
                color=""
                className={classes.button}
              >
                VOLTAR
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                id="next"
                onClick={e => this.handleSubmit(e)}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                SAlVAR
              </Button>
            </Grid>
            </Grid>
        </form>
        </Grid>
      </React.Fragment>
      
      
    );
  }
}
export default withStyles(styles)(ImageForm);
