import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";

import * as actions from "../../store/actions/index";
import { logo_img } from "../../assets/images";
import { updateObject, checkValidity } from "../../shared/utility";

const Login = props => {
  const [authForm, setAuthForm] = useState({
    username: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Username"
      },
      value: "",
      validation: {
        required: true,
        isEmail: false
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    }
  });

  useEffect(() => {
    if (props.authRedirectPath !== "/") {
      props.onSetAuthRedirectPath();
    }
    // console.log("Login useEffect");
  }, [props]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true
      })
    });
    setAuthForm(updatedControls);
  };

  const loginHandler = event => {
    event.preventDefault();
    props.onAuth(authForm.username.value, authForm.password.value);
  };

  return (
    <div className="x-login">
      <div className="x-login__modal">
        <div className="x-login__logo">
          <img src={logo_img} alt="Logo" />
        </div>
        <div className="x-login__form">
          <form>
            <input
              type="text"
              placeholder="Username"
              name="usename"
              onChange={event => inputChangedHandler(event, 'username')}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={event => inputChangedHandler(event, 'password')}
            />
            <hr />
            <Button color="primary" onClick={loginHandler}>
              Login
            </Button>
            <p>
              Did you <a href="/#">forget your password?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) =>
      dispatch(actions.auth(email, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
