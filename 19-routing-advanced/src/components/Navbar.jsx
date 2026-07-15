import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Bengol tiger</h2>
      <div className='flex gap-8'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
