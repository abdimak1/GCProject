import { useContext, useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonIcon from "@mui/icons-material/Person";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { tokens } from "../../theme";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AuthContext from "../../config/context/authContext";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const authctx = useContext(AuthContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  console.log(authctx);
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  FARMASSIST
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <AdminPanelSettingsIcon />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {authctx.username ? authctx.username : "username"}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {authctx.role ? authctx.role : "role "}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* {authctx.role === "federal" ? ( */}
            <>
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<DashboardIcon />}
                selected={true}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color="#a3a3a3"
                sx={{ m: "15px 0 5px 20px" }}
              >
                Users
              </Typography>
              {authctx.role === "region" && (
                <Item
                  title="Zonal users"
                  to="/zonal"
                  icon={<PersonIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              {authctx.role === "federal" && (
                <Item
                  title="Regional users"
                  to="/regional"
                  icon={<PersonIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
              {authctx.role === "kebeleadmin" && (
                <Item
                  title="Kebele business"
                  to="/kebelebusinesses"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
              {authctx.role === "kebeleadmin" && (
                <Item
                  title="Developemental Agent "
                  to="/da"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              {authctx.role === "kebelebusiness" && (
                <Item
                  title="Farmer "
                  to="/farmer"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              {authctx.role === "kebelebusiness" && (
                <Item
                  title="Private Sector "
                  to="/privatesector"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              {authctx.role === "zone" && (
                <Item
                  title="Woreda users"
                  to="/woreda"
                  icon={<PersonIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
              {authctx.role === "woreda" && (
                <Item
                  title="Kebele users"
                  to="/kebeleUsers"
                  icon={<PersonIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
              {/* {authctx.role === "kebeleadmin" && (
               
              )} */}

              <Typography
                variant="h6"
                color="#a3a3a3"
                sx={{ m: "15px 0 5px 20px" }}
              >
                Report
              </Typography>
              {authctx.role !== "federal" && (
                <Item
                  title="Create Report "
                  to="/createreport"
                  icon={<AssessmentIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              <Item
                title="View Report "
                to="/viewreport"
                icon={<AssessmentIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {authctx.role === "federal" && (
                <Typography
                  variant="h6"
                  color="#a3a3a3"
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Task
                </Typography>
              )}
              {authctx.role === "federal" && (
                <Item
                  title="Post "
                  to="/post"
                  icon={<AssessmentIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              {authctx.role === "kebelebusiness" && (
                <Typography
                  variant="h6"
                  color="#a3a3a3"
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Task
                </Typography>
              )}
              {authctx.role === "kebelebusiness" && (
                <Item
                  title="Distribution "
                  to="/distribute"
                  icon={<AttachMoneyIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
              <Typography
                variant="h6"
                color="#a3a3a3"
                sx={{ m: "15px 0 5px 20px" }}
              >
                Resource
              </Typography>
              <Item
                title="Resource"
                to="/resources"
                icon={<PersonIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Sent Recource"
                to="/resources/sent"
                icon={<PersonIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {authctx.role !== "federal" && (
                <Item
                  title="Recieved Resource"
                  to="/resources/recieved"
                  icon={<PersonIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              <Typography
                variant="h6"
                color="#a3a3a3"
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
