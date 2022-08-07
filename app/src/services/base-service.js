import axios from "axios";
import Config from "../config/service.config";

const baseService = axios.create({ baseURL: Config.API_URL });
baseService.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default baseService;
