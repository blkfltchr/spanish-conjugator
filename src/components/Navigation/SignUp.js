import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			modale: false,
			username: '',
			password: '',
			firstName: '',
			lastName: '',
			email: ''
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
			<div className="sign-up-form">
				<div>
					<button className="sign-up-button" onClick={this.toggle}>
						Sign Up
					</button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Spanish Conjugator</ModalHeader>
						<ModalBody>
							<form>
								<input name="username" value="" placeholder="username" />
								<input name="password" value="" placeholder="password" />
								<input name="firstName" value="" placeholder="first name" />
								<input name="lastName" value="" placeholder="last name" />
								<input name="email" value="" placeholder="@example.com" />
								<button className="register-button">Register</button>
							</form>
						</ModalBody>
						<ModalFooter />
					</Modal>
				</div>
			</div>
		);
	}
}

export default SignUp;
