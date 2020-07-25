import React, { lazy } from "react";
// import {} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import MainChartExample from "../charts/MainChartExample.js";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
    </>
  );
};

export default Dashboard;
