import axios from 'axios';
import { getToken } from "@services/modules/auth/auth.service";

export const api = axios.create({
    baseURL: "https://apiservice-phty7uxjhlieu.azurewebsites.net/"
})

api.interceptors.request.use((config) => {
    const token = getToken();

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log('Requesting:', config.method?.toUpperCase(), config.url, 'with token:', token);
    return config;  
});