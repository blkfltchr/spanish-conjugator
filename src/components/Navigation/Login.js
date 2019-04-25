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
					<button className="log-in-button" onClick={this.toggle}>
						Login
					</button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Spanish Conjugator</ModalHeader>
						<ModalBody>
							<form>
								<input name="username" value="" placeholder="username" />
								<input name="password" value="" placeholder="password" />
							</form>
							<button>Login</button>
						</ModalBody>
						<ModalFooter />
					</Modal>
				</div>
			</div>
		);
	}
}

export default Login;
