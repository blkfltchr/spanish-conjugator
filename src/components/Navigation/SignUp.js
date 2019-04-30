import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Form, Button, Input } from './Navigation';

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
					<Button alt onClick={this.toggle}>
						Sign Up
					</Button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
						<ModalBody>
							<Form>
								<span>Username</span>
								<Input className="sign-up-input" name="username" value="" placeholder="Username" />
								<span>Email</span>
								<Input className="sign-up-input" name="email" value="" placeholder="Email" />
								<span>password</span>
								<Input className="sign-up-input" name="password" value="" placeholder="Password" />
								<span>Retype Password</span>
								<Input
									className="sign-up-input"
									name="password"
									value=""
									placeholder="Retype password"
								/>
								<Button form>Register</Button>
							</Form>
						</ModalBody>
						<ModalFooter />
					</Modal>
				</div>
			</div>
		);
	}
}

export default SignUp;
