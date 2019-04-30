import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Form, Input } from './Navigation';

const Login = (props) => {
	const [ modal, setModal ] = useContext(ModalContext);
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);

	const toggle = () => {
		setModal(!modal);
	};
	return (
		<div className="login-form">
			<div>
				<Button onClick={this.toggle}>Login</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Login</ModalHeader>
					<ModalBody>
						<Form>
							<span>Username</span>
							<Input name="username" value="" placeholder="username" />
							<span>Password</span>
							<Input name="password" value="" placeholder="password" />
							<div>
								<Input type="checkbox" name="remeber me" /> remember me <br />
							</div>
						</Form>
						<Button form>Login</Button>
					</ModalBody>
					<ModalFooter />
				</Modal>
			</div>
		</div>
	);
};

export default Login;
