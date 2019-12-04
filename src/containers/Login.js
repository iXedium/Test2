import React from "react";
import { Button } from "reactstrap";

import { logo_img } from "../assets/images";

const Login = () => {
  return (
    <div className="x-login">
      <div className="x-login__modal">
        <div className="x-login__logo">
          <img src={logo_img} alt="Logo" />
        </div>
        <div className="x-login__form">
          <form>
            <input type="text" placeholder="Username" name="usename" />
            <input type="password" placeholder="Password" name="password" />
            <hr />
            <Button color="primary">Login</Button>
            <p>
              Did you <a href="/#">forget your password?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
