import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
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

const enhancer = compose(
  connect(mapStateToProp, mapDispatchToProp),
  lifecycle({
    componentDidMount() {
      this.props.actions.getTodos();
    }
  })
);

export const TodoListContainer = enhancer(TodoList);
