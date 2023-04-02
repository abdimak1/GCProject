import { Box, Typography, useTheme } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../Data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../components/Header";
import { CircularProgress } from "@mui/material";
import { get_all_regions } from "../../../config/apicalls/regionApiCall";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Regionalusers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [mockdata, setMockdata] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    get_all_regions().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        // setMockdata(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box display="flex" p="55px">
            <Box
              width="60%"
              m="0 15px 0 0 "
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={colors.greenAccent[600]}
              borderRadius="4px"
            >
              <Button variant="text">Update</Button>
            </Box>

            <Box
              width="60%"
              m="0 auto"
              pl={"10px"}
              display="flex"
              justifyContent="center"
              backgroundColor={colors.greenAccent[600]}
              borderRadius="4px"
            >
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
      <Header title="Regional users" subtitle="List of kebele users" />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button
          onClick={() => {
            navigate("/createregionalaccount");
          }}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <AddOutlinedIcon sx={{ mr: "10px" }} />
          Add Business User
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
        {!mockdata && <CircularProgress color="success" />}
        {mockdata && (
          <DataGrid checkboxSelection rows={mockdata} columns={columns} />
        )}{" "}
      </Box>
    </Box>
  );
};

export default Regionalusers;
