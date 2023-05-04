import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./authContext";
const PrivateRoutes = () => {
  const { isLogedin } = useContext(AuthContext);
  console.log("ww", isLogedin);

return isLogedin ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
