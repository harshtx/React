import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
  // async function getData(){
  //  const reponse= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(reponse)
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data)
  // }

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list')
  setdata(response.data)
}


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello , {elem.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
