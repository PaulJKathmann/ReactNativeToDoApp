import { fetchTasks, createTask, apiUpdateTask, apiDeleteTask } from '../api/taskApi';

export const fetchTasksAction = (token) => async (dispatch) => {
  try {
    const response = await fetchTasks(token);
    dispatch({ type: 'tasks/fetchTasksSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'tasks/fetchTasksFailure', payload: error.message });
  }
};

export const addTask = (name, token) => async (dispatch) => {
  try {
    const response = await createTask({ name, completed: false }, token);
    dispatch({ type: 'tasks/addTaskSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'tasks/addTaskFailure', payload: error.message });
  }
};

export const completeTask = (task, token) => async (dispatch) => {
  try {
    const response = await apiUpdateTask(task, token);
    dispatch({ type: 'tasks/updateTaskSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'tasks/updateTaskFailure', payload: error.message });
  }
};

export const deleteTask = (id, token) => async (dispatch) => {
  try {
    await apiDeleteTask(id, token);
    dispatch({ type: 'tasks/deleteTaskSuccess', payload: { id } });
  } catch (error) {
    dispatch({ type: 'tasks/deleteTaskFailure', payload: error.message });
  }
};

export const setSelectedTask = (task) => {
  return {
    type: 'SET_SELECTED_TASK',
    payload: task
  };
};



