import React from "react";
import "./TodoItemDisplay.css";

function TodoItemDisplay(props) {
  let show_description = false;
  if (props.todo.complete) {
    return null;
  }

  return (
    <div className="todo-item-display">
      {" "}
      <span className="has-text-primary">{props.todo.name}</span>
      {show_description ? props.todo.description : null}{" "}
    </div>
  );
}

export default TodoItemDisplay;
