import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Form, Input } from './Navigation';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';

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
				<Button onClick={toggle}>Login</Button>
				<Modal isOpen={modal} toggle={toggle}>
					<ModalHeader toggle={toggle}>Login</ModalHeader>
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
