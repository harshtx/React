import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setuserData(response.data)
    
  }
  
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){

      return <div>
        <div className='h-40 w-44 bg-white overflow-hidden rounded'>
        <img src={elem.download_url} className='h-full w-full object-cover ' alt="" />
      </div>
      <h2>{elem.author}</h2>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <h1>{index}</h1>
      <div className='flex flex-wrap gap-4'>
         {printUserData}
      </div>
      <div className='flex justify-center items-center gap-6 p-4 '>
        <button onClick={()=>{
           if(index>1){
             setindex(index-1)
           }
        }} className='bg-amber-400 text-black active:scale-95 rounded px-4 py-2 font-semibold '>Prev</button>
        <button onClick={()=>{
          setindex(index+1)
        }} className='bg-amber-400 text-black active:scale-95 rounded px-4 py-2 font-semibold '>Next </button>
      </div>
    </div>
  )
}

export default App
