import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SimpleSnackbar from "../../global/snackbar";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { create_region } from "../../../config/apicalls/regionApiCall";
import AlertDialogSlide from "../../global/dialogue";

const CreateregionalUser = () => {
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
    create_region(values).then((res) => {
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
    email: yup.string().email("invalid email").required("required"),
    region: yup.string().required("required"),
    userName: yup.string().required("required"),
    sex: yup.string().required("required"),
    phone: yup.string().required("required"),
    //   passWord: yup
    //     .string()
    //     .required("Password is required")
    //     .min(6, "Password must be at least 6 characters"),
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
   
      <Header  title="CREATE ACCOUNT" subtitle="Create A New Regional Account" />

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
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="select Region"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.region}
                name="region"
                error={!!touched.region && !!errors.region}
                helperText={touched.region && errors.region}
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
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
              <InputLabel>Profile Pic</InputLabel>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained"
                  startIcon={<DriveFolderUploadIcon />}
                  component="label"
                >
                  Upload File
                  <input type="file" hidden />
                </Button>
              </Stack>
            </Box>
            <Box display="flex" justifyContent="start" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateregionalUser;
