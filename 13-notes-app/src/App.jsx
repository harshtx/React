import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,detail})
    settask(copyTask)

    settitle('')
    setdetail('')
  }
  
  const deleteNode = (idx) => {
     const copyTask = [...task]
     copyTask.splice(idx,1)
     settask(copyTask)
  }
 



  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex justify-between items-start p-10'>


      <div className='flex gap-4 w-1/2 items-start flex-col'>

          <input type="text"
          placeholder='Enter Notes Heading '
          className='px-5 w-full py-2 border-2 rounded'
          value={title}
          onChange={(e) =>{
            settitle(e.target.value)
          }}
          />

          <textarea
          className='px-5 w-full py-2 h-30 border-2 rounded'
          placeholder='Write Details'
          value={detail}
          onChange={(e)=>{
            setdetail(e.target.value)
          }}
          />

         <button className='bg-white text-black px-5 w-full py-2 rounded'>Add Note</button>
      </div>
      <img className='h-60' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_3WVrfRIeSw7JNEbZnYkvEAFYByH3nNYeD_pq1m7gg&s=10" alt="" />
      </form>
      <div >
        <h1 className='text-xl font-bold ml-10'>YOUR NOTES</h1>
       <div className="h-[50vh] flex flex-wrap p-10 gap-5 overflow-auto">
           {task.map(function(elem,idx){
            return <div className='flex justify-between flex-col items-start relative h-52 w-42 rounded-2xl text-black p-4 bg-white'>
              <div>
               <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
               <p className='mt-2 leading-tight font-medium'>{elem.detail}</p>
              </div>
              <button onClick={() =>{
                deleteNode(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded font-bold text-white '>Delete</button>
            </div> 
           
           })}
          
        </div>
      </div>
    </div>
  )
}

export default App
