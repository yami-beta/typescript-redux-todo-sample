export const addTodo = text => ({ type: "todo/add", payload: { text } });
export const deleteTodo = id => ({ type: "todo/delete", payload: { id } });
export const completeTodo = id => ({ type: "todo/complete", payload: { id } });

export const editDraftTodo = text => ({
  type: "draft/edit",
  payload: { text }
});
