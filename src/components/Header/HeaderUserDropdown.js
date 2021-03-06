import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

const HeaderUserDropdown = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={200}
      classNames="t-fade"
    >
      <div className="x-header-user-dropdown">{props.children}</div>
    </CSSTransition>
  );
};

export default HeaderUserDropdown;
