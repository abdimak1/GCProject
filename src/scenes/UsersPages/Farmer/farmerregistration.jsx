import { Grid } from "@mui/material";
import Header from "../../../components/Header";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SimpleSnackbar from "../../global/snackbar";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { create_farmer } from "../../../config/apicalls/Farmerapicalls";
const FarmerRegistration = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
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
    console.log("function called");
    create_farmer(values).then((res) => {
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
  };

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    middleName: yup.string().required("required"),
    userName: yup.string().required("required"),
    sex: yup.string().required("required"),
    land_size: yup.string().required("required"),
    passWord: yup.string().required("required"). min(8, "must be at least 8 characters"),
    land_map_id:yup.number().required("required").typeError("must be a number"),
    phone: yup.number().required("required").typeError("must be a number"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    userName: "",
    land_size: "",
    land_map_id: "",
    sex: "",
    passWord: "",
    phone: "",
  };
  return (
    <Box m="20px">
      <SimpleSnackbar
        open={snak.open}
        severity={snak.severity}
        message={snak.message}
        onClose={handleClose}
      />
      <Grid align="left">
        {/* <AppRegistrationIcon /> */}
        <Header title="Registration" subtitle="Farmer registration" />
      </Grid>
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
          <Form>
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
              />

              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  value={values.sex}
                  label="Sex"
                  name="sex"
                  onChange={handleChange}
                  error={!!touched.sex && !!errors.sex}
                >
                  <MenuItem value={"MSex"}>Male</MenuItem>
                  <MenuItem value={"FSex"}>Female</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Land Size"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.land_size}
                name="land_size"
                error={!!touched.land_size && !!errors.land_size}
                helperText={touched.land_size && errors.land_size}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Land Map Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.land_map_id}
                name="land_map_id"
                error={!!touched.land_map_id && !!errors.land_map_id}
                helperText={touched.land_map_id && errors.land_map_id}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box gap="20px" display="flex" justifyContent="left" mt="30px">
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  navigate("/farmer");
                }}
              >
                Back
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default FarmerRegistration;
