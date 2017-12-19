import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import * as TodoActions from "../actions";

const mapStateToProp = ({ todos }) => {
  return { todos };
};

const mapDispatchToProp = dispatch => {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
};

export const TodoListContainer = connect(mapStateToProp, mapDispatchToProp)(
  TodoList
);
