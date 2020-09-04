import React from "react";
import Todo from "../Todo/Todo";
import Context from "../../Context";

export default class ToddoList extends React.Component {
  static contextType = Context;
  render() {
    return (
      <ul>
        {this.context.todos
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <Todo todo={todo} />
          ))}
      </ul>
    );
  }
}
