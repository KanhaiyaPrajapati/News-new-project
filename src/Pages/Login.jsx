import { Box, Container, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import login from "../Images/ivancik.jpg";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    navigate('/dashboard')
  };

  return (
    <Container className="w-50 login-wrapper m-0 p-0">
      <Box className="row">
        <Box className="col-lg-4 col-sm-12 m-0 p-0">
          <img
            src={login}
            alt=""
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box className="col-lg-8 col-sm-12 shadow-lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="mx-auto rounded-3">
                <h4 className="mt-2">Sign In</h4>
                <hr />
                {/* <h5 className="text-center mt-2">Hi,Welcome Back</h5> */}
                <div className="mt-4 px-2">
                  <Field
                    as={TextField}
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    className="form-control"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </div>
                <div className="mt-4 px-2">
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    className="form-control"
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                </div>
                <Box sx={{ textAlign: "right",marginTop:'12px' }}>
                  <span>
                    <NavLink to='/forgotpassword' style={{textDecoration:'none'}}>Forgot Password ?</NavLink>
                  </span>
                </Box>
                <Box className="text-center mt-3 mb-3">
                  <button type="submit" className="btn btn-primary w-75">
                    Sign In
                  </button>
                </Box>
                
                <h6 className="text-center mb-4">
                  Don't have an account ? <NavLink to='/signup' style={{textDecoration:'none',fontSize:'16px'}}> Sign up </NavLink> 
                </h6>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;


