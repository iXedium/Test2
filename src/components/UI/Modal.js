import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import Backdrop from "./Backdrop";

const Modal = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={200}
      classNames="t-fade"
    >
      <React.Fragment>
        <Backdrop show clicked={props.modalClosed} />
        <div className="x-modal">{props.children}</div>
      </React.Fragment>
    </CSSTransition>
  );
};

export default Modal;
