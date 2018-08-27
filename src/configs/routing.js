import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Views
import LoginPage from 'views/LoginPage'
import HomePage from 'views/HomePage'
import Page from 'views/Page'
import BlankPage from 'views/BlankPage'
import CadastroEspecie from 'views/CadastroEspecie/CadastroEspecie.js'

// Users
import UserEditPage from 'views/UserPages/CreateUpdate'
import UserDetailsPage from 'views/UserPages/Details'
import UserListPage from 'views/UserPages/List'
import RegisterPage from '../views/RegisterPage/index'

export default () => {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/login' component={LoginPage}/>
				<Route path='/protected' component={Page}/>
				<Route path='/Register' component={RegisterPage}/>

				{/* User Container */}
				<Route path='/users/list' component={UserListPage}/>
				<Route path='/users/details/:id' component={UserDetailsPage}/>
				<Route path='/users/edit' component={UserEditPage}/>
				<Route path='/users/edit/:id' component={UserEditPage}/>
				{/* End of User Container */}

				{/* 404 - Page not Found */}
				<Route component={BlankPage}/>		
			</Switch>
		</main>
	)
}
