
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1'; 

// Function to register a user
export const registerUser = async (userData: { fullName: string; roleId: string }) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};


export const loginUser = async (credentials: { fullName: string; code: string }) => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
};


export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users/all`);
  return response.data;
};


export const updateUser = async (userId: string, userData: { fullName: string; status: string }) => {
  const response = await axios.put(`${API_URL}/update/${userId}`, userData);
  return response.data;
};


export default {
  registerUser,
  loginUser,
  getAllUsers,
  updateUser,
};
