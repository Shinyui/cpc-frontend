import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

API.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("accessToken")}`;
    return config;
  },
  (error) => {
    toast.error("something went wrong", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
);

API.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 500) {
      toast.error("something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
);

const uninterceptedAxiosInstance = axios.create();

export { API, uninterceptedAxiosInstance };
