import React, { useState } from "react";

const AuthContext = React.createContext({
  token: localStorage.getItem("authTokens"),
  isLoggedIn: false,
  role: "",
  codeName: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("authTokens");
  const intialRole = localStorage.getItem("userRole");
  const intialCodeName = localStorage.getItem("codeName");
  const [token, setToken] = useState(intialToken);
  const [role, setRole] = useState(intialRole);
  const [codeName, setCodeName] = useState(intialCodeName);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, role, codeName) => {
    setToken(token);
    setRole(role);
    setCodeName(codeName);
    localStorage.setItem("authTokens", token);
    localStorage.setItem("userRole", role);
    localStorage.setItem("codeName", codeName);
  };

  const logoutHandler = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("userRole");
    localStorage.removeItem("codeName");
  };

  const contextValue = {
    token: token,
    role: role,
    codeName: codeName,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
