import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://backend-t8k7.onrender.com/api",
  withCredentials: true,
});