export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState = [];

export const todos = (state: ITodo[] = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload.text
        }
      ];
    }
    case "todo/delete": {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    case "todo/edit": {
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
      );
    }
    case "todo/complete": {
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
      );
    }
    default: {
      return state;
    }
  }
};
