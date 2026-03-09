import axios from "axios";
import { url } from "../constant/constant";
const token = localStorage.getItem('token');
export const handleDelete = async (id, module) => {
  try {
    const res = await axios.delete(`${url}/api/${module}/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    return res.status === 200;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export const viewById = async (id, module) => {
  try {
    const response = await axios.post(`${url}/api/${module}/view/${id}`);
    console.log(response);
  } catch (error) {

  }
}


