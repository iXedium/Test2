import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

const Profile = props => {
  const [isSave, setIsSave] = useState(false);
  const editToggleHandler = () => {
      if(isSave){
        
      }
      setIsSave(!isSave);
    };
  return (
    <div className="x-profile">
      <h1 className="x-page-title">My Profile</h1>
      <p className="x-breadcrumb">BREADCRUMB</p>
      <form className="x-profile-container">
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
            <input type="text" value={props.first} readOnly />
          </div>
          <div className="x-profile-container-block">
            <label>Last Name</label>
            <input type="text" value={props.last} readOnly />
          </div>
          <div className="x-profile-container-block">
            <label>Administrator Level</label>
            <input type="text" value={props.admin} readOnly />
          </div>
          <div className="x-profile-container-block">
            <label>Email Address</label>
            <input type="text" value={props.email} readOnly />
          </div>
          <div className="x-profile-container-block">
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
    email: state.auth.email
  };
};

export default connect(mapStateToProps, null)(Profile);
