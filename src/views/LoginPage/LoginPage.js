import React from "react";
import Page from "views/Page/Page";
import LoginForm from "components/LoginForm/LoginForm";

class LoginPage extends Page {
  componentDidMount = () => {
    this.showHeader();

    //TODO - Alterar para o método renderAuthentocated da Page
    this.setState(() => {
      return {
        render: this.isAuthenticated().value
          ? this.authenticated()
          : this.unauthenticated()
      };
    });
  };

  authenticated = () => {
    return (
      <div className="container">
        <p>Você já está logado!</p>
      </div>
    );
  };

  unauthenticated = () => {
    return (
      <div>
        <LoginForm />
      </div>
    );
  };
}

export default LoginPage;
