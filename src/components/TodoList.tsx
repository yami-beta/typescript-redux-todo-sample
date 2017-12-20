import * as React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.todos.payload.map((todo, i: number) => {
        return (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={e => {
                  e.preventDefault();
                  props.actions.completeTodo(todo);
                }}
              />
              {todo.text}
            </label>
            <button
              onClick={e => {
                props.actions.deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { TodoList };
