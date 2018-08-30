import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 30,
    marginRight: 0,
  },
});
class PotenciaisForm extends React.Component{

    constructor() {
        super();    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit();
      }
    
      render() {
        const { classes} = this.props;
        return (
            
          <React.Fragment>
            <Typography variant="title" gutterBottom>
              Dados Básicos
            </Typography>
            <form onSubmit={this.handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} >
                <TextField
                  
                  id="potencialArq"
                  name="potencialArq"
                  label="Potencial Arquitetônico"
                  helperText="Descreva o potencial arquitetônico desta espécie"
                  onChange={this.props.onChangePotencialArq}
                  fullWidth
                    />
              </Grid>
              <Grid item xs={12} >
             
                   <TextField
                   
                   id="potencialPaisag"
                   name="potencialPaisag"
                   label="Potencial Paisagístico"
                   helperText="Descreva o potencial paisagístico desta espécie"
                   onChange={this.props.onChangePotencialPaisag}
                   fullWidth
                     />
                  
              
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} >
            <Button id="next" onClick={(e) => this.handleSubmit(e)} variant="contained" color="primary" className={classes.button}>PROXIMO</Button>

            </Grid>
            </form>
          </React.Fragment>
        );
      }
    

}
export default withStyles (styles) (PotenciaisForm);