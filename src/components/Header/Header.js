import React from "react";

import Context from "../../Context";

export default class Header extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div className="Header">
        <h1>Brendan's ToDo App</h1>
        <p># of ToDo's {this.context.todos.length}</p>
      </div>
    );
  }
}
