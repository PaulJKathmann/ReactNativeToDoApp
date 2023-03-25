export const getSubtaskById = (state, id) => state.subtasks.byId[id];
export const getSubtasksByTaskId = (state, taskId) => {
  const subtasks =  Object.values(state.subtasks.byId).filter(
    (subtask) => subtask.task_id === taskId);
  return subtasks;
};