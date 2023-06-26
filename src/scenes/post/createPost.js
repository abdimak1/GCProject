import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SimpleSnackbar from "../global/snackbar";
import { create_resource } from "../../config/apicalls/resourceApiCall";

const CreateResource = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
    create_resource(values).then((res) => {
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
    title: yup.string().required("required"),
    discription: yup.string().required("required"),
    thumbnail: yup.string().required("required"),
    
  });
  const initialValues = {
    title: "",
    discription: "",
    thumbnail: "",
  };
  return (
    <Box m="20px">
      <SimpleSnackbar
        open={snak.open}
        severity={snak.severity}
        message={snak.message}
        onClose={handleClose}
      />

      <Header title="Create Resource" subtitle="Create new resource" />

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
                label="Title "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title "
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />
            
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discription "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.discription }
                name="discription "
                error={!!touched.discription  && !!errors.discription }
                helperText={touched.discription  && errors.discription }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="thumbnail "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.thumbnail }
                name="thumbnail "
                error={!!touched.thumbnail  && !!errors.thumbnail }
                helperText={touched.thumbnail  && errors.thumbnail }
                sx={{ gridColumn: "span 2" }}
              />
            </Box>

            <Box gap="20px" display="flex" justifyContent="start" mt="30px">
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  navigate("/resources");
                }}
              >
                Back
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Create Post
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default CreateResource;
