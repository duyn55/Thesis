import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Signin from "containers/Auth/Signin";
import Signup from "containers/Auth/Signup";
import Signout from "containers/Auth/Signout";

import Dashboard from "containers/Survey/Dashboard";
import Answer from "containers/Survey/Answer";
import SurveyNew from "containers/Survey/SurveyNew";

import Header from "containers/Header";
import Landing from "components/Landing";

import isAuthenticated from "HOC/isAuthenticated";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/signout" component={Signout} />
            <Route
              exact
              path="/surveys"
              component={isAuthenticated(Dashboard)}
            />
            <Route path="/surveys/new" component={isAuthenticated(SurveyNew)} />
            <Route
              exact
              path="/surveys/answer/:recipientId"
              component={Answer}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
