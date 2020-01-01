import React from "react";
import { NavLink } from "react-router-dom";

const SideButton = props => {
  return (
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName="active"
      className="x-side-button"
    >
      <div className="t-shift-right">
        <img src={props.imageSource} alt={props.title}></img>
        <span>{props.title}</span>
      </div>
    </NavLink>
  );
};

export default SideButton;
