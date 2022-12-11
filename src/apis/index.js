import axios from 'axios';
import config from '../../env.json';

const api = (method, url, data, token) => {
    return axios({ method: method, url: `${config.base_url}${url}`, data: data, headers: token ? { Authorization: `Bearer ${token || null}` } : null })
        .then((res) => { return res; })
        .catch((err) => { throw err; });
}

export const login = (data) => api('post', '/login', data).then((res) => { return res.data }).catch((err) => { throw err; });

export const signUp = (data) => api('post', '/signup', data).then((res) => { return res.data }).catch((err) => { throw err; });

export const addTask = (data, token) => api('post', '/task', data, token).then((res) => { return res.data }).catch((err) => { throw err; });

export const updateTask = (data, token) => api('put', `/task/${data._id}`, data, token).then((res) => { return res.data }).catch((err) => { throw err; });

export const getAllTasks = (data, token) => api('get', '/tasks', data, token).then((res) => { return res.data }).catch((err) => { throw err; });

export const deleteTask = (id, token) => api('delete', `/task/${id}`, null, token).then((res) => { return res.data }).catch((err) => { throw err; });