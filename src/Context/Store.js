import React, { useState } from "react";

export const ColorFillContext = React.createContext([{}, () => {}]);
export const ModalContext = React.createContext([{}, () => {}]);
export const UsernameContext = React.createContext([{}, () => {}]);
export const PasswordContext = React.createContext([{}, () => {}]);
export const VerbContext = React.createContext([{}, () => {}]);

const Store = ({ children }) => {
  const [colorFill, setColorFill] = useState("#fff");
  const [modal, setmodal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verbData, setVerbData] = useState([]);
  return (
    <ColorFillContext.Provider value={[colorFill, setColorFill]}>
      <ModalContext.Provider value={[modal, setmodal]}>
        <UsernameContext.Provider value={[username, setUsername]}>
          <PasswordContext.Provider value={[password, setPassword]}>
            <VerbContext.Provider value={[verbData, setVerbData]}>
              {children}
            </VerbContext.Provider>
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </ModalContext.Provider>
    </ColorFillContext.Provider>
  );
};

export default Store;
