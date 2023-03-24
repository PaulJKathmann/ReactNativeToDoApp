const initialTaskState = {
  byId: {},
  allIds: [],
  status: 'idle',
  error: null,
};

const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case 'tasks/fetchTasksRequest':
      return {
        ...state,
        status: 'loading',
      };
    case 'tasks/fetchTasksSuccess':
      const fetchedTasksById = action.payload.reduce((acc, task) => {
        acc[task.id] = task;
        return acc;
      }, {});
      return { 
        ...state, 
        byId: {
          ...state.byId,
          ...fetchedTasksById
        },
        allIds: [...state.allIds, ...action.payload.map((task) => task.id)],
        status: 'success', 
        error: null 
      };
    case 'tasks/fetchTasksFailure':
      return { ...state, status: 'failure', error: action.payload.error };
    case 'tasks/addTaskSuccess':
      return { 
        ...state, 
        byId: { 
          ...state.byId, 
          [action.payload.id]:  action.payload
        }, 
        allIds: [...state.allIds, action.payload.id],
        status: 'success', 
        error: null
      };
    case 'tasks/addTaskFailure':
      return { ...state, status: 'failure', error: action.payload.error };
    case 'tasks/updateTaskSuccess':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        },
        allIds: [...state.allIds, action.payload.id],
        status: 'success',
        error: null,
      };
    case 'tasks/updateTaskFailure':
      return { ...state, status: 'failure', error: action.payload.error };
    case 'tasks/deleteTaskSuccess':
      const { [action.payload.id]: _, ...remainingTasks } = state.byId;
      return {
        ...state,
        byId: remainingTasks,
        allIds: state.allIds.filter((id) => id !== action.payload.id),
        status: 'success',
        error: null,
      };
    case 'tasks/deleteTaskFailure':
      return { ...state, status: 'failure', error: action.payload.error };
    case 'SET_SELECTED_TASK':
      return {
        ...state,
        selectedTask: action.payload
      };
    default:
      return state;
  }
};

export default taskReducer;