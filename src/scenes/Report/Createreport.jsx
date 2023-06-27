import Header from "../../components/Header";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import SimpleSnackbar from "../global/snackbar";
import { useState } from "react";
import { create_report } from "../../config/apicalls/reportApicalls";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";


const CreateReport = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [file, setFile] = useState(null);

  const handlePdfChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleOpenPDF = () => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    }
  };

  const [snak, setsnak] = useState({
    severity: "",
    message: "",
    open: false,
  });

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("my_file",file);
    formData.append("report_name", values.report_name);
    console.log("function called");
    create_report(formData).then((res) => {
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
    report_name: yup.string().required("required"),
  });
  const initialValues = {
    report_name: "",
  };

  const handleClose = () => {
    setsnak({
      open: false,
      severity: "",
      message: "",
    });
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
        <Header title="Create Report " subtitle="Report to Higher Hierarchy " />
      </Grid>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Box
              display="grid"
              gap="30px"
              // gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
             
            
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Reported type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.report_name}
                name="report_name"
                error={!!touched.report_name && !!errors.report_name}
                helperText={touched.report_name && errors.report_name}
                sx={{ gridColumn: "span 2" }}
              />

              {/* <TextField
                type="file"
                onChange={handlePdfChange}
                variant="outlined"
                value={values.report_file}
                name="report_file"
                label="Attach a file"
                InputLabelProps={{ shrink: true }}
                inputProps={{ accept: ".doc, .docx, .pdf" }}
                fullWidth
              /> */}
              <Box  display="flex" justifyContent="left" mt="30px">
                <input type="file" id="pdfInput" onChange={handlePdfChange} />

                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleOpenPDF}
                  disabled={!file}
                  size="small"
                >
                  Open PDF
                </Button>
                {file && <p>Selected file: {file.name}</p>}
              </Box>
            </Box>
            <Box gap="30px" display="flex" justifyContent="left" mt="30px">
              <Button size ="large" type="submit" color="secondary" variant="contained">
                Submit
              </Button>

              
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default CreateReport;
