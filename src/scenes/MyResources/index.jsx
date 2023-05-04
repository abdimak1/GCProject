import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { Update } from "@mui/icons-material";
import { get_resources } from "../../config/apicalls/resourceApiCall";

const Resources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [resources, setresources] = useState();

  useEffect(() => {
    get_resources().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setresources(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);
  // const delhandlerv =(x)=>{
  //   console.log("deleted",x)
  //   // api call as an argument id=x
  //   setresources(res.data)
  // }

  const columns = [
    //   { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter: (params) => params.row?.user?.email,
      disableColumnFilter: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter: (params) => params.row?.user?.email,
      disableColumnFilter: true,
    },

    {
      field: "id",
      headerName: "Manage",
      flex: 2,
      renderCell: ({ row: { id } }) => {
        return (
          <Box display="flex" gap="10px">
            <Box backgroundColor={colors.greenAccent[600]} borderRadius="4px">
              <Button variant="text">Update</Button>
            </Box>
            <Box backgroundColor={colors.greenAccent[600]} borderRadius="4px">
              <Button variant="text">
                <Delete></Delete>
              </Button>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="All Resource" subtitle="My Resources in Stock" />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
        }}
      >
        {!resources && <CircularProgress color="success" />}
        {resources && (
          <DataGrid checkboxSelection rows={resources} columns={columns} />
        )}
      </Box>
    </Box>
  );
};

export default Resources;
