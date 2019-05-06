import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import Account from "./components/AccountPage/Account";
import Navigation from "./components/Navigation/Navigation";
import DefaultLanding from "./DefaultLanding";
import SignUp from "./components/Navigation/SignUp";
import Graph from "./components/Graph/Graph";
import { ProtectedRoute } from "./components/auth/protectedRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import PageNotFound from "./DefaultLanding/PageNotFound";
import SignUpPage from "./components/LoginPage/SignUpPage";
import Sidebar from "./components/Navigation/Sidebar";
import styled from "styled-components";
import { ModalContext, RegisterContext } from "./Context/Store";

const App = () => {
  const [modal] = useContext(ModalContext);
  const [register] = useContext(RegisterContext);
  return (
    <div>
      {/* <Header /> */}
      <ContainingDiv>
        <div className="app-wrapper">
          <Navigation />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/my-account" component={Account} />
            <ProtectedRoute exact path="/learn" component={Container} />
            <Route exact path="/progress" component={Graph} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </div>
        {modal ? <Sidebar /> : null}
      </ContainingDiv>
    </div>
  );
};

export default App;

const ContainingDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid red;
`;
