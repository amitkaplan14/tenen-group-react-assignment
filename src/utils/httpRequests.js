import axios from 'axios';

export const Get = (url) => {
    return axios.get(url);
};