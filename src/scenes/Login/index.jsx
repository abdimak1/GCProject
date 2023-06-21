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
  const defenseHandler = (usname, pas) => {
    login_user(usname, pas).then((res) => {
      if (res.success && res.data) {
        loginUser(res.data);
        navigate("/dashboard");
      } else {
        console.log(res.error);
      }
    });
  };
  const SubmitHandler = (values) => {
    login_user(values.username, values.password).then((res) => {
      if (res.success && res.data) {
        loginUser(res.data);
        navigate("/dashboard");
      } else {
        console.log(res.error);
      }
    });
  };

  return (
    <Grid>
      <div
        style={{
          display: "flex",
        }}
      >
        <Paper elevation={5} style={paperStyle}>
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
        <Paper elevation={5} style={paperStyle}>
          <Grid align="center">
            <h2>FARMASSIST TEST</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={SubmitHandler}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Button
                    onClick={() => defenseHandler("abdiyu", "abdiyu@123")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    LOGIN AS FEDRAL
                  </Button>
                  <Button
                    onClick={() => defenseHandler("reg1", "abdiyu@123")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    LOGIN AS REGION
                  </Button>
                  <Button
                    onClick={() => defenseHandler("arsi", "abdiyu@123")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    LOGIN AS ZONE
                  </Button>
                  <Button
                    onClick={() => defenseHandler("wrd", "abdiyu@123")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    LOGIN AS WOREDA
                  </Button>
                  <Button
                    onClick={() => defenseHandler("kebacc", "abdiyu@123")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    LOGIN AS KEBELE ADMIN
                  </Button>
                  <Button
                    onClick = {()=> defenseHandler("abdisahjvhjhgch","abdiyu@123")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    LOGIN AS KEBELE BUSINESS
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </Paper>
      </div>
    </Grid>
  );
};

export default Login;
