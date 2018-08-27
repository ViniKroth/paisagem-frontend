import React from "react";
import Page from "views/Page";
import UserForm from "components/UserForm";

class EditUserPage extends Page {
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

export default EditUserPage;
