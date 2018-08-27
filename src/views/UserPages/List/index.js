import React from "react";
import Page from "views/Page";

class UserListPage extends Page {
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
    return <div>Dados dos usuários em tabela...</div>;
  };

  unauthenticated = () => {
    return (
      <div className="container">
        <p>Você precisa estar logado para visualizar a lista de usuários!</p>
      </div>
    );
  };
}

export default UserListPage;
