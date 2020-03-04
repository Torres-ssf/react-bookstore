import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ssf-book-api.herokuapp.com/',
});

export default api;