import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='grid-lg'>
      <h2>Page not found</h2>
      <span>Return to home <NavLink to='/'>HOME</NavLink></span>
    </div>
  )
}
