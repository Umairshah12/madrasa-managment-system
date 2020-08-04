import React, { useEffect, useState } from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import { useHistory } from "react-router-dom";
import firebase from "../../src/Component/Services/firebase";
// import routes from "../routes";
const TheLayout = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let user = firebase.auth().currentUser;
    if (user && !user.uid) {
      history.push("/login");
    }
    // no user redirect to login
    //h.push("/login")
  }, [firebase]);

  // console.log("user", user);
  if (loading) {
    return <>Loading...</>;
  }
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
