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

const logoutUser = () => {
  localStorage.removeItem("state");
}

const getUser = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveUser = (user) => {
  try {
    const serializedState = JSON.stringify(user);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    //ignoring write erros
  }
};

export default { signup, login, logoutUser, getUser, saveUser };