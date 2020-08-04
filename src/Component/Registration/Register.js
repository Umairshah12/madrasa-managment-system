import React, { useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useState } from "react";
import firebase from "../Services/firebase";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  let user = firebase.auth().currentUser;
  let history = useHistory();
  useEffect(() => {
    //if user redirect dashboard
    if (user) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      //   console.log("user", user);
      await firebase.firestore().collection("users").doc(user.uid).set({
        username,
        id: user.uid,
        email,
      });
      setEmail("");
      setPassword("");
      setUsername("");
      props.history.replace("/dashboard");
    } catch (error) {
      setError(error.message);
      setEmail("");
      setPassword("");
      setUsername("");
      // console.log(error.message);
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register User</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>

                  <CButton color="success" onClick={handleSubmit} block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                {error ? <h6 className="text-danger">{error}</h6> : null}

                <CCol md="12" className="text-left">
                  <CButton color="link" className="px-0 ">
                    Already have an account? <Link to="/login">Login</Link>
                  </CButton>
                </CCol>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default withRouter(Register);
