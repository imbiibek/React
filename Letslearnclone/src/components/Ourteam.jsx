import React from 'react'

const Ourteam = (props) => {
  return (
      <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

            <img src={props.image} alt={props.name} className="w-full h-48 object-cover" />

           <h1>{props.name}</h1>

        </div>
  )
}

export default Ourteam