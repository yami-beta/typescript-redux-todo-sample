const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use((req, res, next) => {
  const delay = 400;
  setTimeout(() => {
    next();
  }, delay);
});

const data = {
  todos: [
    { id: 0, text: "first todo", complete: false },
    { id: 1, text: "second todo", complete: false }
  ]
};

app.get("/todos/?(:id)?", (req, res) => {
  if (req.params.id) {
    const todoIndex = data.todos.findIndex(
      (element, index) => element.id === req.params.id
    );
    if (todoIndex < 0) return res.status(404).json({});
    return res.status(200).json(data.todos[todoIndex]);
  }
  res.status(200).json(data.todos);
});

app.post("/todos/?", (req, res) => {
  const id =
    data.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
  const todo = Object.assign({}, req.body, { id });
  data.todos.push(todo);
  res.status(201).json(todo);
});

app.put("/todos/?(:id)?", (req, res) => {
  let id = req.params.id;
  const todoIndex = data.todos.findIndex((element, index) => element.id === id);
  if (todoIndex < 0) {
    id = data.todos.length;
  }

  const todo = Object.assign({}, req.body, { id });
  data.todos = [
    ...data.todos.slice(0, todoIndex),
    todo,
    ...data.todos.slice(todoIndex + 1)
  ];
  res.status(200).json(todo);
});

const server = app.listen(10080, () => {
  console.log(`Server started: ${server.address().port}`);
});
