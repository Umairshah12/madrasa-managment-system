import React, { useEffect, useState } from "react";
import { CWidgetDropdown, CRow, CCol } from "@coreui/react";
import { Link } from "react-router-dom";
// import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";
import firebase from "../../Component/Services/firebase";

// gradient-primary
const WidgetsDropdown = () => {
  const [count, setCount] = useState("");
  // render

  useEffect(() => {
    firebase
      .firestore()
      .collection("students")
      .get()
      .then(function (querySnapshot) {
        // console.log(querySnapshot.size);
        setCount(querySnapshot.size);
      });
  }, []);

  // render
  return (
    <CRow>
      <CCol sm="4" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header={String(count)}
          text="Student Registerd"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="4" lg="4">
        <Link to="/students">
          <CWidgetDropdown
            color="gradient-danger"
            header="UP COMING "
            text="Student Registration"
            footerSlot={
              <ChartBarSimple
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                backgroundColor="rgb(250, 152, 152)"
              />
            }
          ></CWidgetDropdown>
        </Link>
      </CCol>

      <CCol sm="4" lg="4">
        <Link to="/studentlist">
          <CWidgetDropdown
            color="gradient-warning"
            header="REGISTERD"
            text=" Student List"
            footerSlot={
              <ChartLineSimple
                className="mt-3"
                style={{ height: "70px" }}
                backgroundColor="rgba(255,255,255,.2)"
                options={{ elements: { line: { borderWidth: 2.5 } } }}
                pointHoverBackgroundColor="warning"
                // label="Members"
                // labels="months"
              />
            }
          ></CWidgetDropdown>
        </Link>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
