import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Button/>
    </>
  )
}

export default App
