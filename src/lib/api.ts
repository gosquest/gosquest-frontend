import axios, { AxiosInstance } from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const API_URL = "http://localhost:4000/api/v1";

const commonHeaders = {
   "Content-Type": "application/json",
};

const unauthorizedAxiosInstance: AxiosInstance = axios.create({
   baseURL: API_URL,
   headers: commonHeaders,
});

const authorizedAxiosInstance: AxiosInstance = axios.create({
   baseURL: API_URL,
   headers: commonHeaders,
});

authorizedAxiosInstance.interceptors.request.use(
   async (config) => {
      const token = await cookies.get("auth-token");
      if (token) {
         config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export const unauthorizedAPI = unauthorizedAxiosInstance;
export const authorizedAPI = authorizedAxiosInstance;
