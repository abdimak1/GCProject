import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { cancel_resource, get_sent_resources } from "../../config/apicalls/resourceApiCall";
import AlertDialogSlide from "../global/dialogue";

const SentResources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [resources, setresources] = useState();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  useEffect(() => {
    get_sent_resources().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setresources(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);

  const handleC = (id) => {
    setSelectedId(id);
    setOpen(!open);
  };

  const cancelHandler = (selectedId) => {
    cancel_resource(selectedId).then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setresources(res.data);
      } else {
        console.log(res.error);
      }
    });
    setOpen(false);
  };

  const columns = [
    //   { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "type",
      headerName: "Type",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Created_at",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 2,
      // valueGetter: (params) => params.row?.user?.email,
      // disableColumnFilter: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      // valueGetter: (params) => params.row?.user?.email,
      // disableColumnFilter: true,
    },
    {
      field: "price_perKilo",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1.5,
      // valueGetter: (params) => params.row?.user?.email,
      // disableColumnFilter: true,
    },

    {
      field: "id",
      headerName: "Manage",
      flex: 2,
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            width="60%"
            m="0 15px 0 0 "
            pl={"10px"}
            display="flex"
            justifyContent="center"
            backgroundColor={colors.redAccent[500]}
            borderRadius="4px"
            onClick={()=>{handleC(id)}}
            fontWeight= "bold"
          >
            <Button variant="text">Cancel</Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <AlertDialogSlide open={open} cancel={()=>cancelHandler(selectedId)} onClose={handleC}></AlertDialogSlide>
      <Header title="Sent Resource" subtitle="Resources You Sent" />
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

export default SentResources;
