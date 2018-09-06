import React, { Component } from "react";

// Utilizando .js no import pois o contexto não é uma classe
import AppContext from "./AppContext.js";

// Importando outros provedores de contexto para utilizar um só no arquivo index.js.
import LoginProvider from "./LoginContext/LoginProvider.js";

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerVisible: true
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <LoginProvider>{this.props.children}</LoginProvider>
      </AppContext.Provider>
    );
  }

  //Métodos de Login
}

export default AppProvider;
