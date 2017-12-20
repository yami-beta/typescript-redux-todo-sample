import { start, done, failed } from "../actionDispatcher";

const endPoint = "http://localhost:10080/todos";

export const getTodos = (id = null) => async dispatch => {
  const url = id ? `${endPoint}/${id}` : endPoint;
  const type = "todo/get";
  start(dispatch, { type });
  const res = await fetch(url);
  const json = await res.json();

  if (!res.ok) {
    return failed(dispatch, { type, payload: json });
  }

  done(dispatch, { type, payload: json });
};

export const addTodo = text => async dispatch => {
  const url = endPoint;
  const type = "todo/add";
  const todo = {
    text,
    completed: false
  };

  start(dispatch, { type });
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  });

  const payload = await res.json();

  if (!res.ok) {
    return failed(dispatch, { type, payload });
  }

  done(dispatch, { type, payload });
};

export const deleteTodo = id => async dispatch => {
  const url = `${endPoint}/${id}`;
  const type = "todo/delete";

  start(dispatch, { type });
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  });

  const payload = await res.json();

  if (!res.ok) {
    return failed(dispatch, { type, payload });
  }

  done(dispatch, { type, payload });
};

export const completeTodo = todo => async dispatch => {
  const url = `${endPoint}/${todo.id}`;
  const type = "todo/complete";

  start(dispatch, { type });
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      Object.assign({}, todo, { completed: !todo.completed })
    )
  });

  const payload = await res.json();
  if (!res.ok) {
    return failed(dispatch, { type, payload });
  }

  done(dispatch, { type, payload });
};

export const editDraftTodo = text => ({
  type: "draft/edit",
  payload: { text }
});
