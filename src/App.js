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
import UpdateregionalUser from "./scenes/UsersPages/Regionalusers/updateUser";
import UpdatezonalUser from "./scenes/UsersPages/ZonalUsers/updateUser";
import UpdatekebelebusinessUser from "./scenes/UsersPages/Kebelebusinessuser/updateUser";
import UpdatekebeleadminUser from "./scenes/UsersPages/Kebeleusers/updateUser";
import SentResource from "./scenes/MyResources/SentResource";
import Bar from "./scenes/bar";
import CreateReport from "./scenes/Report/Createreport";
import ViewReport from "./scenes/Report/Viewreport";
import Line from "./scenes/line";
import CreateResource from "./scenes/MyResources/CreateResource";
import TransferResource from "./scenes/MyResources/TransferResource";
import SentResources from "./scenes/MyResources/SentResource";
import RecievedResources from "./scenes/MyResources/RecievedResource";
import Farmer from "./scenes/UsersPages/Farmer";
import PrivateSector from "./scenes/UsersPages/Privatesector";
import FarmerRegistration from "./scenes/UsersPages/Farmer/farmerregistration";
import UpdateworedaUser from "./scenes/UsersPages/WoredaUsers/updateUser";
import Updatefarmer from "./scenes/UsersPages/Farmer/updateUser";
import CreatePrivateSector from "./scenes/UsersPages/Privatesector/createprivatesector";
import UpdatePrivatesector from "./scenes/UsersPages/Privatesector/updataUsers";
import { create_report } from "./config/apicalls/reportApicalls";
import DaUsers from "./scenes/UsersPages/DA";
import CreateDaUser from "./scenes/UsersPages/DA/CreateDauser";
import UpdatDaUser from "./scenes/UsersPages/DA/updateUser";
import Post from "./scenes/post";
import Createpost from "./scenes/post/createPost";
import Distribution from "./scenes/MyResources/Distribution";
import Transaction from "./scenes/UsersPages/Kebeleusers/transaction";
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
                <Route path="/farmer" element={<Farmer />} />
                <Route path="/privatesector" element={<PrivateSector />} />
                <Route path = "/post" element = {<Post/>}/>
                <Route path ="/transaction" element ={<Transaction/>}/>
                <Route
                  path="/farmerRegistration"
                  element={<FarmerRegistration />}
                />
                <Route path="/createreport" element={<CreateReport />} />
                <Route path="/viewreport" element={<ViewReport />} />
                <Route path="/da" element={<DaUsers />} />
                <Route
                  path="/updateuser/:id"
                  element={<UpdateregionalUser />}
                />
                <Route
                  path="/updateworedauser/:id"
                  element={<UpdateworedaUser />}
                ></Route>

                <Route
                  path="/updateprivatesector/:id"
                  element={<UpdatePrivatesector />}
                ></Route>

                <Route path="/updateda/:id" element={<UpdatDaUser />} />

                <Route
                  path="/updatezoneuser/:id"
                  element={<UpdatezonalUser />}
                />
                <Route
                  path="/updatefarmer/:id"
                  element={<Updatefarmer />}
                ></Route>

                <Route
                  path="/updatekebelebusinessuser/:id"
                  element={<UpdatekebelebusinessUser />}
                />

                <Route path="/createreport" element={<create_report />} />
                <Route
                  path="/updatekebeleuser/:id"
                  element={<UpdatekebeleadminUser />}
                />
                <Route path="/createda" element={<CreateDaUser />} />
                <Route path="/kebelebusinesses" element={<KebeleBusiness />} />
                <Route path="/resources/sent" element={<SentResource />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />
                <Route path = "/distribute" element = {<Distribution/>}/>
                <Route
                  path="/createkebeleaccount"
                  element={<CreatekebeleUser />}
                />
                <Route path="/createpost"
                element = {<Createpost/>}/>

                <Route
                  path="/createkebelebusinessuser"
                  element={<CreatekebelebusinessUser />}
                />
                <Route path="/createresource" element={<CreateResource />} />
                <Route
                  path="/createprivatesector"
                  element={<CreatePrivateSector />}
                />

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
                <Route
                  path="/resources/recieved"
                  element={<RecievedResources />}
                />
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
