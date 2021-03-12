import axios from 'axios';

const baseUrl = '/api/auth';

const login = async ({ username, password }: { username: string; password: string }) => {
    const response = await axios.post(`${baseUrl}/login`, { username, password });

    return response.data
};

export default {
    login
};
