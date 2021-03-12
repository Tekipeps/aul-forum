import axios from 'axios';

const baseUrl = '/api/auth';

interface data{
    username:string;
    password:string;
}

const login = async ({ username, password }: data) => {
    const response = await axios.post(`${baseUrl}/login`, { username, password });

    return response.data
};

export default {
    login
};
