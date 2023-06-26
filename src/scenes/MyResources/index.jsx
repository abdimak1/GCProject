import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AlertDialogSlide from "../global/dialogue";
import { get_resources } from "../../config/apicalls/resourceApiCall";
import AuthContext from "../../config/context/authContext";
import { useContext } from "react";
const MyResources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [resources, setresources] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const authctx = useContext(AuthContext);
  const handleC = () => {
    setOpen(!open);
  };
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
      flex: 0.2,
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
      flex: 0.4,
      align: "left",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      flex: 0.2,
      align: "left",
    },
    {
      field: "price_perKilo",
      flex: 0.2,
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "id",
      
      headerName: "Manage",
      flex: 0.5,
      renderCell: ({ row: { id } }) => {
        return (
          <Box display="flex" gap="10px">
            <Box backgroundColor={colors.greenAccent[600]} borderRadius="4px">
              <Button variant="text">Update</Button>
            </Box>
            <Box
              width="60%"
              m="0 15px 0 0 "
              pl={"10px"}
              display="flex"
              justifyContent="center"
              backgroundColor={colors.redAccent[500]}
              borderRadius="4px"
              onClick={handleC}
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
      <AlertDialogSlide title = "Are you sure you want to delete this resource" open={open} onClose={handleC} > </AlertDialogSlide>
      <Header title="All Resource" subtitle="My Resources in Stock" />
      <Box gap="20px" display="flex" justifyContent="end" mt="0px">
        {authctx.role === "federal" && (
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

        )}
       
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

export default MyResources;
