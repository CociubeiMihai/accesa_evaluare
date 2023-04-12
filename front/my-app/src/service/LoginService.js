import axios from "axios";

const API = "https://localhost:8080";

export const authorize = (email, password) => {
  return axios.post(API + "/user/login", { email: email, password: password });
};

export const register = (email, password) => {
  return axios.post(API + "/user/register", {
    email: email,
    password: password,
  });
};

export const findAllUsers = () => {
  return axios.get("https://localhost:8080/user/all");
};