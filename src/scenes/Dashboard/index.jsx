import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InventoryIcon from "@mui/icons-material/Inventory";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/Linechart";
import BarChart from "../../components/Barchart";
import StatBox from "../../components/StatBox";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get_report } from "../../config/apicalls/reportApicalls";
import { get_resources } from "../../config/apicalls/resourceApiCall";
import {
  gert_all_users,
  get_all_transaction,
} from "../../config/apicalls/usersapi";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setStatsData] = useState(null);
  const [datares, setResData] = useState(null);
  const [datauser, setUsersData] = useState(null);
  const [datatransact, setTransactData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    get_report().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setStatsData(res.data);
      } else {
        console.log(res.error);
      }
    });
    get_resources().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setResData(res.data);
      } else {
        console.log(res.error);
      }
    });
    gert_all_users().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setUsersData(res.data);
      } else {
        console.log(res.error);
      }
    });
    get_all_transaction().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setTransactData(res.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);

  //   const socketctx = useContext(SocketContext);
  //   console.log(socketctx.socket);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to your Farmassist dashboard"
        />

        <Box>
          <Button
            onClick={() => navigate(0)}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <RestartAltIcon sx={{ mr: "10px" }} />
            Refresh
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data?.length}
            subtitle="Reports"
            progress={0.75 * (data?.length + 1)}
            increase={`${100 - (data?.length + 80)}%`}
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={datares?.length}
            subtitle="Avaliable Resource"
            progress={0.5 * (data?.length + 1)}
            increase={`${100 - (data?.length + 60)}%`}
            icon={
              <InventoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={datauser}
            subtitle="All System Users "
            progress={0.3 * datauser}
            increase={`${100 - datauser}%`}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={datatransact + 1}
            subtitle="Transactions Done "
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Hierarchichal Division
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                59,342.32 Birr
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Resource-Amount relation
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
