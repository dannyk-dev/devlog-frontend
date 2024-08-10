import axios from "axios";
import { redirect } from "react-router-dom";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("auth_token"));

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn(error);
    }
    return Promise.reject(error);
  }
);

export const fetcher = (url) =>
  axiosInstance.get(url).then((response) => response.data);

export const hasToken = () => {
  const token = JSON.parse(localStorage.getItem("auth_token"));

  if (token) return true;
  else return false;
};
