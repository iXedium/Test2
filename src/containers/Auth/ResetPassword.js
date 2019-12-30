import React from "react";
import AuthModal from "../Modals/AuthModal";
import { Button } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPassword = props => {
  const formik = useFormik({
    initialValues: { email: "" },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
    }),

    onSubmit: values => {
      if (formik.isValid) {
        props.history.push({
          pathname: "/email-sent",
          state: { email: values.email }
        });
      }
    }
  });

  return (
    <AuthModal>
      <form
        onSubmit={formik.handleSubmit}
        className="x-auth-modal__children x-modal-reset-password"
      >
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
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="x-auth-modal__invalid-feedback">
            {formik.errors.email}
          </div>
        )}
        <Button type="submit" color="primary" disabled={formik.isSubmitting}>
          Reset Password
        </Button>
      </form>
    </AuthModal>
  );
};

export default ResetPassword;
