const ToDo = require("./todoLib");

const getAllTodos = (req, res) => {
  const todos = ToDo.getAll();
  res.json(todos);
};

const createTodo = (req, res) => {
  const { todo, completed, dueDate } = req.body;

  const newToDo = ToDo.addOne(todo, completed, dueDate);

  if (newToDo) {
    res.json(newToDo);
  } else {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = ToDo.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

const updateTodo = (req, res) => {
  const todoId = req.params.todoId;

  const { todo, completed, dueDate } = req.body;

  const updatedTodo = ToDo.updateOneById(todoId, { todo, completed, dueDate });

  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;

  const isDeleted = ToDo.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
