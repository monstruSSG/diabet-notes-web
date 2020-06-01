import axios from 'axios';

import { BASE_URL } from './config'

let axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async config => {
    const token = localStorage.getItem('token')
    
    config.headers.Authorization = `Bearer ${token}`;

    return config;
})

export default axiosInstance;