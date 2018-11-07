import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Page from "views/Page/Page.js";
import { Link } from "react-router-dom";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
});

class listagemUser extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>

                {this.props.usuarios.map(infos => (
                    <List component="nav">
                        
                            <ListItem button>
                                <ListItemText primary={infos.nome} />
                            </ListItem>
                        
                        <Divider />
                    </List>
                ))}
            </div>
        );
    }
}
listagemUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(listagemUser);