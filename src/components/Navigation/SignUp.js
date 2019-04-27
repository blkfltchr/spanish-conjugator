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
					<button className="alt-button" onClick={this.toggle}>
						Sign Up
					</button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
						<ModalBody>
							<form className="sign-up-form">
								<span>Username</span>
								<input className="sign-up-input" name="username" value="" placeholder="Username" />
								<span>Email</span>
								<input className="sign-up-input" name="email" value="" placeholder="Email" />
								<span>password</span>
								<input className="sign-up-input" name="password" value="" placeholder="Password" />
								<span>Retype Password</span>
								<input
									className="sign-up-input"
									name="password"
									value=""
									placeholder="Retype password"
								/>
								<button className="form-button">Register</button>
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
