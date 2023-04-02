import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
export default function SimpleSnackbar(props) {
  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        onClose={props.onClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={props.onClose} severity={props?.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
