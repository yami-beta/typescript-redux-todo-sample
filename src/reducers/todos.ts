import { IAction } from "../actionDispatcher";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoState {
  isFetching: boolean;
  payload: ITodo[];
}

const initialState = { isFetching: false, payload: [] };

export const todos = (
  state: ITodoState = initialState,
  action: IAction
): ITodoState => {
  switch (action.type) {
    case "todo/get": {
      if (action.meta.status === "start") {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) {
        return { isFetching: false, payload: action.payload };
      }
      return { isFetching: false, payload: action.payload };
    }
    case "todo/add": {
      if (action.meta.status === "start") {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) {
        return { isFetching: false, payload: action.payload };
      }
      return { isFetching: false, payload: action.payload };
    }
    case "todo/delete": {
      if (action.meta.status === "start") {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) {
        return { isFetching: false, payload: action.payload };
      }
      return { isFetching: false, payload: action.payload };
    }
    case "todo/complete": {
      if (action.meta.status === "start") {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) {
        return { isFetching: false, payload: action.payload };
      }
      return { isFetching: false, payload: action.payload };
    }
    default: {
      return state;
    }
  }
};
