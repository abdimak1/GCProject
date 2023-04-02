import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../components/Header";
import { get_all_regions } from "../../../config/apicalls/regionApiCall";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { Update } from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [mockdata, setMockdata] = useState();

  useEffect(() => {
    get_all_regions().then((res) => {
      if (res.success && res.data) {
        console.log("abdu added",res.data);
        setMockdata(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);
  // const delhandlerv =(x)=>{
  //   console.log("deleted",x)
  //   // api call as an argument id=x
  //   setMockdata(res.data)
  // }

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Region_name",
      headerName: "Region Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "created_by",
      headerName: "Created by",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "user",
      headerName: "Email",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : (params) => params.row?.user?.email,
      disableColumnFilter: true,
    },
    {
      field: "user1",
      
      headerName: "Middle name",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : ({ id }) => {
        const item = mockdata.find(item => item.id === id);
        return item.user.userprofile.Mname;
      },
      disableColumnFilter: true,
      
    },
    {
      field: "user2",
      
      headerName: "First name",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : ({ id }) => {
        const item = mockdata.find(item => item.id === id);
        return item.user.userprofile.fname;
      },
      disableColumnFilter: true,
      
    },
    {
      field: "user4",
      
      headerName: "Last Name",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : ({ id }) => {
        const item = mockdata.find(item => item.id === id);
        return item.user.userprofile.lname;
      },
      disableColumnFilter: true,
      
    },
    {
      field: "user5",
      
      headerName: "Phone Number",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : ({ id }) => {
        const item = mockdata.find(item => item.id === id);
        return item.user.userprofile.phone;
      },
      disableColumnFilter: true,
      
    },
    {
      field: "user6",
      
      headerName: "Profile Pic",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : ({ id }) => {
        const item = mockdata.find(item => item.id === id);
        return item.user.userprofile.profile;
      },
      disableColumnFilter: true,
      
    },
    {
      field: "user7",
      
      headerName: "Sex",
      type: "number",
      headerAlign: "left",
      align: "left",
      valueGetter : ({ id }) => {
        const item = mockdata.find(item => item.id === id);
        return item.user.userprofile.sex;
      },
      disableColumnFilter: true,
      
    },
    // {
    //   field: "id",
    //   headerName: "Access Level",
    //   flex: 1,
    //   renderCell: ({ row: {id} }) => {
    //     return (
    //       <Box display="flex" p="55px">
    //         <Box
            
    //           width="60%"
    //           m="0 15px 0 0 "
    //           p="5px"
    //           display="flex"
    //           justifyContent="center"
    //           backgroundColor={colors.greenAccent[600]}
    //           borderRadius="4px"
    //         >
    //           <Button variant="text">Update</Button>
    //         </Box>
    //         <Box
    //           width="60%"
    //           m="0 auto"
    //           pl={"10px"}
    //           display="flex"
    //           justifyContent="center"
    //           backgroundColor={colors.greenAccent[600]}
    //           borderRadius="4px"
    //         >
    //           <Button
    //            variant="text">
    //             <Delete></Delete>
    //           </Button>
    //         </Box>
    //       </Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box m="20px">
      <Header title="All Users" subtitle="List of all users" />
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
        {/* {!mockdata && <CircularProgress color="success" />}
        {mockdata && (
          <DataGrid checkboxSelection rows={mockdata} columns={columns} /> */}
        {/* )} */}
      </Box>
    </Box>
  );
};

export default Team;
