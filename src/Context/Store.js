import React, { useState } from "react";

export const ColorFillContext = React.createContext("#fff");
export const ModalContext = React.createContext(false);
export const UsernameContext = React.createContext("");
export const PasswordContext = React.createContext("");
export const RegisterContext = React.createContext(false);
export const LevelContext = React.createContext(0);
export const VerbContext = React.createContext([{}, () => {}]);

const Store = ({ children }) => {
  const [colorFill, setColorFill] = useState("#fff");
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState(0);
  const [verbData, setVerbData] = useState([]);

  return (
    <ColorFillContext.Provider value={[colorFill, setColorFill]}>
      <ModalContext.Provider value={[modal, setModal]}>
        <UsernameContext.Provider value={[username, setUsername]}>
          <PasswordContext.Provider value={[password, setPassword]}>
            <RegisterContext.Provider value={[register, setRegister]}>
              <LevelContext.Provider value={[level, setLevel]}>
                <VerbContext.Provider value={[verbData, setVerbData]}>
                  {children}
                </VerbContext.Provider>
              </LevelContext.Provider>
            </RegisterContext.Provider>
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </ModalContext.Provider>
    </ColorFillContext.Provider>
  );
};

export default Store;
