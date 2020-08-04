import React, { useState, useEffect } from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import firebase from "./Component/Services/firebase";

import "./scss/style.scss";

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
// Pages
const Login = React.lazy(() => import("./Component/Login/Login"));
const Register = React.lazy(() => import("./Component/Registration/Register"));

function App(props) {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/dashboard" exact component={TheLayout} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/students" exact component={TheLayout} />
          <Route path="/studentlist" exact component={TheLayout} />
          <Route path="/updateStudent/:userId" exact component={TheLayout} />
          <Route path="/userDetail/:userId" exact component={TheLayout} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default withRouter(App);
