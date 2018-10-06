import React from "react";

import Alert from '../AlertDialog/Alert.js';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";



const styles = theme => ({
    buttons: {
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginBottom : theme.spacing.unit * 3
    }
});

class ImgForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: {},
            imagePreviewUrl: '',
            qntImagensError: false,
            imageUpload: [],
        };
    }
    //Função acionada quando clicado no upload
    _handleSubmit(e) {
        e.preventDefault();
        //Aqui vai ser feito o upload para a api e depois inserido no banco
        this.setState({qntImagensError : false})
        //Tu não consegue alterar nada do state direto, tu teria que fazer diferente
        // this.state.imageUpload.push(this.state.file); <-- Aqui, linha 21
       
            var imageUploadAtual = this.state.imageUpload //Pega o status atual
            this.state.file.tipo = this.state.tipoImg //pega o tipo de imagem do componente switch
            imageUploadAtual.push(this.state.file) //Na parte do file tanto faz usar o stateAtual ou o this.state

            this.setState({ imageUpload: imageUploadAtual }, () => {
                //Passei teus console.log pra ca, pq o setState é assincrono, ele não roda exatamente em ordem, e assim tu garante que ele vai chamar o console depois que terminar o setState
                //console.log(this.state.imageUpload)
                //console.log('UPLOAD', this.state.file);
            });
            this.props.handleChangeImage(this.state);
            
    }

    _handleImageChange(e) {
        e.preventDefault();

        //leitura do arquivo (função pronta)
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {

            //console.log(file)
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });

        }
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file)
        }
    }
    _handleDelete(row) {
        var i = row.rowIndex;
        document.getElementById('imgTable').deleteRow(i);

        for (var j = 0; j < this.state.imageUpload.length; j++) {
            if (this.state.imageUpload[j] === row.state.file) {
                var list = this.state.imageUpload.splice(j, 1);
                this.setState({ imageUpload: list })
                //console.log('AQUI', this.state.imageUpload)
            }
        }

    }
    handleChangeTipoImg = name => event => {
        if(event.target.checked){
            this.setState({ [name]: "desenho" });
        }else {
            this.setState({ [name]: "imagem" });
        }
        
      };

    render() {
        
        const { classes } = this.props;
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (
                
            <img src={imagePreviewUrl} height="290" width="490" />
        );
        } else {
            imagePreview = (<Typography variant="caption" gutterBottom>
                Selecione uma Imagem para Visualização
          </Typography>);
        }
        const lista = (
            [].concat(this.state.imageUpload).map((dado, i) => {
                return <TableRow key={i}>
                    <TableCell>
                        {dado.name}
                    </TableCell>
                    
                    <TableCell>
                        <IconButton className={classes.button} aria-label="Delete" color="primary" onClick={(e) => this._handleDelete(this)}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                  
                </TableRow>;
            })
        )

        return (
            <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="subheading" gutterBottom>
                            Imagens
                    </Typography>
                </Grid>
             <Grid item xs={12}>
            
                <div className="previewComponent">
                    <form onSubmit={(e) => this._handleSubmit(e)}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography variant="caption" gutterBottom>
                                Selecione uma imagem e clique em enviar. Lembre que você pode adicionar uma descrição para cada imagem!
                            </Typography>
                            
                                <input className="fileInput"
                                    type="file"
                                    onChange={(e) => this._handleImageChange(e)} />         
                            
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="DescricaoImg"
                                    name="DescricaoImg"
                                    label="Descrição da Imagem"
                                    
                                    //onChange={}
                                    
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button id="submitBtn"
                                    variant="contained"
                                    color="primary"
                                    
                                        className={classes.button}
                                        onClick={(e) => this._handleSubmit(e)}>
                                        ENVIAR
                                    </Button>
                                    </Grid>
                                      
                                    <Grid item xs={12}>   
                                        <div className="imgPreview" >
                                                        
                                            {imagePreview}
                                        </div>
                                
                            </Grid>
                    </Grid>
                </form>
                
                {
                    this.state.imageUpload.length === 0
                        ?
                        ""
                        :
                        <Table className={classes.table} id="imgTable">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagem</TableCell> 
                                    
                                    <TableCell>Deletar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{lista}</TableBody>
                        </Table>

                }

            </div>
            </Grid>
            </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Button
                            id="back"
                            onClick={e => this.props.onBack(e)}
                            variant="contained"
                            className={classes.button}
                        >
                            VOLTAR
                        </Button>
                        </Grid>
                        <Grid item xs={6}>
                        <Button
                            id="next"
                            onClick={e => this.props.handleSubmit(e)}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            SAlVAR
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
            
        )
    }
}


export default withStyles(styles)(ImgForm);