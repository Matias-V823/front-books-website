import axios from "axios"
import type { loginType } from "../types";


export const postSignIn = async (data : loginType) => {
  try {
    const response = await axios.post("http://localhost:8087/api/auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
};
