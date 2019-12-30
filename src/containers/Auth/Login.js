import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as actions from "../../store/actions/index";
import AuthModal from "../Modals/AuthModal";

const Login = props => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Username must be an email address")
        .required("Username is required"),
      password: Yup.string().required("Password is required")
    }),

    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      if (formik.isValid) {
        props.onAuth(values.username, values.password);
      }
    }
  });

  useEffect(() => {
    if (props.authRedirectPath !== "/") {
      props.onSetAuthRedirectPath();
    }
  }, [props]);

  useEffect(() => {
    console.log("loading", props.loading);
  }, [props.loading]);


  return (
    <AuthModal>
      <form
        className="x-auth-modal__children x-modal-login"
        onSubmit={formik.handleSubmit}
      >
        {props.error && <div className="x-auth-modal__invalid-feedback">{props.error.message}</div>}
        <input
          type="email"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="x-auth-modal__invalid-feedback">
            {formik.errors.username}
          </div>
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="x-auth-modal__invalid-feedback">
            {formik.errors.password}
          </div>
        )}
        <hr />
        <Button color="primary" type="submit" disabled={props.loading}>
          Login
        </Button>
        <p>
          Did you <a href="/reset-password">forget your password?</a>
        </p>
      </form>
    </AuthModal>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
