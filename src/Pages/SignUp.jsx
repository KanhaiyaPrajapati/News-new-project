import React from "react";
import signupimage from "../Images/ivancik.jpg";
import {
  Box,
  Container,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";

// fullName, phone, email, password, confirmPassword, gender, role, area, is_active

const SignUp = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    role: "",
    area: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fullName: Yup.string().required("Please Enter the Name"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Password is not matched")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    phone: Yup.number().required("Please Enter the phone number"),
    gender: Yup.string().required("Please select your gender"),
    role: Yup.string().required("Please select your role"),
    area: Yup.string().required("Please select your City"),
  });
  let navigate = useNavigate()

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    navigate('/login');
  };


  return (
    <>
      <Container className="w-75 mt-4">
        <Box className="row">
          <Box className="col-lg-6 col-sm-12 m-0 p-0">
            <img
              src={signupimage}
              alt=""
              className="img-fluid h-100"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box className="col-lg-6 col-sm-12 shadow-lg px-3 py-3">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="mx-auto rounded-3">
                  <h4 className="mx-3 my-2">Sign Up</h4>
                <div className="d-flex">
                    <div className="mt-2 px-2">
                      <Field
                        as={TextField}
                        name="fullName"
                        label="FullName"
                        variant="outlined"
                        className="form-control"
                        error={touched.fullName && !!errors.fullName}
                        helperText={touched.fullName && errors.fullName}
                      />
                    </div>
                    <div className="mt-2 px-2">
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
                  </div>

                  <div className="d-flex mt-3">
                    <div className="px-2">
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
                    <div className="px-2">
                      <Field
                        as={TextField}
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        className="form-control"
                        error={
                          touched.confirmPassword && !!errors.confirmPassword
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-2 px-2 ms-1">
                    <label htmlFor="gender" className="w-100">
                      Gender
                    </label>
                    <FormControl
                      component="fieldset"
                      error={touched.gender && !!errors.gender}
                    >
                      <Field
                        as={RadioGroup}
                        aria-label="gender"
                        name="gender"
                        row
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                      </Field>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="error-message"
                      />
                    </FormControl>
                  </div>
                  <div className="mt-1 px-2">
                    <Field
                      as={TextField}
                      name="phone"
                      label="Phone"
                      type="number"
                      autoComplete="current-password"
                      className="form-control"
                      error={touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                    />
                  </div>

                  <div className="mt-1 px-2">
                    <InputLabel htmlFor="City">City</InputLabel>
                    <FormControl
                      variant="outlined"
                      className="w-100"
                      error={touched.area && !!errors.area}
                    >
                      <Field as={Select} name="area" className="form-select">
                        <MenuItem value="surat">Surat</MenuItem>
                        <MenuItem value="vadodara">Vadodara</MenuItem>
                        <MenuItem value="ahemdabad">Ahemdabad</MenuItem>
                      </Field>
                      <ErrorMessage
                        name="area"
                        component="div"
                        className="error-message"
                      />
                    </FormControl>
                  </div>

                  <div className="mt-1 px-2">
                    <InputLabel htmlFor="role">Role</InputLabel>
                    <FormControl
                      variant="outlined"
                      className="w-100"
                      error={touched.role && !!errors.role}
                    >
                      <Field as={Select} name="role" className="form-select">
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="client">Client</MenuItem>
                      </Field>
                      <ErrorMessage
                        name="role"
                        component="div"
                        className="error-message"
                      />
                    </FormControl>
                  </div>

                  <Box className="text-center mt-3 mb-3">
                  <button type="submit" className="btn btn-primary w-25" >
                      Sign Up
                    </button>
                   
                  </Box>
                  {/* <Box sx={{ textAlign: "right", marginBottom: "10px" }}>
                    <span>
                      <a href="">Forgot Password ?</a>
                    </span>
                  </Box>
                  <h6 className="text-center mb-3">
                    Don't have an account ? <NavLink to='/signup'> Sign up </NavLink> 
                  </h6> */}
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
