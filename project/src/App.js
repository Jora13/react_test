import React, { Component, Profiler } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
	return (
		<div className="App-wrapper">
			<Header />
			<div className="container">
				<Sidebar />
				<div className="content">
					<Route exact path="/dialog" render={() =>
						<DialogsContainer />} />
					<Route exact path="/profile" render={() =>
						<Profile />} />
					<Route exact path="/users" render={() =>
						<UsersContainer />} />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
