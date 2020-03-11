import React from "react";
import "./App.sass";
import "./App.css";

//NOTE: Importing local application components.
import TodoList from "./components/todo_list/TodoList.js";
import TodoItemCreate from "./components/TodoItemCreate/TodoItemCreate.js";
//NOTE: Dummy Data: should be removed after the backend is created.
let todo_items = [
  {
    id: 1,
    name: "Todo Item 1",
    description: "This is a todo item."
  },
  {
    id: 2,
    name: "Todo Item 2",
    description: "This is a todo item."
  },
  {
    id: 3,
    name: "Todo Item 3",
    description: "This is a todo item."
  },
  {
    id: 4,
    name: "Todo Item 4",
    description: "This is a todo item."
  }
];

function App() {
  return (
    <div className="App">
      <TodoList todos={todo_items} />
      <TodoItemCreate />
    </div>
  );
}

export default App;
