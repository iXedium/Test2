import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../store/actions/index";
import { logo_img } from "../../assets/images";
import HeaderUser from "./HeaderUser";
import HeaderUserDropdown from "./HeaderUserDropdown";

const Header = props => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    props.onFetchUser(props.token, props.userId);
    // let userData = {
    //   first: "Alireza",
    //   last: "Ershadi",
    //   email: props.email,
    //   admin: "Super Admin",
    //   userID: props.userId
    // };
    // props.onChangeProfile(userData, props.token);
    // console.log('Header useEffect')
  }, [props]);

  const date = new Date();
  const dateFormat = require("dateformat");

  const dropDownHandler = () => {
    //console.log('show dropdown');
    setShowDropdown(!showDropdown);
  };

  const logoutHandler=()=>{
    props.onLogout();
  }

  return (
    <div className="x-header">
      <div className="x-logo">
        <img src={logo_img} alt="Logo" />
      </div>
      <div className="x-spacer"></div>
      <div className="x-date">{dateFormat(date, "longDate")}</div>
      <HeaderUser admin={props.admin} onClick={dropDownHandler}>
        {props.first} {props.last}
        <HeaderUserDropdown show={showDropdown}>
          <Link to='/profile' exact='true'>
            Edit Profile
          </Link>
          <li className="x-header-user-dropdown-logout" 
           onClick={logoutHandler}
          >Logout</li>
        </HeaderUserDropdown>
      </HeaderUser>

      <div></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // email: state.auth.email,
    token: state.auth.token,
    userId: state.auth.userId,
    first: state.user.first,
    last: state.user.last,
    admin: state.user.admin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token, userID) => dispatch(actions.fetchUser(token, userID)),
    // onChangeProfile: (userData, token) =>
    //   dispatch(actions.changeProfile(userData, token)),
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
