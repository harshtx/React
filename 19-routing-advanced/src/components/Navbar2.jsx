import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()

  return (
    <div className='py-2 px-5 bg-cyan-700' gap-2>
      <button onClick={()=>{
        navigate('/')
      }} 
      className='font-medium bg-emerald-800 px-5 py-2 rounded-xl m-1 cursor-pointer active:scale-95 '>
        Return to Home page
      </button>
    <button onClick={()=>{
        navigate(-1)
      }} 
      className='font-medium bg-emerald-800 px-5 py-2 rounded-xl m-1 cursor-pointer active:scale-95 '>
        Prev
    </button>
    <button onClick={()=>{
        navigate(+1)
      }} 
      className='font-medium bg-emerald-800 px-5 py-2 rounded-xl m-1 cursor-pointer active:scale-95 '>
        Next
    </button>

    </div>
  )
}

export default Navbar2
