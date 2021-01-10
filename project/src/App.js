import React, { Component, Profiler } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
	return (
		<div className="App-wrapper">
			<HeaderContainer />
			<div className="container">
				<Sidebar />
				<div className="content">
					<Route exact path="/dialog" render={() =>
						<DialogsContainer />} />
					<Route path="/profile/:userId?" render={() =>
						<ProfileContainer />} />
					<Route exact path="/users" render={() =>
						<UsersContainer />} />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
