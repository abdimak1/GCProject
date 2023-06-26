import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
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
import { get_all_regions } from "../../config/apicalls/regionApiCall";
import { get_all_zones } from "../../config/apicalls/zonalApiCalls";
import { get_all_woredas } from "../../config/apicalls/woredaApiCalls";
import { get_all_kebeleadmin } from "../../config/apicalls/kebeleApiCalls";
import { get_resources, transfer_resource } from "../../config/apicalls/resourceApiCall";
import { useContext } from "react";
import AuthContext from "../../config/context/authContext";
const TransferResource = () => {
  const { role } = useContext(AuthContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [dropdown, setdropdown] = useState();
  const [resources, setresources] = useState();

  const [snak, setsnak] = useState({
    severity: "",
    message: "",
    open: false,
  });

  // check the role of the user who entererd the page and bring the respective dropdown
  useEffect(() => {
    if (role === "federal") {
      get_all_regions().then((res) => {
        if (res.success && res.data) {
          console.log(res.data);
          setdropdown(res.data);
        } else {
          console.log(res.error);
        }
      });
    }
    if (role === "region") {
      get_all_zones().then((res) => {
        if (res.success && res.data) {
          console.log(res.data);
          setdropdown(res.data);
        } else {
          console.log(res.error);
        }
      });
    }
    if (role === "zone") {
      get_all_woredas().then((res) => {
        if (res.success && res.data) {
          console.log(res.data);
          setdropdown(res.data);
        } else {
          console.log(res.error);
        }
      });
    }
    if (role === "woreda") {
      get_all_kebeleadmin().then((res) => {
        if (res.success && res.data) {
          console.log(res.data);
          setdropdown(res.data);
        } else {
          console.log(res.error);
        }
      });
    }
    get_resources().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setresources(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);

  const handleClose = () => {
    setsnak({
      open: false,
      severity: "",
      message: "",
    });
  };
  const handleFormSubmit = (values) => {
    console.log("function called");
          transfer_resource(values).then((res) => {
            if (res.success && res.data) {
              setsnak({
                severity: "success",
                message: "successfully transfered!",
                open: true,
              });
              console.log(res.data);
            } else {
              setsnak({
                severity: "error",
                message: " not successfully transfered!",
                open: true,
              });
              console.log(res.error);
            }
          });
  };

  const checkoutSchema = yup.object().shape({
    amount: yup.string().required("required"),
    to: yup.string().required("required"),
    resource_id: yup.string().required("required"),
  });
  const initialValues = {
    amount: "",
    to: "",
    resource_id: "",
  };
  return (
    <Box m="20px">
      <SimpleSnackbar
        open={snak.open}
        severity={snak.severity}
        message={snak.message}
        onClose={handleClose}
      />

      <Header title="Transfer Resource" subtitle="Transfer resource to lower adminstration" />

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
                <InputLabel id="catagory">post catagory</InputLabel>
                <Select
                  fullWidth
                  labelId="category"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.to || ""}
                  name="to"
                >
                  {dropdown?.map((drop) => {
                    let dropname = "loading...";
                    if (role === "federal") {
                      dropname = drop?.Region_name;
                    }
                    if (role === "region") {
                      dropname = drop?.Zone_name;
                    }
                    if (role === "zone") {
                      dropname = drop?.woreda_name;
                    }
                    if (role === "woreda") {
                      dropname = drop?.kebele_name;
                    }

                    return (
                      <MenuItem key={drop?.id} value={drop?.user?.id}>
                        {dropname}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="rec_cat">resource </InputLabel>
                <Select
                  fullWidth
                  labelId="rec_cat"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.resource_id || ""}
                  name="resource_id"
                >
                  {resources?.map((rec) => {
                    return (
                      <MenuItem key={rec?.id} value={rec?.id}>
                        {rec?.name}
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
                Create New Resource
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default TransferResource;
