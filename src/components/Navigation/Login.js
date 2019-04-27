import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			modale: false,
			username: '',
			password: ''
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState((prevState) => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div className="login-form">
				<div>
					<button className="main-button" onClick={this.toggle}>
						Login
					</button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Login</ModalHeader>
						<ModalBody>
							<form className="sign-up-form">
								<span>Username</span>
								<input className="sign-up-input" name="username" value="" placeholder="username" />
								<span>Password</span>
								<input className="sign-up-input" name="password" value="" placeholder="password" />
								<div>
									<input className="sign-up-input" type="checkbox" name="remeber me" /> remember me{' '}
									<br />
								</div>
							</form>
							<button className="form-button">Login</button>
						</ModalBody>
						<ModalFooter />
					</Modal>
				</div>
			</div>
		);
	}
}

export default Login;
