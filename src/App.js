import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Context from "./Context";

export default class App extends React.Component {
  state = {
    todos: [],
    setNewTodo: (e) => this.setState({ newTodo: e.target.value }),
    toggleComplete: (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (id === todo.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      });
    },
    createTodo: (e) => {
      e.preventDefault();
      if (this.state.newTodo !== "") {
        const newTodo = {
          userId: 1,
          id: this.state.todos.length + 1,
          title: this.state.newTodo,
          completed: false,
        };

        this.setState({
          todos: [...this.state.todos, newTodo],
        });
      }
    },
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => this.setState({ todos }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Header />
          <AddTodo />
          <TodoList />
        </div>
      </Context.Provider>
    );
  }
}
