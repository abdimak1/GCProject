import { useState, useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logo from "../../assets/logo.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AuthContext from "../../config/context/authContext";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const authctx = useContext(AuthContext);
  console.log(authctx);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  // const Menus = ["Profile", "Logout"];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logouthandler = () => {
    setAnchorEl(null);

    authctx.logoutUser();
    navigate(0);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={1}>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
       
        <div className="personlogo">
          <IconButton size="small" onClick={handleMenu}>
            <PersonOutlinedIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={logouthandler}>logout</MenuItem>
           
          </Menu>
        </div>
      </Box>
    </Box>
  );
};

export default Topbar;
