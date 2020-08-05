import React from "react";

// const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const UpdateStudent = React.lazy(() =>
  import("./views/upateStudent/UpdateStudent")
);
const UserDetail = React.lazy(() => import("./views/userDetail/UserDetail"));
// here student records store
const RegisterStudent = React.lazy(() =>
  import("./views/students/RegisterStudent")
);
const StudentList = React.lazy(() => import("./views/studentList/StudentList"));
// const TheHeaderDropdown = React.lazy(() =>
//   import("./containers/TheHeaderDropdown")
// );
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// student record  ends

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/students", name: "Register Student", component: RegisterStudent },
  {
    path: "/studentList",
    name: "Student list",
    component: StudentList,
    exact: true,
  },
  {
    path: "/studentlist/update/:userId",
    name: "Update Student",
    component: UpdateStudent,
  },
  {
    path: "/studentlist/detail/:userId",
    name: "User Detail",
    component: UserDetail,
  },

  // { path: "/base", name: "Base", component: Cards, exact: true },

  // {
  //   path: "/students",
  //   name: "Register Student",
  //   component: RegisterStudent,
  // },
  // {
  //   path: "/studentList",
  //   name: "Student list",
  //   component: StudentList,
  // },
  // {
  //   path: "/updateStudent/",
  //   name: "Update Student",
  //   component: UpdateStudent,
  // },

  // {
  //   path: "/userDetail/",
  //   name: "User Detail",
  //   component: UserDetail,
  // },
  // {
  //   path: "/login",
  //   component: TheHeaderDropdown,
  // },
];

export default routes;
