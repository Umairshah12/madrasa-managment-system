import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CBadge,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import { withRouter } from "react-router-dom";
import firebase from "../../../Component/Services/firebase";

function UserDetail(props) {
  let idUrl = props.location.state.id || {};
  const [userName, setUserName] = useState("");
  const [userFname, setUserFname] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [dob, setdob] = useState("");
  const [primaryCntct, setPrimaryCntct] = useState("");
  const [secondaryCnct, setSecondaryCntct] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    let docRef = firebase.firestore().collection("students").doc(idUrl);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          setUserName(doc.data().username);
          setUserFname(doc.data().userfname);
          setCNIC(doc.data().cnic);
          setdob(doc.data().dob);
          setPrimaryCntct(doc.data().primarycntct);
          setSecondaryCntct(doc.data().secondarycnct);
          setAddress(doc.data().address);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className="card">
      <CCardHeader>
        <CBadge style={{ fontSize: "17px" }} className="mr-1" color="primary">
          SINGLE USER DETAIL
        </CBadge>
      </CCardHeader>

      <div className="card-body">
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>USER NAME : {userName} </CCardHeader>
              <CCardBody>
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>User Name:</td>
                      <td>
                        <strong>{userName}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>User FName:</td>
                      <td>
                        <strong>{userFname}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>CNIC:</td>
                      <td>
                        <strong>{CNIC}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Date Of Birth:</td>
                      <td>
                        <strong>{dob}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Primary Contact:</td>
                      <td>
                        <strong>{primaryCntct}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Secondary Contact:</td>
                      <td>
                        <strong>{secondaryCnct}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>
                        <strong>{address}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </div>
  );
}

export default UserDetail;
