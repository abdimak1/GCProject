import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SimpleSnackbar from "../../global/snackbar";
import { MuiTelInput } from "mui-tel-input";

import { create_zone } from "../../../config/apicalls/zonalApiCalls";
const CreatekebeleUser = () => {
  const [arr, setArr] = useState([]);

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [phonen, setphonen] = useState("");
  const [snak, setsnak] = useState({
    severity: "",
    message: "",
    open: false,
  });

  const handleClose = () => {
    setsnak({
      open: false,
      severity: "",
      message: "",
    });
  };


  const handleFormSubmit = (values) => {
    create_zone(values, phonen).then((res) => {
      if (res.success && res.data) {
        setsnak({
          severity: "success",
          message: "successfully created!",
          open: true,
        });
        console.log(res.data);
      } else {
        setsnak({
          severity: "error",
          message: " not successfully created!",
          open: true,
        });
        console.log(res.error);
      }
    });
    // const obj = { values };
    // console.log(obj);
    // setArr((arr) => [...arr, obj]);
    // arr.push(obj);
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    middleName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    region: yup.string().required("required"),
    userName: yup.string().required("required"),
    sex: yup.string().required("required"),
    passWord: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    userName: "",
    email: "",
    region: "",
    sex: "",
    passWord: "",
  };
  return (
    <Box m="20px">
      <SimpleSnackbar
        open={snak.open}
        severity={snak.severity}
        message={snak.message}
        onClose={handleClose}
      />
      <Header title="CREATE ACCOUNT" subtitle="Create a New Account Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
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
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Middle Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.middleName}
                name="middleName"
                error={!!touched.middleName && !!errors.middleName}
                helperText={touched.middleName && errors.middleName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                name="userName"
                error={!!touched.userName && !!errors.userName}
                helperText={touched.userName && errors.userName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.passWord}
                name="passWord"
                error={!!touched.passWord && !!errors.passWord}
                helperText={touched.passWord && errors.passWord}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <InputLabel>Gender</InputLabel>
              <Select
                fullWidth
                variant="filled"
                type="text"
                onBlur={handleBlur}
                value={values.sex}
                label="Sex"
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
                name="sex"
              >
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
              </Select>

              <InputLabel>Woreda</InputLabel>
              <Select
                fullWidth
                variant="filled"
                type="text"
                onBlur={handleBlur}
                value={values.region}
                label="Region"
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
                name="region"
              >
                <MenuItem value={""}></MenuItem>
                <MenuItem value={"01"}>woreda 01</MenuItem>
                <MenuItem value={"02"}>woreda 02</MenuItem>
                <MenuItem value={"03"}>woreda 03</MenuItem>
              </Select>

              
              <Box>
                <MuiTelInput
                  onBlur={handleBlur}
                  fullWidth
                  label="phone number"
                  defaultCountry="ET"
                  value={phonen}
                  onChange={(e) => setphonen(e)}
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreatekebeleUser;
