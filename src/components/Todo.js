import React from 'react'

export const Todo = () => {
  const statusColor = 'green'
  return (
    <div className="todo-card">
      <div className="todo-info">
        <h3 className="todo-title">Title</h3>
        <p className="todo-description">Description of the todo item.</p>

      </div>
      <span className="timer">00:00:00</span>
      <div className="todo-actions">
        <div className="todo-status" style={{
          '--accent': statusColor
        }}>
          <span>Status</span>
        </div>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  )
}
