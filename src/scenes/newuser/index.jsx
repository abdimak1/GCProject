import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { MuiTelInput } from "mui-tel-input";
import { pink } from "@mui/material/colors";
const Formuser = () => {
  const [arr, setArr] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [value, setValue] = useState("");

  const handlehange = (newValue, info) => {
    setValue(newValue);
  };

  const handleFormSubmit = (values) => {
    const obj = { values };
    console.log(obj);
    setArr((arr) => [...arr, obj]);
    arr.push(obj);
  };

  return (
    <Box m="20px">
      <Header
        title=" CREATE REGIONAL ACCOUNT "
        subtitle="Create a New Account Profile"
      />

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
                value={values.middlename}
                name="middlename"
                error={!!touched.middlename && !!errors.middlename}
                helperText={touched.middlename && errors.middlename}
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
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <InputLabel>Region</InputLabel>
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
                <MenuItem value={30}>Oromia</MenuItem>
              </Select>
              <Box>
                <MuiTelInput
                  onBlur={handleBlur}
                  fullWidth
                  label="phone number"
                  defaultCountry="ET"
                  value={value}
                  onChange={handlehange}
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  color="red"
                  sx={{
                    " &.MuiFormLabel-root": {
                      color: "magenta",
                    },
                  }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <InputLabel
            sx={{margin:2}}>Profile picture</InputLabel>  
            <Box sx={{ p: 2 }}>      
                  
              <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
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

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Formuser;
