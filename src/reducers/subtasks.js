const initialSubtasksState = {
    byId: {},
    allIds: [],
    status: 'idle',
    error: null,
  };

const subtasksReducer = (state = initialSubtasksState, action) => {
    switch (action.type) {
        case 'tasks/fetchTasksSuccess':
          const fetchedSubtasksById = action.payload.reduce((acc, task) => {
            task.subtasks.forEach((subtask) => {
              acc[subtask.id] = subtask;
            });
            return acc;
          }, {});
   
          return {
            ...state,
            status: 'success',
            byId: { ...state.byId, ...fetchedSubtasksById },
            allIds: [
              ...state.allIds,
              ...action.payload.flatMap((task) => task.subtasks.map((subtask) => subtask.id))
            ],
          };
        case 'tasks/fetchTasksFailure':
          return { ...state, status: 'failure', error: action.payload.error };
        case 'subtasks/addSubtaskSuccess':
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
        case 'subtasks/addSubtaskFailure':
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
        case 'tasks/updateSubtaskSuccess':
          return {
            ...state,
            byId: {
              ...state.byId,
              [action.payload.id]: action.payload
            },
            status: 'success',
            error: null,
          };
        case 'tasks/updateSubtaskFailure':
          return { ...state, status: 'failure', error: action.payload.error };
        default:
          return state;
      }
};

export default subtasksReducer;