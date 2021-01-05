import React, { Component, Profiler } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom"

const App = (props) => {

	return (
		<div className="App-wrapper">
			<Header />
			<div className="container">
				<Sidebar state={props.state.sidebar} />
				<div className="content">
					<Route exact path="/dialog" render={() =>
						<Dialogs
							state={props.state.dialogsPage} dispatch={props.dispatch} />} />
					<Route exact path="/profile" render={() =>
						<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
