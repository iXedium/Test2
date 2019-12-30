import React from "react";
import { logo_img } from "../../assets/images";

const AuthModal = props => {
  return (
    <div className="x-auth-modal">
      <div className="x-auth-modal__container">
        <div className="x-auth-modal__logo">
          <img src={logo_img} alt="Logo" />
        </div>
        {/* <form className={`x-auth-modal__children ${props.classNames}`}>{props.children}</form> */}
        {props.children}
      </div>
    </div>
  );
};

export default AuthModal;
