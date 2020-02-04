import axios from 'axios';

const nytAPI = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default nytAPI;