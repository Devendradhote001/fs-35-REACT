import { axiosInstance } from "../config/axiosInstance";

export let loginApi = async (data) => {
  try {
    let res = await axiosInstance.post("/api/auth/login", data);
    return res;
  } catch (error) {
    console.log("error in login api", error);
  }
};

export let registerApi = async (data) => {
  try {
    let res = await axiosInstance.post("/api/auth/register", data);
    return res;
  } catch (error) {
    console.log("error in register api", error);
  }
};
