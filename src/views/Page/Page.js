import React from "react";
import "./styles.css";

import { validToken } from "services/auth/auth";

// Internal Components
import Header from "components/Header/Header";
import LoginContext from "../../components/Context/LoginContext/LoginContext";
import AppContext from "../../components/Context/AppContext";

class Page extends React.Component {
  /*
     *  Helpers
     */

  redirect = path => {
    const { history } = this.props;
    history.push(path);
  };

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

  render() {
    return (
      <AppContext.Consumer>
        {appValue => {
          const { headerVisible } = appValue;

          return (
            <LoginContext.Consumer>
              {loginValue => {
                const { isAuthenticated } = loginValue;

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
        }}
      </AppContext.Consumer>
    );
  }
}

export default Page;
