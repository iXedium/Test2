import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

const HeaderUserDropdown = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={200}
      classNames="fade"
    >
      <div
        className="x-header-user-dropdown"
        //   style={{
        //     opacity: props.show ? "1" : "0",
        //     transition: "opacity .2s ease-out"
        //   }}
      >
        {props.children}
      </div>
    </CSSTransition>
  );
};

export default HeaderUserDropdown;
