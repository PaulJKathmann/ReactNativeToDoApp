import { createSubtask } from '../api/subtaskApi';
import { apiUpdateSubtask } from '../api/subtaskApi';

export const addSubtask = (taskId, name) => async (dispatch) => {
    try {
      const response = await createSubtask(taskId , {name, completed: false });
      dispatch({ type: 'subtasks/addSubtaskSuccess', payload: response.data });
    } catch (error) {
      dispatch({ type: 'subtasks/addSubtaskFailure', payload: error.message });
    }
}

export const completeSubtask = (subtask) => async (dispatch) => {
  try {
    const response = await apiUpdateSubtask(subtask);
    console.log("API RESPONSE", response.data);
    dispatch({ type: 'tasks/updateSubtaskSuccess', payload: response.data });
  } catch (error) {
    console.log("API RESPONSE Failed", error.message);
    dispatch({ type: 'tasks/updateSubtaskFailure', payload: error.message });
  }
};