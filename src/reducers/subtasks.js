const initialSubtasksState = {
    byId: {},
    allIds: [],
    status: 'idle',
    error: null,
  };

const subtasksReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case 'subtasks/fetchSubtasksRequest':
          return {
            ...state,
            status: 'loading',
          };
        case 'subtasks/fetchSubtasksSuccess':
          const fetchedSubtasksById = action.payload.reduce((acc, subtask) => {
            acc[subtask.id] = subtask;
            return acc;
          }, {});
          return { 
            ...state, 
            byId: {
              ...state.byId,
              ...fetchedSubtasksById
            },
            allIds: [...state.allIds, ...action.payload.subtasks.map((subtask) => subtask.id)],
            status: 'success', 
            error: null 
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
        default:
          return state;
      }
    };
}

  