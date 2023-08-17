import Axios, { AxiosInstance } from "axios";

export const axios: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Accept: "application/json",
  },
});

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem("netzweltAccessToken");
  config.headers!["Authorization"] = "Bearer " + token;
  return config;
});
