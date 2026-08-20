import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import ProductDetails from './Pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import Form from './Pages/Form'
import Formikform from './Pages/Formikform'
import RegistrationForm from './Pages/RegistrationForm'
import MyForm from './Pages/MyForm'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="/formik" element={<Formikform />} />
        <Route path="/newformik" element={<RegistrationForm />} />
        <Route path="/myform" element={<MyForm />} />
      </Routes>

    </div>
  )
}

export default App