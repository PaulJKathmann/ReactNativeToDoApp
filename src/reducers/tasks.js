const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/fetchTasksRequest':
      return {
        ...state,
        status: 'loading',
      };
    case 'tasks/fetchTasksSuccess':
      return { ...state, tasks: action.payload, status: 'success', error: null };
    case 'tasks/fetchTasksFailure':
      return { ...state, status: 'failure', error: action.payload };
    case 'tasks/addTaskSuccess':
      return { ...state, tasks: [...state.tasks, action.payload], status: 'success', error: null };
    case 'tasks/addTaskFailure':
      return { ...state, status: 'failure', error: action.payload };
    case 'tasks/updateTaskSuccess':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        status: 'success',
        error: null,
      };
    case 'tasks/updateTaskFailure':
      return { ...state, loading: false, error: action.payload };
    case 'tasks/deleteTaskSuccess':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        status: 'success',
        error: null,
      };
    case 'tasks/deleteTaskFailure':
      const { taskId, subtask } = action.payload;
      const task = state.byId[taskId];
      return { 
        ...state,
        byId: { 
          ...state.byId,
          [taskId]: {
            ...task,
            subtasks: {
              ...task.subtasks,
              [subtask.id]: subtask
            }
          }
        }
        status: 'success', error: action.payload 
      };
    case 'subtasks/addSubtaskSuccess':
      return { ...state, tasks: [...state.tasks, action.payload], status: 'success', error: null };
    case 'subtasks/addSubtaskFailure':
      return { ...state, status: 'failure', error: action.payload };
    case 'SET_SELECTED_TASK':
      return {
        ...state,
        selectedTask: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;