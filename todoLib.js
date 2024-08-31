// The data model for a to-do item is as follows
/*
{
    "todo": "Buy groceries",
    "completed": false,
    "dueDate": "2024-08-30"
}
*/

let todoArray = [];

let nextId = 1;

function getAll() {
  return todoArray;
}

function addOne(todo, completed, dueDate) {
  // Check if any parameter is empty or undefined
  if (!todo || completed === undefined || !dueDate) {
    return false;
  }

  const newTodo = {
    id: nextId++,
    todo,
    completed,
    dueDate,
  };

  todoArray.push(newTodo);
  return newTodo;
}

function findById(id) {
  const numericId = Number(id);
  const todo = todoArray.find((item) => item.id === numericId);
  if (todo) {
    return todo;
  } else {
    return false;
  }
}

function updateOneById(id, updatedData) {
  const todo = findById(id);
  if (todo) {
    if (updatedData.todo) {
      todo.todo = updatedData.todo;
    }
    if (updatedData.completed !== undefined) {
      todo.completed = updatedData.completed;
    }
    if (updatedData.dueDate) {
      todo.dueDate = updatedData.dueDate;
    }
    return todo;
  }
  return false;
}

function deleteOneById(id) {
  const todo = findById(id);
  if (todo) {
    const initialLength = todoArray.length;
    todoArray = todoArray.filter((todo) => todo.id !== Number(id));
    return todoArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {
  let result = addOne("Buy groceries", false, "2024-08-30");
  console.log(result);
  result = addOne("Clean the house", true, "2024-08-31");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "updateOneById called:",
    updateOneById(1, { completed: true, dueDate: "2024-09-01" })
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const ToDo = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDo;
