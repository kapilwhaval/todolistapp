import axios from 'axios';
import config from '../../env.json';

const api = (method, url, data, token) => {
    return axios({ method: method, url: `${config.base_url}${url}`, data: data, headers: token ? { Authorization: `Bearer ${token || null}` } : null })
        .then((res) => { return res; })
        .catch((err) => { throw err; });
}

export const login = (data) => api('post', '/login', data).then((res) => { return res.data }).catch((err) => { throw err; });

export const signUp = (data) => api('post', '/signup', data).then((res) => { return res.data }).catch((err) => { throw err; });