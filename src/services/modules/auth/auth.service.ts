import { api } from '@services/api';

let token: string | null = null;

export const login = async (email: string, password: string) => {
    console.log('BASE URL:', api.defaults.baseURL);
    const response = await api.post('/login', { email, password});

    token = response.data.bearerToken;
    console.log('Received token:', token);
    return response.data;
};

export const register = async (name: string, email: string, password: string) => {
    const response = await api.post('/register', { name, email, password });

    return response.data;
};

export const logout = () => {
    token = null;
};

export const getToken = () => token;

export const isAuthenticated = () => !token;