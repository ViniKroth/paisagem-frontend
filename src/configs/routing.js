import React from "react";
import { Switch, Route } from "react-router-dom";

// Views
import LoginPage from "views/LoginPage/LoginPage";
import HomePage from "views/HomePage/HomePage";
import Page from "views/Page/Page";
import BlankPage from "views/BlankPage/BlankPage";
import CadastroEspecie from 'views/CadastroEspecie/CadastroEspecie.js'

// Users
import UserEditPage from "views/UserPages/CreateUpdate/UserEditPage";
import UserDetailsPage from "views/UserPages/Details/UserDetailsPage";
import UserListPage from "views/UserPages/List/UserListPage";
import ImagemReferencia from "../components/DetalhesEspecieForm/ImagemReferencia";


export default () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/protected" component={Page} />
        <Route path="/image" component={ImagemReferencia}/>

        {/* User Container */}
        <Route path="/users/list" component={UserListPage} />
        <Route path="/users/details/:id" component={UserDetailsPage} />
        <Route path="/users/edit" component={UserEditPage} />
        <Route path="/users/edit/:id" component={UserEditPage} />
        <Route path='/cadastroEspecie' component={CadastroEspecie}/>
        {/* End of User Container */}

        {/* 404 - Page not Found */}
        <Route component={BlankPage} />
      </Switch>
    </main>
  );
};
