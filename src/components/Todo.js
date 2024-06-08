import React from 'react'

export const Todo = ({ todo }) => {
  const statusColor = 'green'
  return (
    <div className="todo-card">
      <div className="todo-info">
        <h3 className="todo-title">{todo.title}</h3>
        <p className="todo-description">{todo.description}</p>

      </div>
      <span className="timer">{todo.timer}</span>
      <div className="todo-actions">
        <div className="todo-status" style={{
          '--accent': statusColor
        }}>
          <span>{todo.status}</span>
        </div>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  )
}
