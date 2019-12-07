import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions/index";
import { logo_img } from "../assets/images";
import UserHeader from "./UserHeader";

const Header = props => {
  useEffect(() => {
    console.log('userId', props.userId);
     props.onFetchUser(props.token, props.userId);
    // let userData = {
    //   first: "Alireza",
    //   last: "Ershadi",
    //   email: props.email,
    //   admin: "Super Admin",
    //   userID: props.userId
    // };
    // props.onChangeProfile(userData, props.token);
    console.log('props', props)
  }, []);

  const date = new Date();
  const dateFormat = require("dateformat");

  return (
    <div className="x-header">
      <div className="x-logo">
        <img src={logo_img} alt="Logo" />
      </div>
      <div className="x-spacer"></div>
      <div className="x-date">{dateFormat(date, "longDate")}</div>
      <UserHeader admin={props.admin}>
        {props.first} {props.last}
      </UserHeader>

      <div ></div>
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
    onChangeProfile: (userData, token) =>
      dispatch(actions.changeProfile(userData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
