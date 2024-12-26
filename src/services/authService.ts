import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
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