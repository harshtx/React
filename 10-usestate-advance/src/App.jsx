import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user:'Sarthak',age:20})
  const btnClicked = () =>{
    const newNum = {...num}
    newNum.user = 'Harsh'
    setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App


//react asynchronously kam karta he matlab ek step pixe chalta he 
// kyu ki console bahut jaldi kam karta he is liye ek step pixe dikhta he usme 
//jabki UI me turant update ho jata he
