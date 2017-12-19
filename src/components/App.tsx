import * as React from "react";
import { Provider } from "react-redux";
import { TodoListContainer } from "../containers/TodoListContainer";
import { TodoFormContainer } from "../containers/TodoFormContainer";
import store from "../store";

const { Fragment } = React;
const App = props => {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>Typescript Redux Todo Sample</h1>
        <TodoFormContainer />
        <TodoListContainer />
      </Fragment>
    </Provider>
  );
};

export { App };
