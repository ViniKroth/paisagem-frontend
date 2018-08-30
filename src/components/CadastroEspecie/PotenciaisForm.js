import React from 'react';




class PotenciaisForm extends React.Component{

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <button>Next</button>
            </form>
        );
    }
    

}
export default PotenciaisForm;