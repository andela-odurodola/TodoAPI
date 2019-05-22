import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { title, created_by } = this.props.todo;
    return (

      <div className="card card-body mb-3">
        <h4>
          {title}{created_by}

        </h4>

      </div>

    )
  }
}
