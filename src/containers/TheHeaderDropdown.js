import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { withRouter } from "react-router-dom";
// import Logout from "../views/base/Logout/Logout";
import firebase from "../Component/Services/firebase";
import userImg from "../../src/assets/images//user.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const TheHeaderDropdown = (props) => {
  // console.log("props", props);
  const logout = () => {
    firebase.auth().signOut();
    props.history.push("/login");
    toast("User Logout Successfully!", {
      type: "success",
    });
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={userImg}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem divider />
        <CDropdownItem onClick={logout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default withRouter(TheHeaderDropdown);
