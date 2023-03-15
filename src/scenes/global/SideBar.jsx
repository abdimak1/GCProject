import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CommentBankOutlinedIcon from "@mui/icons-material/CommentBankOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
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
            <h4 className="user_name">Abdiyu Urgesa</h4>
          </div>
        )}
        <div className="sideLinks">
          <Item
            title="dashboard"
            to="/dashboard"
            icon={<EmailOutlinedIcon />}
            selected={true}
            setSelected={setSelected}
          />
          <Item
            title="users"
            to="/users"
            icon={<BallotOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Providers"
            to="/myapplication/log"
            icon={<CalendarMonthOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Appointments"
            to="/myapplication/log"
            icon={<EventRepeatOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Topics"
            to="/myapplication/log"
            icon={<CurrencyExchangeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Payments"
            to="/myapplication/log"
            icon={<PaidOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Correspondence"
            to="/myapplication/log"
            icon={<CommentBankOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Draft Applications"
            to="/myapplication/log"
            icon={<DraftsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Archive Applications"
            to="/myapplication/log"
            icon={<ArchiveOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </Menu>
    </Sidebar>
  );
}