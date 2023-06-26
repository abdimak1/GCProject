import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import AlertDialogSlide from "../global/dialogue";
import { get_report } from "../../config/apicalls/reportApicalls";
const ViewReport = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [resources, setresources] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleC = () => {
    setOpen(!open);
  };
  useEffect(() => {
    get_report().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setresources(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);

  const columns = [
     { field: "id",flex: 0.1, headerName: "ID" },
    {
      field: "reported_to",
      headerName: "Reported to",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    {
      field: "report_name",
      headerName: "Report Name",
      headerAlign: "left",
      align: "left",
      flex: 0.2,
    },
    {
      field: "report_file",
      headerName: "Report File",
      headerAlign: "left",
      flex: 0.2,
      align: "left",
    },
  ];

  return (
    <Box m="20px">
      <AlertDialogSlide open={open} onClose={handleC}></AlertDialogSlide>
      <Header
        title="View Report "
        subtitle="View Report From Lower Hierarchy"
      />

      <Box
        m="40px 0 0 0"
        height="60vh"
        width="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {!resources && (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "70%",
              left: "60%",
              marginTop: `${-40}px`,
              marginLeft: `${-40}px`,
            }}
            color="success"
          />
        )}
        {resources && (
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            checkboxSelection
            rows={resources}
            columns={columns}
          />
        )}
      </Box>
    </Box>
  );
};

export default ViewReport;
