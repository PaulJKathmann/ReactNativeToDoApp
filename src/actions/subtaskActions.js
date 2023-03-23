import { createSubtask } from '../api/subtaskApi';

export const addSubtask = (taskId, name) => async (dispatch) => {
    try {
      const response = await createSubtask(taskId , {name, completed: false });
      dispatch({ type: 'subtasks/addSubtaskSuccess', payload: response.data });
    } catch (error) {
      dispatch({ type: 'subtasks/addSubtaskFailure', payload: error.message });
    }
}