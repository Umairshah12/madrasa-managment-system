import React, { useState, useEffect } from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import "./scss/style.scss";
// import firestore from "./Component/Services/firebase";
import firebase from "./Component/Services/firebase";
import routes from "../src/routes";

// import Register from "./Component/Registration/Register";

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// );

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
// Pages
const Login = React.lazy(() => import("./Component/Login/Login"));
const Register = React.lazy(() => import("./Component/Registration/Register"));
// const Register = React.lazy(() => import("./Component/Registration/Register"));
// const RegisterStudent = React.lazy(() =>
//   import("./views/base/students/RegisterStudent")
// );

// const StudentList = React.lazy(() =>
//   import("./views/base/studentList/StudentList")
// );
// const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
// const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}
function App(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("auth", authenticated);

  return loading === true ? (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  ) : (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <PrivateRoute
            path="/dashboard"
            authenticated={authenticated}
            component={TheLayout}
          />
          <PrivateRoute
            path="/base/studentlist"
            authenticated={authenticated}
            component={TheLayout}
          />
          <PrivateRoute
            path="/base/students"
            authenticated={authenticated}
            component={TheLayout}
          />
          <PrivateRoute
            path="/base/userDetail"
            authenticated={authenticated}
            component={TheLayout}
          />
          <PrivateRoute
            path="/base/updateStudent"
            authenticated={authenticated}
            component={TheLayout}
          />
          <PublicRoute
            path="/login"
            component={Login}
            authenticated={authenticated}
          />
          <PublicRoute
            path="/register"
            component={Register}
            authenticated={authenticated}
          />
          <PublicRoute
            path="/"
            component={Login}
            authenticated={authenticated}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default withRouter(App);
