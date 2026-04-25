import { User } from '@/types/user';
import { api } from '@services/api';

let token: string | null = null;
let user: User;

export const login = async (email: string, password: string) => {
    const response = await api.post('/login', { email, password});

    token = response.data.bearerToken;

    user = await getCurrentUser();

    return response.data;
};

export const register = async (name: string, email: string, password: string) => {
    const response = await api.post('/register', { name, email, password });

    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get('/me');
    return response.data;
};

export const logout = () => {
    token = null;
};

export const getToken = () => token;

export const isAuthenticated = () => !token;

export const loggedInUser = () => user;