// First we need to import axios.js
import axios from 'axios';
import { fetchData } from '../helpers';
// Next we make an 'instance' of it
console.log("base url", process.env.REACT_APP_BASE_URL)
const axiosConfig = axios.create({
    // .. where we make our configurations
    baseURL: process.env.REACT_APP_BASE_URL
});

const token = fetchData('token');

if (token) {
    axiosConfig.defaults.headers.Authorization = `Bearer ${token}`;
}

export default axiosConfig;