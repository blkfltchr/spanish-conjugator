import React, { useState } from "react";

export const ColorFillContext = React.createContext("#fff");
export const ModalContext = React.createContext(false);
export const UsernameContext = React.createContext("");
export const PasswordContext = React.createContext("");

const Store = ({ children }) => {
  const [colorFill, setColorFill] = useState("#fff");
  const [modal, setmodal] = useState(false);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ColorFillContext.Provider value={[colorFill, setColorFill]}>
      <ModalContext.Provider value={[modal, setmodal]}>
        <UsernameContext.Provider value={[username, setusername]}>
          <PasswordContext.Provider value={[password, setPassword]}>
            {children}
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </ModalContext.Provider>
    </ColorFillContext.Provider>
  );
};

export default Store;
