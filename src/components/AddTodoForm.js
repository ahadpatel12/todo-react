import React from 'react'
import { useFetcher } from 'react-router-dom'

export const AddTodoForm = () => {
  const fetcher = useFetcher()
  return (
    <div className='todo-form-container'>
      <h2>Create Todo</h2>

      <fetcher.Form action="post" className='form-wrapper'>
        <input
          type="text"
          name='title'
          placeholder='Title'
        />

        <input type="text"
          name='description'
          placeholder='Description'
        />
        <div className="todo-timer">
          <input
            type="number"
            min={0}
            max={5}
            placeholder='Minutes'
            name='minutes'
            step={1}
          />

          <input
            type="number"
            min={0}
            max={59}
            name='seconds'
            placeholder='Seconds'
          />
        </div>
        <button name='_action' value="createTodo" hidden></button>
        <button type='submit' className="btn btn--submit">Add Todo</button>
      </fetcher.Form>
    </div>
  )
}
