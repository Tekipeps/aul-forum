// import { AppThunk } from '../store';
import { asyncRequest } from '../util';

export enum Actions {
    AUTH_LOGIN = 'AUTH_LOGIN',
    AUTH_REGISTER = 'AUTH_REGISTER'
}

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    password: string;
    confirmPass: string;
    gender: 'MALE' | 'FEMALE';
    matric: string;
    email: string;
}

export const login = (payload: LoginData) => {
    return asyncRequest(Actions.AUTH_LOGIN, '/auth/login', 'post', payload);
};

export const register = (payload: RegisterData) => {
    return payload.matric
        ? asyncRequest(Actions.AUTH_LOGIN, '/auth/register', 'post', payload)
        : asyncRequest(Actions.AUTH_LOGIN, '/auth/register', 'post', {
              username: payload.username,
              password: payload.password,
              confirmPass: payload.confirmPass,
              gender: payload.gender,
              email: payload.email
          });
};

export const isValidToken = () => {
    return asyncRequest(Actions.AUTH_LOGIN, '/isValidToken', 'get');
};
