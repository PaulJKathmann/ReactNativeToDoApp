import { fetchTasks, createTask, apiUpdateTask, apiDeleteTask } from '../api/taskApi';

export const fetchTasksAction = () => async (dispatch) => {
  try {
    const response = await fetchTasks();
    dispatch({ type: 'tasks/fetchTasksSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'tasks/fetchTasksFailure', payload: error.message });
  }
};

export const addTask = (name) => async (dispatch) => {
  try {
    const response = await createTask({ name, completed: false });
    dispatch({ type: 'tasks/addTaskSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'tasks/addTaskFailure', payload: error.message });
  }
};

export const completeTask = (task) => async (dispatch) => {
  try {
    const response = await apiUpdateTask(task);
    console.log("API Task RESPONSE", response.data);
    dispatch({ type: 'tasks/updateTaskSuccess', payload: response.data });
  } catch (error) {
    console.log("API Task RESPONSE Failed", error.message);
    dispatch({ type: 'tasks/updateTaskFailure', payload: error.message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await apiDeleteTask(id);
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



