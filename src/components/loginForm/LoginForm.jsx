import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LoginForm.css";

const baseUrl = import.meta.env.VITE_BASE_URL;


const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const LoginForm = (props) => {
  const [login, setLogin] = useState(true);

  const loginInitialValues = { email: "", password: "" };
  const signupInitialValues = { name: "", email: "", password: "" };

  const handleSubmit = async (values,{resetForm}) => {
    const loginPromise = axios.post(
      `${baseUrl}/${login ? "login" : "register"}`,
      values
    );
    toast.promise(loginPromise, {
      pending: login ? "Logging in..." : "Signing up...",
      success: login ? "Logged in successfully!" : "Signed up successfully!",
      error: login
        ? "Login failed. Please try again!"
        : "Signup failed. Please try again!",
    });

    try {
      const res = await loginPromise;
      login && localStorage.setItem("token", res.data.token);
      login && props.setName(res.data.name)
      login ? props.setLoginFormOpen(false) : setLogin(true);
      login && props.setToken(res.data.token);
      resetForm();
    } catch (error) {
      console.error("Error during referral submission:", error);
    }
  };

  function handleLinkClick() {
    setLogin((prev) => !prev);
  }

  function handleFormContainerClick(e) {
    e.stopPropagation();
    props.setLoginFormOpen(false);
  }

  function handleFormClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      className="formContainer"
      style={{ display: props.loginFormOpen ? "flex" : "none" }}
      onClick={handleFormContainerClick}
    >
      <Formik
        initialValues={login ? loginInitialValues : signupInitialValues}
        validationSchema={login ? LoginSchema : SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form" onClick={handleFormClick}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography variant="h4">{login ? "Login" : "Signup"}</Typography>
              {!login && (
                <Field
                  name="name"
                  as={TextField}
                  label="name"
                  variant="outlined"
                  fullWidth
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              )}
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {login ? "Login" : "Signup"}
              </Button>
              {login ? (
                <p>
                  Don&apos;t have an account?{" "}
                  <Link onClick={handleLinkClick}>Signup</Link>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <Link onClick={handleLinkClick}>Login</Link>
                </p>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
