import React from "react";
import Page from "views/Page";
import LoginForm from "components/LoginForm";

class LoginPage extends Page {
  componentDidMount = () => {
    this.setState(() => {
      return {
        render: this.isAuthenticated()
          ? this.authenticated()
          : this.unauthenticated()
      };
    });
  };

  authenticated = () => {
    this.showHeader();
    return (
      <div className="container">
        <p>Você já está logado!</p>
      </div>
    );
  };

  unauthenticated = () => {
    this.hideHeader();
    return (
      <div>
        <LoginForm />
      </div>
    );
  };
}

export default LoginPage;
