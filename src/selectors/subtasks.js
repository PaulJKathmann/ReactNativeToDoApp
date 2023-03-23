export const getSubtaskById = (state, id) => state.subtasks.byId[id];
export const getSubtasksByTaskId = (state, taskId) => {
  const subtaskIds = state.subtasks.allIds.filter((id) => state.subtasks.byId[id].taskId === taskId);
  return subtaskIds.map((id) => state.subtasks.byId[id]);
};