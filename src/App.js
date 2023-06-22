import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar";
import CreatekebeleUser from "./scenes/UsersPages/Kebeleusers/CreateKebeleUser";
import CreateregionalUser from "./scenes/UsersPages/Regionalusers/CreateRegionalUser";
import CreateworedaUser from "./scenes/UsersPages/WoredaUsers/CreateWoredaUser";
import CreatezoneUser from "./scenes/UsersPages/ZonalUsers/CreateZonalaccount";
import KebeleUsers from "./scenes/UsersPages/Kebeleusers";
import CreatekebelebusinessUser from "./scenes/UsersPages/Kebelebusinessuser/CreateKebelebusinessUser";
import KebeleBusiness from "./scenes/UsersPages/Kebelebusinessuser";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Regionalusers from "./scenes/UsersPages/Regionalusers";
import WoredaUsers from "./scenes/UsersPages/WoredaUsers";
import ZonalUsers from "./scenes/UsersPages/ZonalUsers";
import Login from "./scenes/Login";
import PrivateRoutes from "./config/context/PrivateRoutes";
import AuthContext from "./config/context/authContext";
import Dashboard from "./scenes/Dashboard";
import { useLocation } from "react-router-dom";
import MyResources from "./scenes/MyResources";
import SentResources from "./scenes/SentResource";
import UpdateregionalUser from "./scenes/UsersPages/Regionalusers/updateUser";
import UpdatezonalUser from "./scenes/UsersPages/ZonalUsers/updateUser";
import UpdatekebelebusinessUser from "./scenes/UsersPages/Kebelebusinessuser/updateUser";
import UpdatekebeleadminUser from "./scenes/UsersPages/Kebeleusers/updateUser";
import Registration from "./scenes/Registration/registration";
import SentResource from "./scenes/MyResources/SentResource";
import Bar from "./scenes/bar";
import CreateReport from "./scenes/Report/Createreport";
import ViewReport from "./scenes/Report/Viewreport";
import Line from "./scenes/line";
import CreateResource from "./scenes/MyResources/CreateResource";
import TransferResource from "./scenes/MyResources/TransferResource";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const authctx = useContext(AuthContext);
  const location = useLocation();
  const [showside, setshowside] = useState(true);
  useEffect(() => {
    if (location.pathname === "/") {
      setshowside(false);
    } else {
      setshowside(true);
    }
  }, [location.pathname]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {showside && authctx.isLogedin && <SideBar isSidebar={isSidebar} />}

          <main className="content">
            {showside && authctx.isLogedin && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}

            <Routes>
              <Route element={<Login />} path="/" />
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/kebeleUsers" element={<KebeleUsers />} />
                <Route path="/regional" element={<Regionalusers />} />
                <Route path="/woreda" element={<WoredaUsers />} />
                <Route path="/zonal" element={<ZonalUsers />} />
                <Route path="/createreport" element={<CreateReport />} />
                <Route path="/viewreport" element={<ViewReport />} />
                <Route
                  path="/updateuser/:id"
                  element={<UpdateregionalUser />}
                />
                <Route
                  path="/updatezoneuser/:id"
                  element={<UpdatezonalUser />}
                />
                <Route
                  path="/updatekebelebusinessuser/:id"
                  element={<UpdatekebelebusinessUser />}
                />
                <Route
                  path="/updatekebeleuser/:id"
                  element={<UpdatekebeleadminUser />}
                />
                <Route path="/kebelebusinesses" element={<KebeleBusiness />} />
                {/* <Route path="/resources/sent" element={<SentResource />} /> */}
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />

                <Route
                  path="/createkebeleaccount"
                  element={<CreatekebeleUser />}
                />
                <Route path="/registration" element={<Registration />} />
                <Route
                  path="/createkebelebusinessuser"
                  element={<CreatekebelebusinessUser />}
                />
                <Route path="/createresource" element={<CreateResource />} />

                <Route
                  path="/createregionalaccount"
                  element={<CreateregionalUser />}
                />

                <Route
                  path="/createworedaaccount"
                  element={<CreateworedaUser />}
                />
                <Route
                  path="/createzonalaccount"
                  element={<CreatezoneUser />}
                />
                <Route path="/resources" element={<MyResources />} />
                <Route
                  path="/resources/transfer"
                  element={<TransferResource />}
                />
                <Route path="/resources/sent" element={<SentResources />} />
                <Route path="*" element={<div>Page not Found!!</div>} />
              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
