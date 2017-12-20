import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { TodoForm } from "../components/TodoForm";
import * as TodoActions from "../actions";

const mapStateToProp = ({ draftTodo }) => {
  return { draftTodo };
};

const mapDispatchToProp = dispatch => {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
};

export const TodoFormContainer = connect(mapStateToProp, mapDispatchToProp)(
  TodoForm
);
