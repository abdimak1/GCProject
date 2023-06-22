import {
  Box,
  Button,
  CircularProgress,

  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { get_resources } from "../../config/apicalls/resourceApiCall";

const MyResources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [resources, setresources] = useState();
  const navigate = useNavigate();
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
      field: "created_at",
      headerName: "Created_at",
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
      field: "price_perKilo",
      headerName: "Price",
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
      <Box  gap ="20px" display="flex" justifyContent="end" mt="0px">
        <Button
          onClick={() => {
            navigate("/createresource");
          }}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <AddOutlinedIcon sx={{ mr: "10px" }} />
          Create Resource
        </Button>
        <Button
          onClick={() => {
            navigate("/resources/transfer");
          }}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <AddOutlinedIcon sx={{ mr: "10px" }} />
          Transfer Resource
        </Button>
      </Box>
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

export default MyResources;
