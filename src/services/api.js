import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://backend-56gc.onrender.com', 
});

export default api;
