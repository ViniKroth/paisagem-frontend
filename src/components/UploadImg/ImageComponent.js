import React from "react";
//import "./ImageComponentStyle.css";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button'


// Biblioteca de Componentes
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
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    //NOTAS PARA FAZER: renderizar Lista de Imagens para Upload
    render() {
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            imagePreview = (<div className="previewText"> Selecione uma Imagem para Visualização</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />
                    <Button id="submitBtn" 
                        variant="contained" color="primary" className="btn"
                        onClick={(e) => this._handleSubmit(e)}>ENVIAR</Button>
                    <div className="imgPreview" align="center">
                        {imagePreview}

                    </div>
                    <div>
                        {this.state.list}
                    </div>

                </form>

            </div>

        )
    }
}

export default ImageComponent;