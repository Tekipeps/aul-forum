import axios from 'axios';

const baseUrl = '/api/auth';

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    password: string;
    confirmPass: string;
    gender: 'MALE' | 'FEMALE';
    matric?: string;
    email: string;
}

const login = async (data: LoginData) => {
    const response = await axios.post(`${baseUrl}/login`, data);

    return response.data;
};

const register = async (data: RegisterData) => {
    if (data?.matric?.length) {
        const response = await axios.post(`${baseUrl}/register`, data);
        return response.data;
    }
    delete data.matric;
    const response = await axios.post(`${baseUrl}/register`, data);
    return response.data;
};
export default {
    login,
    register
};
