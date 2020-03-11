import React from "react";
import "./TodoList.css";
import TodoItemDisplay from "../todo_item/todo_item_display";

function TodoList(props) {
  const todoComponents = props.todos.map(todo => (
    <TodoItemDisplay key={todo.id} todo={todo} />
  ));
  return <div className="todo-list">{todoComponents}</div>;
}

export default TodoList;
