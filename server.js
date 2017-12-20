const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response
  // 対策
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
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
    { id: 0, text: "first todo", completed: false },
    { id: 1, text: "second todo", completed: false }
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
  res.status(201).json(data.todos);
});

app.put("/todos/?(:id)?", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = data.todos.findIndex((element, index) => {
    return element.id === id;
  });
  if (todoIndex < 0) {
    return res.status(500).json({});
  }

  const todo = Object.assign({}, data.todos[todoIndex], req.body);
  data.todos = [
    ...data.todos.slice(0, todoIndex),
    todo,
    ...data.todos.slice(todoIndex + 1)
  ];
  res.status(200).json(data.todos);
});

app.delete("/todos/?(:id)?", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = data.todos.findIndex((el, index) => el.id === id);
  if (todoIndex < 0) {
    return res.status(404).json({});
  }

  data.todos = [
    ...data.todos.slice(0, todoIndex),
    ...data.todos.slice(todoIndex + 1)
  ];
  res.status(200).json(data.todos);
});

const server = app.listen(10080, () => {
  console.log(`Server started: ${server.address().port}`);
});
