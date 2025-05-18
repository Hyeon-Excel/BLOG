import axios from 'axios';

const logout = () => {
    return axios.get('http://localhost:8080/logout', {
        withCredentials: true
    });
};

export default logout;
