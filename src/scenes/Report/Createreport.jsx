import Header from "../../components/Header";
import * as yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Viewer,Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { pdfjs } from 'react-pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
const CreateReport = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [pdffile, setPDFFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  const filetype = ["application/pdf"];
  const handlepdfchange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && String(filetype).includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPDFFile(e.target.result);
        };
      } else {
        setPDFFile(null);
      }
    } else {
      console.log("please select file");
    }
  };
  const handlepdfSubmit = (e) => {
    e.preventDefault();
    if ((pdffile != null)) {
      setViewPdf(pdffile);
    } else {
      setPDFFile(null);
    }
  };
  const newPlugin = defaultLayoutPlugin();
  const checkoutSchema = yup.object().shape({
    reported_by: yup.string().required("required"),
    reported_to: yup.string().required("required"),
    report_name: yup.string().required("required"),
    report_file: yup.string().email("invalid email").required("required"),
  });
  const initialValues = {
    reported_by: "",
    reported_to: "",
    report_name: "",
    report_file: "",
  };
  return (
    <Box m="20px">
      <Header title="Create Report " subtitle="Report to Higher Hierarchy " />
      <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onChange={handlepdfSubmit}>
            <Box
              display="grid"
              gap="30px"
              // gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">
                  Reported by
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  value={values.reported_by}
                  label="Reportde by"
                  name="reported_by"
                  onChange={handleChange}
                  error={!!touched.reported_by && !!errors.reported_by}
                >
                  <MenuItem value={"M"}>kebele</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">
                  Reported to
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  value={values.reported_to}
                  label="Reported to"
                  name="reported_to"
                  onChange={handleChange}
                  error={!!touched.reported_to && !!errors.reported_to}
                >
                  <MenuItem value={"woreda"}>Woreda</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">
                  Report type
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  value={values.report_name}
                  label="Report type"
                  name="report_name"
                  onChange={handleChange}
                  error={!!touched.report_name && !!errors.report_name}
                >
                  <MenuItem value={"annualreport"}>Annual</MenuItem>
                  <MenuItem value={"monthlyreport"}>Monthly</MenuItem>
                  <MenuItem value={"halfyearreport"}>Half year </MenuItem>
                </Select>
              </FormControl>
              <Box>
                <input type="file" onChange={handlepdfchange} />
                <Button type="submit" color="secondary" variant="contained">
                  view pdf
                </Button>

                <div
                  align-items="center"
                  display=" flex"
                  justify-content="center"
                  width="100%"
                  height="500px"
                  overflow-y="auto"
                >
                  
                  <Worker >
                    {viewPdf && (
                      <>
                        <Viewer fileUrl={viewPdf} workerSrc={pdfjsWorker}  pluginsArray = {Array.from(newPlugin)}/>
                      </>
                    )}
                    {!viewPdf && <>No PDF</>}
                  </Worker>
                </div>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default CreateReport;
