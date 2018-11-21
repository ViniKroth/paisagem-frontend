import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Page from "views/Page/Page.js";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '880px',
        backgroundColor: theme.palette.background.paper,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class ListagemUser extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>

                {this.props.usuarios.map(infos => (
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="primary" className={classes.heading} style={{ marginRight: 10 }}>Nome: </Typography>
                            <Typography>
                                {infos.nome}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography color="primary">
                                    E-mail:
                     </Typography>
                                <Typography>
                                    {infos.email}
                                </Typography>
                            </div>

                            <div>
                                <Typography color="primary">
                                    Usuário:
                     </Typography>
                                <Typography>
                                    {infos.username}
                                </Typography>
                            </div>
                            <div>
                                <Typography color="primary">
                                    Cargo:
                     </Typography>
                     <Typography>
                                    {infos.cargo}
                                </Typography>
                            </div>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    /* <List component="nav">
                         <Grid container spacing={64}>
                         <Grid item xs={12} sm={20}>
                             <ListItem>
                             <Typography variant="h7" color="primary">
                              Nome:
                             </Typography>
                                 <ListItemText primary={infos.nome}/>
                             <Typography variant="h7" color="primary">
                              E-mail:
                             </Typography>
                                 <ListItemText primary={infos.email} />
                             <Typography variant="h7" color="primary">
                              Usuário:
                             </Typography>
                                 <ListItemText primary={infos.username} />
                             <Typography variant="h7" color="primary">
                              Cargo:
                             </Typography>
                                 <ListItemText primary={infos.cargo} />
                             </ListItem>
                             </Grid>
                             </Grid>
                         <Divider />
                     </List>*/
                ))}
            </div>
        );
    }
}
ListagemUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListagemUser);