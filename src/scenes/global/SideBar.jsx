import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonIcon from '@mui/icons-material/Person';
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import "./SideBar.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      className="myapp_menuitem"
      active={selected === title}
      onClick={() => {
        setSelected(title);
        navigate(`${to}`);
      }}
      icon={icon}
    >
      <p className="menuitem_text">{title}</p>
    </MenuItem>
  );
};

export default function MySidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <Sidebar
      backgroundColor="#1F2A40"
      className="sidebar_wrapper"
      defaultCollapsed={isCollapsed}
    >
      <Menu iconShape="square">
        <MenuOutlinedIcon
          className="profile_menu_icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        {!isCollapsed && (
          <div className="side_profiles">
            <Avatar className="profile_avatar"></Avatar>
            <h4 className="user_name">Admin</h4>
          </div>
        )}
        <div className="sideLinks">
          <Item
            title="dashboard"
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
            Data
          </Typography>
          <Item
            title="Manage users"
            to="/manageusers"
            icon={<GroupAddIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="users"
            to="/users"
            icon={<GroupAddIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color="#a3a3a3"
            sx={{ m: "15px 0 5px 20px" }}
          >
            Users
          </Typography>
          <Item
            title="Regional"
            to="/regional"
            icon={<PersonIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Zonal"
            to="/zonal"
            icon={<PersonIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Woreda"
            to="/woreda"
            icon={<PersonIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Kebele"
            to="/kebele"
            icon={<PersonIcon />}
            selected={selected}
            setSelected={setSelected}
          />
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
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
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
          
        </div>
      </Menu>
    </Sidebar>
  );
}
