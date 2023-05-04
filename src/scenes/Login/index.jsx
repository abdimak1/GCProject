import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import AuthContext from "../../config/context/authContext";
import { login_user } from "../../config/apicalls/usersapi";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const initialValues = { username: "", password: "" };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 400,
    margin: "100px auto",
  };

  const SubmitHandler = (values) => {
    login_user(values.username, values.password).then((res) => {
      if (res.success && res.data) {
        loginUser(res.data);
        navigate("/users");
      } else {
        console.log(res.error);
      }
    });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>FARMASSIST</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={SubmitHandler}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <TextField
                  label="Username"
                  name="username"
                  placeholder="Enter Username"
                  variant="standard"
                  fullWidth
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />

                <TextField
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  type="password"
                  variant="standard"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
