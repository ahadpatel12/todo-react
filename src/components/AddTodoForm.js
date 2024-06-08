import React from 'react'
import { useFetcher } from 'react-router-dom'

export const AddTodoForm = () => {



  const fetcher = useFetcher()
  let submitting = fetcher.state === "submitting"


  return (
    <div className='todo-form-container'>
      <h2>Create Todo</h2>

      <fetcher.Form
        method='post'
        className='form-wrapper'
      >
        <input
          type="text"
          name='title'
          placeholder='Title'
          aria-label="Todo title"
          required
        />

        <input type="text"
          name='description'
          placeholder='Description'
          aria-label='Todo Description'
          required
        />

        <div className="todo-timer">
          <input
            type="number"
            min={0}
            max={5}
            defaultValue={1}
            placeholder='Minutes'
            name='minutes'
            required
            step={1}
          />

          <input
            type="number"
            defaultValue={0}
            min={0}
            max={59}
            name='seconds'
            required
            placeholder='Seconds'
          />
        </div>
        <input type="hidden" name='_action' value="createTodo" />
        <button type='submit' disabled={submitting} className="btn btn--submit"> {submitting ? "Submitting.." : "Add Todo"}</button>
      </fetcher.Form>
    </div>
  )
}
