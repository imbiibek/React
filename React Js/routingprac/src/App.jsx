import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import About from './pages/About'

const App = () => {
  return (
    <div>

<Navbar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/product" element={<Product />} />
<Route path="/about" element={<About />} />
</Routes>

    </div>
  )
}

export default App