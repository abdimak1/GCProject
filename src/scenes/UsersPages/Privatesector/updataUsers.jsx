import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SimpleSnackbar from "../../global/snackbar";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { get_privatesector,update_privatesector} from "../../../config/apicalls/privatesectorApicallls";

import { useNavigate } from "react-router-dom";
const UpdatePrivatesector = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [prevdata, setprevdata] = useState();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    userName: "",
    organization_name: "",
    passWord: "",
    tin_number: "",
    phone: "",
    email: "",
  });
  const [snak, setsnak] = useState({
    severity: "",
    message: "",
    open: false,
  });
  const param = useParams();
  const userid = param.id;
  console.log(userid);

  const handleClose = () => {
    setsnak({
      open: false,
      severity: "",
      message: "",
    });
  };

  useEffect(() => {
    get_privatesector(userid).then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setprevdata(res.data);
        setInitialValues({
          userName: res.data.user.username,
          organization_name: res.data.organization_name,
          passWord: "qwqwqw",
          tin_number: res.data.user.username,
          phone: res.data.user.userprofile.phone,
          email: res.data.user.email,
        });
      } else {
        console.log(res.error);
      }
    });
  }, []);

  const handleFormSubmit = (values) => {
    console.log("function called");
    prevdata["user"]["email"] = values.email;
    prevdata["user"]["username"] = values.userName;
    prevdata["organization_name"] = values.organization_name;
    prevdata["tin_number"] = values.tin_number;
    prevdata["user"]["userprofile"]["phone"] = values.phone;
    update_privatesector(userid, prevdata).then((res) => {
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
    organization_name: yup.string().required("required"),
    passWord: yup.string().required("required"),
    tin_number: yup.string().required("required"),
    phone: yup.string().required("required"),
    email: yup.string().required("required"),
  });

  return (
    <Box m="20px">
      <SimpleSnackbar
        open={snak.open}
        severity={snak.severity}
        message={snak.message}
        onClose={handleClose}
      />

      <Header title="Update user Account" subtitle="Update private sector user Account" />

      <Formik
        enableReinitialize={true}
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
            <Box gap="20px" display="flex" justifyContent="start" mt="30px">
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
                Update User Account
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UpdatePrivatesector;
