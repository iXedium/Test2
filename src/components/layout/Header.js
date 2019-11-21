import React from "react";
import logoImage from "../../assets/images/logo_splash.svg";

const Header = () => {
  const date = new Date();
  const dateFormat = require("dateformat");
  
  return (
    <div className="x-header">
      <div className="x-logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="x-spacer"></div>
      <div className="x-date">{dateFormat(date, "longDate")}</div>
      <div className="x-user">User</div>
    </div>
  );
};

export default Header;
