import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/tasks';

export const createSubtask = (taskId, subtask) => {
    return axios.post(`${API_URL}/${taskId}/subtasks`, subtask);
};

export const apiUpdateSubtask = (subtask) => {
    console.log("API subtask", subtask.completed);
    return axios.put(`${API_URL}/${subtask.task_id}/subtasks/${subtask.id}`, subtask);
};