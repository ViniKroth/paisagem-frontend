import React from "react";
import { Switch, Route } from "react-router-dom";

// Views
import LoginPage from "views/LoginPage/LoginPage";
import HomePage from "views/HomePage/HomePage";
import Page from "views/Page/Page";
import BlankPage from "views/BlankPage/BlankPage";
import CadastroEspecie from 'views/CadastroEspecie/CadastroEspecie.js';
import CadastroFamilia from 'views/CadastroFamilia/CadastroFamilia.js';
import CadastroIndividuo from 'views/CadastroIndividuo/CadastroIndividuo.js';

// Users
import UserEditPage from "views/UserPages/CreateUpdate/UserEditPage";
import UserDetailsPage from "views/UserPages/Details/UserDetailsPage";
import UserListPage from "views/UserPages/List/UserListPage";
import ImagemReferencia from "../components/DetalhesEspecieForm/ImagemReferencia";
import DetalheEspecie from "../views/DetalheEspecies/DetalheEspecie";
import ListagemEspecie from "../views/ListagemEspecie/ListagemEspecie.js";

export default () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/protected" component={Page} />
        <Route path="/image" component={ImagemReferencia} />

        {/* User Container */}
        <Route path="/users/list" component={UserListPage} />
        <Route path="/users/details/:id" component={UserDetailsPage} />
        <Route path="/users/edit" component={UserEditPage} />
        <Route path="/users/edit/:id" component={UserEditPage} />
        {/* End of User Container */}
        <Route path="/especies/detalhe/:id" component={DetalheEspecie} />
        <Route path='/especies/cadastro' component={CadastroEspecie} />
        <Route path='/especies/listas' component={ListagemEspecie} />

        <Route path='/familia/cadastro' component={CadastroFamilia} />
        <Route path='/individuos/cadastro' component={CadastroIndividuo} />

        {/* 404 - Page not Found */}
        <Route component={BlankPage} />
      </Switch>
    </main>
  );
};
