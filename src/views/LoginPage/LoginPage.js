import React from "react";
import Page from "views/Page/Page";
import LoginForm from "components/LoginForm/LoginForm";

class LoginPage extends Page {
  componentDidMount = () => {
    this.setState({ render: this.unauthenticated() });
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
