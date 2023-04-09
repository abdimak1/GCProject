import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const IslogedIn = !!authTokens;
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  let loginUser = (token) => {
    const user = jwt_decode(token?.access);
    setAuthTokens(token);
    setRole(user.role);
    setUsername(user.username);
    localStorage.setItem("authTokens", JSON.stringify(token));
    localStorage.setItem("role", user.role);
    localStorage.setItem("username", user.username);
  };

  let logoutUser = () => {
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
  };

  let contextData = {
    authTokens: authTokens,
    role: role,
    username: username,
    isLogedin: IslogedIn,
    setAuthTokens: setAuthTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
