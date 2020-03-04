import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ssf-book-api.herokuapp.com/api/',
});

export default api;
