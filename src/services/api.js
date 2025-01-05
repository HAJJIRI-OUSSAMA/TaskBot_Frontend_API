import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://backend-56gc.onrender.com', // Replace with your production API URL
});

export default api;
