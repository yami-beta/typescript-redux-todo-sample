import * as React from "react";

export const TodoForm = props => {
  const addTodo = e => {
    props.actions.addTodo(props.draftTodo.text.trim());
    props.actions.editDraftTodo("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          props.actions.editDraftTodo(e.target.value);
        }}
        value={props.draftTodo.text}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};
