import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  const user = 'harsh'

  return (
    <>
    <Navbar/>
    <div className='card'>
      <h1>Sarthak Sharma and {user}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Card/>
      <Card/>
    </div>
    {Card()}
    </>
  )
}

export default App
