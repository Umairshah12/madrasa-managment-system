import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import firebase from "../../Component/Services/firebase";
import CIcon from "@coreui/icons-react";
import { SignIn } from "../Services/auth";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "../Students/node_modules/react-toastify/dist/ReactToastify.css";
toast.configure();

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let hideTimeout;
  let history = useHistory();
  // useEffect(() => {
  //   let user = firebase.auth().currentUser;
  //   console.log("user", user);
  //   //if user redirect dashboard
  //   if (user && user.uid) {
  //     history.push("/");
  //   }
  // }, [firebase]);

  // useEffect(() => {
  //   clearTimeout(hideTimeout);
  // }, []);

  const LoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await SignIn(email, password);
      props.history.push("/dashboard");

      setEmail("");
      setPassword("");
      toast("User Login Successfully!", {
        type: "success",
      });
      console.log("user login successfull");
    } catch (error) {
      toast("Login Error! Please try again", {
        type: "error",
      });
      setError(error.message);
      hideTimeout = setTimeout(() => setError(""), 4000);
      // setError(error.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="Email..."
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </CInputGroup>
                    <CRow>
                      {error ? <h6 className="text-danger">{error}</h6> : null}
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          onClick={LoginSubmit}
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%", backgroundColor: "#173f6a !important" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default withRouter(Login);
