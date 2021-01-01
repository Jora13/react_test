import React, { Component, Profiler } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile';

const App = () => {
	return (
		<div className="App-wrapper">
			<Header />

			<div className="container">
				<Sidebar />
				<div className="content">
					<Profile />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
