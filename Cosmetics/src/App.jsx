import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import ProductDetails from './Pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

    </div>
  )
}

export default App