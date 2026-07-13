import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()  // ye prevent karta he form ko default behavior kam karne se
    console.log('form submited')
  }
  return (
    <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} >
           <input type="text" placeholder='Enter your name' />
           <button>Submit</button>
        </form>
    </div>
  )
}

export default App
