import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';

export default class Todos extends Component {

  state = {
    todos: []
  };

  async componentDidMount () {
    const res = await axios.get('/todos')

    this.setState({ todos: res.data });

  }
  render() {
    const { todos } = this.state;
    return (
      <div>
      <h1 className="display-4 mb-2">
          <span className="text-danger">TODO</span> List
        </h1>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}

      </div>
    )
  }
}
