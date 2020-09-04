import React from "react";

import Context from "../../Context";

export default class ToDo extends React.Component {
  static contextType = Context;
  render() {
    const { todo } = this.props;
    return (
      <li
        onClick={(e) => this.context.toggleComplete(todo.id)}
        className={`completed-${todo.completed}`}
      >
        {todo.title}
      </li>
    );
  }
}
