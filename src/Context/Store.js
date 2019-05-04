import React, { useState } from 'react';

export const ColorFillContext = React.createContext('#fff');
export const ModalContext = React.createContext(false);
<<<<<<< HEAD
export const UsernameContext = React.createContext('');
export const PasswordContext = React.createContext('');
export const LevelContext = React.createContext(0);

const Store = ({ children }) => {
	const [ colorFill, setColorFill ] = useState('#fff');
	const [ modal, setmodal ] = useState(false);
	const [ username, setusername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ level, setLevel ] = useState(0);

	return (
		<ColorFillContext.Provider value={[ colorFill, setColorFill ]}>
			<ModalContext.Provider value={[ modal, setmodal ]}>
				<UsernameContext.Provider value={[ username, setusername ]}>
					<PasswordContext.Provider value={[ password, setPassword ]}>
						<LevelContext.Provider value={[ level, setLevel ]}>{children}</LevelContext.Provider>
					</PasswordContext.Provider>
				</UsernameContext.Provider>
			</ModalContext.Provider>
		</ColorFillContext.Provider>
	);
=======
export const UsernameContext = React.createContext("");
export const PasswordContext = React.createContext("");
export const RegisterContext = React.createContext(false);

const Store = ({ children }) => {
  const [colorFill, setColorFill] = useState("#fff");
  const [modal, setmodal] = useState(false);

  const [register, setRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ColorFillContext.Provider value={[colorFill, setColorFill]}>
      <ModalContext.Provider value={[modal, setmodal]}>
        <UsernameContext.Provider value={[username, setUsername]}>
          <PasswordContext.Provider value={[password, setPassword]}>
            <RegisterContext.Provider value={[register, setRegister]}>
              {children}
            </RegisterContext.Provider>
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </ModalContext.Provider>
    </ColorFillContext.Provider>
  );
>>>>>>> b9fd16b4bd2eef182d4301f37f3c49cedf3e9d2e
};

export default Store;
