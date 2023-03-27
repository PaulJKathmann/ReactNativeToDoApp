import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/tasks';

export const createSubtask = (taskId, subtask, token) => {
    return axios.post(`${API_URL}/${taskId}/subtasks`, subtask, { headers: { Authorization: token } });
};

export const apiUpdateSubtask = (subtask, token) => {
    console.log("API subtask", subtask.completed, token);
    return axios.put(`${API_URL}/${subtask.task_id}/subtasks/${subtask.id}`, subtask, { headers: { Authorization: token } });
};

export const apiDeleteSubtask = (subtask, token) => {
    return axios.delete(`${API_URL}/${subtask.task_id}/subtasks/${subtask.id}`, { headers: { Authorization: token } });
};