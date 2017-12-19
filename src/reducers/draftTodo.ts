export interface IDraftTodo {
  text: string;
}

const initialState = { text: "" };

export const draftTodo = (state: IDraftTodo = initialState, action) => {
  switch (action.type) {
    case "draft/edit": {
      return { ...state, text: action.payload.text };
    }
    default: {
      return state;
    }
  }
};
