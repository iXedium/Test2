import React from "react";
import { user_icon } from "../../assets/images";
import { FaCaretDown } from "react-icons/fa";

const HeaderUser = props => {
  let admin = "";
  switch (props.admin) {
    case "Super Admin":
      admin = "ADMIN";
      break;
    default:
      admin = "USER";
  }

  return (
    <div className="x-header-user" onClick={props.onClick}>
      <img src={user_icon} alt="user icon" className="x-header-user__img" />
      <div className="x-header-user__text">
        <div className="x-header-user__admin">
          {admin}
          <FaCaretDown />
        </div>
        <div className="x-header-user__name">{props.children}</div>
      </div>
    </div>
  );
};

export default HeaderUser;
