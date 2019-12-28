import React, { useState, useEffect } from "react";
import AuthModal from "../Modals/AuthModal";
import { Button } from "reactstrap";
import { useFormik } from "formik";

const ResetPassword = props => {
  const [value, setValue] = useState("");
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  useEffect(() => {
    console.log('formik', formik);
  }, [formik]);

  // const inputChangedHandler = event => {
  //   setValue(event.target.value);
  // };

  const resetHandler = event => {
    event.preventDefault();
    props.history.push({ pathname: "/email-sent", state: { email: value } });
  };

  return (
    <AuthModal classNames="x-modal-reset-password">
      <h3>Reset Password</h3>
      <p>
        Enter the email address associated with your account, and we’ll email
        you a link to reset your password
      </p>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Button
        type="submit"
        color="primary"
        onClick={resetHandler}
        // disabled={!formik.isSubmitting}
      >
        Reset Password
      </Button>
    </AuthModal>
  );
};

export default ResetPassword;
