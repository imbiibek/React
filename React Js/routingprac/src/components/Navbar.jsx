import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

<h1>Navbar</h1>

<div>
<Link to="/">Home</Link>
<Link to="/product">Product</Link>
<Link to="/about">About </Link>

</div>


    </div>
  )
}

export default Navbar