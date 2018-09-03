import React from "react";
import "./ImageComponentStyle.css"
import { withRouter } from "react-router-dom";
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

const styles = theme => ({
    buttons: {
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        marginTop: theme.spacing.unit * 3
    }
});

class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            imageUpload: [],
            renderList: [],
        };
    }
    //Função acionada quando clicado no upload
    _handleSubmit(e) {
        e.preventDefault();
        //Aqui vai ser feito o upload para a api e depois inserido no banco

        //Tu não consegue alterar nada do state direto, tu teria que fazer diferente
        // this.state.imageUpload.push(this.state.file); <-- Aqui, linha 21

        var imageUploadAtual = this.state.imageUpload //Pega o status atual
        imageUploadAtual.push(this.state.file) //Na parte do file tanto faz usar o stateAtual ou o this.state

        this.setState({ imageUpload: imageUploadAtual }, () => {
            //Passei teus console.log pra ca, pq o setState é assincrono, ele não roda exatamente em ordem, e assim tu garante que ele vai chamar o console depois que terminar o setState
            console.log(this.state.imageUpload)
            console.log('UPLOAD', this.state.file);
        });
    }

    _handleImageChange(e) {
        e.preventDefault();

        //leitura do arquivo (função pronta)
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {

            console.log(file)
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
    }
    //NOTAS PARA FAZER: renderizar Lista de Imagens para Upload
    render() {
        const { classes } = this.props;
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} height="290" width="490" />);
        } else {
            imagePreview = (<Typography variant="subheading" gutterBottom>
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

            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />

                    <Button id="submitBtn"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={(e) => this._handleSubmit(e)}>
                        ENVIAR
                        </Button>
                    <div className="imgPreview" >
                        {imagePreview}
                    </div>
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

        )
    }
}

export default withStyles(styles)(ImageComponent);