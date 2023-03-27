import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks';
import subtasksReducer from './subtasks';
import authenticationReducer from './authentication';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    subtasks: subtasksReducer,
    auth: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
