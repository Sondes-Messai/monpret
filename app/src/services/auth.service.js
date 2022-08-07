import baseService from "./base-service";
import Config from "../config/service.config";

const signup = async (user) => {
  return await baseService.post(Config.API_URL + "user/signup", user);
}

const login = async (username, password) => {
  return await baseService.post(Config.API_URL + "user/login", {
    username,
    password,
  });
}

const logout = () => {
  localStorage.removeItem("token");
}

export default { signup, login, logout };