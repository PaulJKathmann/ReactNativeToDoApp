import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    subtasks: subtasksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
