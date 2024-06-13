import React from 'react'
import { Form, useFetcher } from 'react-router-dom';

const Status = Object.freeze({
  TODO: 'todo',
  INPROGRESS: 'in_progress',
  DONE: 'done'
})

export const Todo = ({ todo }) => {
  const time = new Date(todo.timer * 1000).toISOString().substring(14, 19);
  const fetcher = useFetcher();
  const statusColor = () => {
    switch (todo.status) {
      case Status.TODO:
        return 'blue'
      case Status.INPROGRESS:
        return 'red'
      case Status.DONE:
        return 'green'
      default:
        return 'black'
    }
  }
  return (
    <div className="todo-card">
      <div className="todo-info">
        <h3 className="todo-title" >{todo.title}</h3>
        <p className="todo-description">{todo.description}</p>
      </div>
      <span className="timer">{time}</span>
      <div className="todo-actions">
        <div className="todo-status" style={{
          '--accent': statusColor()
        }}>
          <span>{todo.status}</span>
        </div>
        <fetcher.Form
          method='post'
          onSubmit={(e) => {
            if (!window.confirm("Are you sure you want to permenantly delete this todo?")) {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" name='_action' value="deleteTodo" />
          <input type="hidden" name='id' value={todo.id} />
          <button className="delete-button" >Delete</button>

        </fetcher.Form>
        {/* <button className="edit-button" >Edit</button> */}

      </div>
    </div>
  )
}
