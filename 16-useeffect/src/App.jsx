import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
const [num, setnum] = useState(0)
const [num2, setnum2] = useState(100)
useEffect(function(){
    console.log('use effect is running...')
},[num])

  return (
    <div>
      <h3>{num}</h3>
      <h4>{num2}</h4>
      <button onClick={() => {
        setnum(num+1)
      }} 
      onMouseEnterclear={()=>{
        setnum2(num2+10)
      }}>Click</button>
    </div>
  )
}

export default App
