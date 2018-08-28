import React from "react";
import Page from "views/Page/Page";
import UserForm from "components/UserForm/UserForm";

class UserEditPage extends Page {
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
    return (
      <div>
        <UserForm />
      </div>
    );
  };

  unauthenticated = () => {
    return (
      <div className="container">
        <p>Você precisa estar logado para cadastrar usuários!</p>
      </div>
    );
  };
}

export default UserEditPage;
