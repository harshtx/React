import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <p>{props.user} says my age is {props.age}</p>
            <button>view profile</button>
    </div>
  )
}

export default Card
