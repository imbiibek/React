import React from 'react'

const Product = (props) => {
  return (
    <div>
    <h3>{props.title}</h3>
    <p>Price: {props.price}</p>
    </div>
  )
}

export default Product