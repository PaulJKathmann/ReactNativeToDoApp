import { createSubtask, apiDeleteSubtask, apiUpdateSubtask } from '../api/subtaskApi';

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
    const response = await apiUpdateSubtask(subtask, token);
    dispatch({ type: 'tasks/updateSubtaskSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'tasks/updateSubtaskFailure', payload: error.message });
  }
};

export const deleteSubtask = (subtask) => async (dispatch) => {
  try {
    const response = await apiDeleteSubtask(subtask, token);
    dispatch({ type: 'subtasks/deleteSubtaskSuccess', payload: { id: subtask.id } });
  } catch (error) {
    dispatch({ type: 'subtasks/deleteSubtaskFailure', payload: error.message });
  }
};