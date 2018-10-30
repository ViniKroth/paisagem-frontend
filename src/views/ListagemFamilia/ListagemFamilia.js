import React from "react";

import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
// Biblioteca de Componentes
//&
// Views
import Page from "views/Page/Page";

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


class ListagemFamilias extends Page {
    constructor() {
        super(); 
    }
    familiasLista = async () =>{
        var result 
    }
    componentDidMount() {
        //api/familias
    }

    authenticated = () => {
        return (
            this.unauthenticated()
        );

    }

    //Alterando para Authenticated pra manter o padrão do resto do sistema.
    unauthenticated = () => {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    {/* <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem> */}
                </main>
            </React.Fragment>
        );
    };

}