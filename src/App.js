import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Layout/Header';
import Container from './components/Verb/index';
import Modal from './components/Modal/Modal';
import Navigation from './components/Navigation/Navigation';
import DefaultLanding from './DefaultLanding';
import SignUp from './components/Navigation/SignUp';

class App extends Component {
	constructor() {
		super();

		this.state = {
			isShowing: false
		};
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	};

	render() {
		const { isShowing } = this.state;
		return (
			<div className="app">
				<Navigation />
				<Header />
				<div className="app-wrapper">
					{isShowing ? <div onClick={this.closeModalHandler} className="back-drop" /> : null}
					<Route exact path="/" component={DefaultLanding} />

					<Route exact path="/learn" component={Container} />
					<Modal show={isShowing} close={this.closeModalHandler} />
				</div>
			</div>
		);
	}
}

export default App;
