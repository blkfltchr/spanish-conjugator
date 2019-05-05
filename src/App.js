import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Verb/index";
import Account from "./components/AccountPage/Account";
import Navigation from "./components/Navigation/Navigation";
import DefaultLanding from "./DefaultLanding";
import SignUp from "./components/Navigation/SignUp";
import Graph from "./components/Graph/Graph";
import { ProtectedRoute } from "./components/auth/protectedRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import PageNotFound from "./DefaultLanding/PageNotFound";
import SignUpPage from "./components/LoginPage/SignUpPage";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      {/* <Header /> */}
      <div className="app-wrapper">
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
    </div>
  );
};

export default App;
