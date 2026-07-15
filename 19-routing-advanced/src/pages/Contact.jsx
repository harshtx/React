import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-10 py-10'>
            <Link className='text-xl font-semibold' to='/contact/men' >Men</Link>
            <Link className='text-xl font-semibold' to='/contact/women' >Women</Link>
        </div>
      
      <Outlet/>
    </div>
  )
}

export default Contact