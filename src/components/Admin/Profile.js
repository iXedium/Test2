import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { updateObject } from "../../shared/utility";

import * as actions from "../../store/actions/index";
import { dispatch } from "../../../../../../Users/alire/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs";

const Profile = props => {
  const [userData, setUserData] = useState({
    first: "",
    last: "",
    admin: "",
    email: ""
  });
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    props.onFetchUser(props.token, props.userId);
    setUserData({
      first: props.first || "",
      last: props.last || "",
      admin: props.admin || "",
      email: props.email || ""
    });
    console.log("Profile useEffect");
  }, [props]);

  const onChangeHandler = event => {
    // console.log("event", event.target.name);
    switch (event.target.name) {
      case "first":
        setUserData(updateObject(userData, { first: event.target.value }));
        break;
      case "last":
        setUserData(updateObject(userData, { last: event.target.value }));
        break;
      case "admin":
        setUserData(updateObject(userData, { admin: event.target.value }));
        break;
      case "email":
        setUserData(updateObject(userData, { email: event.target.value }));
        break;
      default:
        break;
    }
  };

  const editToggleHandler = () => {
    if (isSave) {
      props.onSaveProfile(
        updateObject(userData, { userId: props.userId }),
        props.userKey,
        props.token
      );
    }
    setIsSave(!isSave);
    props.onFetchUser(props.token, props.userId);
  };
  return (
    <div className="x-profile">
      <h1 className="x-page-title">My Profile</h1>
      <p className="x-breadcrumb">BREADCRUMB</p>
      <form className={`x-profile-container ${isSave ? "edit" : null}`}>
        <div className="x-profile-container-header">
          <div className="x-profile-container-header-name">
            {props.first} {props.last} <span>-[{props.admin}]</span>
          </div>
          <Button color="primary" onClick={editToggleHandler}>
            {isSave ? "Save" : "Edit"}
          </Button>
        </div>
        <div className="x-profile-container-grid">
          <div className="x-profile-container-block">
            <label>First Name</label>
            <input
              type="text"
              name="first"
              value={userData.first}
              readOnly={!isSave}
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div className="x-profile-container-block">
            <label>Last Name</label>
            <input
              type="text"
              name="last"
              value={userData.last}
              readOnly={!isSave}
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div className="x-profile-container-block">
            <label>Administrator Level</label>
            <input
              type="text"
              name="admin"
              value={userData.admin}
              readOnly={!isSave}
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div className="x-profile-container-block x-col-2">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              readOnly={!isSave}
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div className="x-profile-container-block x-col-2">
            <label>Password</label>
            <input type="password" value="password" readOnly />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    first: state.user.first,
    last: state.user.last,
    admin: state.user.admin,
    email: state.auth.email,
    userKey: state.user.userKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token, userId) => dispatch(actions.fetchUser(token, userId)),
    onSaveProfile: (userData, userKey, token) =>
      dispatch(actions.changeProfile(userData, userKey, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
