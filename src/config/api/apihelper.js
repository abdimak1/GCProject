import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const axiosinstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // baseURL:"http://localhost:4000",
});

// axiosinstance.defaults.headers["Authorization"] = Bearer ${auth.getToken()};
axiosinstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authTokens");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export  {axiosinstance,baseUrl};
