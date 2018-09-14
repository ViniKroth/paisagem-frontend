import React from "react";
import { Switch, Route } from "react-router-dom";

// Wrapper para as páginas
import ViewWrapper from "../helpers/ViewWrapper";

// Users
import UserEditPage from "views/UserPages/CreateUpdate/UserEditPage";
import UserDetailsPage from "views/UserPages/Details/UserDetailsPage";
import UserListPage from "views/UserPages/List/UserListPage";

// Views
// Implementado um Wrapper que substitui o import normal para adicionar loader e outras funcionalidades.
// Ver o arquivo src/helpers/ViewWrapper.js
const Page = ViewWrapper("Page/Page");
const HomePage = ViewWrapper("HomePage/HomePage");
const LoginPage = ViewWrapper("LoginPage/LoginPage");
const BlankPage = ViewWrapper("BlankPage/BlankPage");
const CadastroEspecie = ViewWrapper("CadastroEspecie/CadastroEspecie");

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/protected" component={Page} />

      {/* User Container */}
      <Route path="/users/list" component={UserListPage} />
      <Route path="/users/details/:id" component={UserDetailsPage} />
      <Route path="/users/edit" component={UserEditPage} />
      <Route path="/users/edit/:id" component={UserEditPage} />
      {/* End of User Container */}

      <Route path="/cadastroEspecie" component={CadastroEspecie} />

      {/* 404 - Page not Found */}
      <Route component={BlankPage} />
    </Switch>
  </main>
);
