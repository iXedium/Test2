import React from "react";
import AuthModal from "../Modals/AuthModal";
import { Button } from "reactstrap";

const EmailSent = props => {
  const okHandler = event => {
    event.preventDefault();
    props.history.push("/");
  };
  console.log("props.location.state", props.location.state);
  return (
    <AuthModal classNames="x-modal-reset-password">
      <h3>Reset Password</h3>
      <p>
        Thank you. A reset password link has been sent to{" "}
        {props.location.state.email}. Please check your junk/spam folder.
      </p>
      <Button color="primary" onClick={okHandler}>
        OK
      </Button>
    </AuthModal>
  );
};

export default EmailSent;
