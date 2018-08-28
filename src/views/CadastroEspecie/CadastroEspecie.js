import React from 'react'
import "./style.css"
import ImageComponent from "components/UploadImg/ImageComponent.js"
//views
import Page from 'views/Page';

class CadastroEspecie extends Page {
	render() {
		return (
			<div>
				<p>cadastro espécie</p>
				<ImageComponent/>
			</div>
		)
	}
}

export default CadastroEspecie 