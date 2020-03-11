import React from "react";

class TodoItemCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "This is a new To-do",
      description: "This is a description of a new To-do"
    };
  }

  render() {
    return (
      <div className="todo-item-create">
        <div>Name: {this.state.name}</div>
        <div>Description: {this.state.description}</div>
      </div>
    );
  }
}

export default TodoItemCreate;
