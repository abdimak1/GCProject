import { useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar";
import FullFeaturedCrudGrid from "./scenes/UsersPages/allUsers";
import CreatekebeleUser from "./scenes/UsersPages/Kebeleusers/CreateKebeleUser";
import CreateregionalUser from "./scenes/UsersPages/Regionalusers/CreateRegionalUser";
import CreateworedaUser from "./scenes/UsersPages/WoredaUsers/CreateWoredaUser"
import CreatezoneUser from "./scenes/UsersPages/ZonalUsers/CreateZonalaccount";
import KebeleUsers from "./scenes/UsersPages/Kebeleusers";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Regionalusers from "./scenes/UsersPages/Regionalusers";
import WoredaUsers from "./scenes/UsersPages/WoredaUsers";
import ZonalUsers from "./scenes/UsersPages/ZonalUsers";
import Formuser from "./scenes/newuser";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />


            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/users" element={<FullFeaturedCrudGrid />} />
              
              <Route path="/kebeleUsers" element={<KebeleUsers />} />
              <Route path="/regional" element={<Regionalusers />} />
              <Route path="/woreda" element={<WoredaUsers />} />
              <Route path="/zonal" element={<ZonalUsers />} />
              <Route path="/createkebeleaccount" element={<CreatekebeleUser />} />
              <Route path="/createregionalaccount" element= {<CreateregionalUser/>}/>
              <Route path="/createworedaaccount" element= {<CreateworedaUser/>}/>
              <Route path="/createzonalaccount" element= {<CreatezoneUser/>}/>
              <Route path = "/manageusers" element = {<Formuser/>} />


        


            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
