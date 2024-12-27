import axios from 'axios';
import { BASE_URL } from '../api';

const api = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
});

export const login = async (credentials: { email: string; password: string }) => {
  // const data = {email,password}
  // return (email,password)
  const response = await api.post('/login', credentials);
  return response.data;
};

export const register = async (userData: { email: string; password: string }) => {
  const response = await api.post('/register', userData);
  return response.data;
};