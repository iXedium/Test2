import React from "react";
import { user_icon } from "../assets/images";
import { FaCaretDown } from "react-icons/fa";

const UserHeader = props => {
  let admin = "";
  switch (props.admin) {
    case "Super Admin":
      admin = "ADMIN";
      break;
    default:
      admin = "USER";
  }

  return (
    <div className="x-user-header">
      <img src={user_icon} alt="user icon" className="x-user-header__img" />
      <div className="x-user-header__text">
        <div className="x-user-header__admin">
          {admin}
          <FaCaretDown />
        </div>
        <div className="x-user-header__name">{props.children}</div>
      </div>
    </div>
  );
};

export default UserHeader;
