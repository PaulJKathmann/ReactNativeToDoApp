export const getSubtaskById = (state, id) => state.subtasks.byId[id];
export const getSubtasksByTaskId = (state, taskId) => {
  console.log("State in selector: ", state);
  console.log("Task ID in selector: ", taskId);
  
  const subtasks =  Object.values(state.subtasks.byId).filter(
    (subtask) => subtask.task_id === taskId);
  console.log("Subtask IDs:  ", Object.values(state.subtasks.byId));
  return subtasks;
};