import { Grid } from "@mui/material";
import Header from "../../../components/Header";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import SimpleSnackbar from "../../global/snackbar";
import { useNavigate } from "react-router-dom";
import { create_privatesector } from "../../../config/apicalls/privatesectorApicallls";
const CreatePrivateSector = () => {
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
    create_privatesector(values).then((res) => {
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
    userName: yup.string().required("required"),
    passWord: yup.string().required("required").min(8, "must be at least 8 characters"),
    tin_number: yup.string().required("required"),
    phone: yup.number().required("required").typeError("must be a number"),
    organization_name: yup.string().required("required"),
    email:  yup.string().required("required"),
  });
  const initialValues = {
    userName: "",
    organization_name: "",
    passWord: "",
    tin_number: "",
    phone: "",
    email: "",
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
        <Header title="Registration" subtitle="Private Sector User registration" />
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
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" organization Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.organization_name}
                name="organization_name"
                error={
                  !!touched.organization_name && !!errors.organization_name
                }
                helperText={
                  touched.organization_name && errors.organization_name
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tin Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tin_number}
                name="tin_number"
                error={!!touched.tin_number && !!errors.tin_number}
                helperText={touched.tin_number && errors.tin_number}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box gap="20px" display="flex" justifyContent="left" mt="30px">
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  navigate("/privatesector");
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
export default CreatePrivateSector;
