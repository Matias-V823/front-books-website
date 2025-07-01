import axios from "axios"
import type { loginType, registerType } from "../types";


export const postSignIn = async (data : loginType) => {
  try {
    const response = await axios.post("http://localhost:8087/api/auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
};


export const registerUser = async (data : registerType) => {
  try {
    const response = await axios.post("http://localhost:8087/api/auth/register", data);
    console.log('Cuenta registrada con éxito')
    return response.data;
  } catch (error) {
    console.log(error)
  }
};