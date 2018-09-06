import React from "react";
import "./styles.css";

import { validToken } from "services/auth/auth";

// Internal Components
import Header from "components/Header/Header";
import LoginContext from "../../components/Context/LoginContext/LoginContext";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerVisible: true // por padrão mostra o header nas páginas
    };
  }

  /*
     *  Helpers
     */

  redirect = path => {
    const { history } = this.props;
    history.push(path);
  };

  toggleHeader() {
    const { headerVisible } = this.state;
    this.setState({ headerVisible: !headerVisible });
    return this.state.showHeader;
  }

  showHeader() {
    this.setState({ headerVisible: true });
    return this.state.showHeader;
  }

  hideHeader() {
    this.setState({ headerVisible: false });
    return this.state.headerVisible;
  }

  /*
     *  Views
     */
  authenticated = () => {
    return (
      <div className="container">
        <p>Acesso liberado chefia!</p>
      </div>
    );
  };

  unauthenticated = () => {
    return (
      <div className="container">
        <p>
          Rota Protegida.{" "}
          <a onClick={() => this.redirect("/")} className="clickable">
            Afaste-se
          </a>
          !
        </p>
      </div>
    );
  };

  loading = () => {
    return (
      <div className="container">
        <p>Carregando pagina. Aguarde...</p>
      </div>
    );
  };

  render() {
    const { headerVisible } = this.state;
    return (
      <LoginContext.Consumer>
        {value => {
          const { isAuthenticated } = value;
          return (
            <React.Fragment>
              <Header display={headerVisible} />
              {!isAuthenticated()
                ? this.unauthenticated()
                : this.authenticated()}
            </React.Fragment>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Page;
