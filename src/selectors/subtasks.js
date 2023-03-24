export const getSubtaskById = (state, id) => state.subtasks.byId[id];
export const getSubtasksByTaskId = (state, taskId) => {
  console.log("State in selector: ", state);
  console.log("Task ID in selector: ", taskId);

  return Object.values(state.subtasks.byId).filter(
    (subtask) => subtask.taskId === taskId);
};