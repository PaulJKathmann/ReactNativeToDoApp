import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/tasks';

export const fetchTasks = (token) => {
  return axios.get(API_URL, { headers: { Authorization: token } });
};

export const createTask = (task, token) => {
  return axios.post(API_URL, task, { headers: { Authorization: token } });
};

export const apiUpdateTask = (task, token) => {
  return axios.put(`${API_URL}/${task.id}`, task, { headers: { Authorization: token } });
};

export const apiDeleteTask = (id, token ) => {
  return axios.delete(`${API_URL}/${id}`, { headers: { Authorization: token } });
};

