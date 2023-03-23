export const getTaskById = (state, id) => state.tasks.byId[id];
export const getAllTasks = (state) => state.tasks.allIds.map((id) => state.tasks.byId[id]);