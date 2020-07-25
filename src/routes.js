import React from "react";

const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const UpdateStudent = React.lazy(() =>
  import("./views/base/upateStudent/UpdateStudent")
);
const UserDetail = React.lazy(() =>
  import("./views/base/userDetail/UserDetail")
);
// here student records store
const RegisterStudent = React.lazy(() =>
  import("./views/base/students/RegisterStudent")
);
const StudentList = React.lazy(() =>
  import("./views/base/studentList/StudentList")
);
// const TheHeaderDropdown = React.lazy(() =>
//   import("./containers/TheHeaderDropdown")
// );
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// student record  ends

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/base", name: "Base", component: Cards, exact: true },

  {
    path: "/base/students",
    name: "Register Student",
    component: RegisterStudent,
  },
  {
    path: "/base/StudentList",
    name: "Student list",
    component: StudentList,
  },
  {
    path: "/base/updateStudent/",
    name: "Update Student",
    component: UpdateStudent,
  },

  {
    path: "/base/userDetail/",
    name: "User Detail",
    component: UserDetail,
  },
  // {
  //   path: "/login",
  //   component: TheHeaderDropdown,
  // },
];

export default routes;
