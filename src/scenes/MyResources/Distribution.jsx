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
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SimpleSnackbar from "../global/snackbar";
import {
  create_resource,
  get_resources_tosell,
} from "../../config/apicalls/resourceApiCall";
import { distribute_resource } from "../../config/apicalls/resourceApiCall";
import { get_all_farmers } from "../../config/apicalls/Farmerapicalls";
const Distribution = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [dropdown, setdropdown] = useState();
  const [farmerdropdown, setfarmerdropdown] = useState();
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

  useEffect(() => {
    get_resources_tosell().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setdropdown(res.data);
      } else {
        console.log(res.error);
      }
    });
    get_all_farmers().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setfarmerdropdown(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);
  const handleFormSubmit = (values) => {
    console.log("function called");
    distribute_resource(values).then((res) => {
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
    resource_id: yup.string().required("required"),
    amount: yup.string().required("required"),
    buyer: yup.string().required("required"),
  });
  const initialValues = {
    resource_id: "",
    amount: "",
    buyer: "",
  };
  return (
    <Box m="20px">
      <SimpleSnackbar
        open={snak.open}
        severity={snak.severity}
        message={snak.message}
        onClose={handleClose}
      />

      <Header title="Distribute Resource" subtitle="distribute new resource" />

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
              <FormControl fullWidth>
                <InputLabel id="catagory">ResourceId</InputLabel>
                <Select
                  fullWidth
                  labelId="category"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.resource_id || ""}
                  name="resource_id"
                >
                  {dropdown?.map((drop) => {
                    let dropname = "loading...";
                    dropname = drop?.name;
                    return (
                      <MenuItem key={drop?.id} value={drop?.id}>
                        {dropname}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="catagory">Buyer</InputLabel>
                <Select
                  fullWidth
                  labelId="category"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.buyer || ""}
                  name="buyer"
                >
                  {farmerdropdown?.map((drop) => {
                    let dropname = "loading...";
                    dropname = drop?.user.username;
                    return (
                      <MenuItem key={drop?.id} value={drop?.id}>
                        {dropname}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
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
                Distribute New Resource
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default Distribution;
