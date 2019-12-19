import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import Backdrop from "../../components/UI/Backdrop";

const Modal = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={200}
      classNames="t-fade"
    >
      <div>
        <Backdrop show clicked={props.modalClosed} />
        <div className="x-modal">{props.children}</div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
