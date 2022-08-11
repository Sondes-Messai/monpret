import axios from "axios";
import Config from "../config/service.config";

const baseService = axios.create({ baseURL: Config.API_URL });
baseService.interceptors.request.use((config) => {
  const user = localStorage.getItem("state");
  if (user) config.headers["Authorization"] = "Bearer " + JSON.parse(user).token;
  return config;
});

export default baseService;
