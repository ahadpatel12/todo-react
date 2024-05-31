// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
console.log("base url", process.env.REACT_APP_BASE_URL)
const axiosConfig = axios.create({
    // .. where we make our configurations
    baseURL: process.env.REACT_APP_BASE_URL
});


const token = JSON.parse(localStorage.getItem("token"));

if (token) {
    axiosConfig.defaults.headers.Authorization = `Bearer ${token}`;
}

export default axiosConfig;