import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const getProduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    setProduct(response.data)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  if (!product) {
    return <div className='p-4'>Loading...</div>
  }

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <img
        src={product.thumbnail}
        alt={product.title}
        className='w-full h-80 object-cover rounded-lg'
      />

      <h1 className='text-2xl font-bold text-gray-900 mt-4'>{product.title}</h1>
      <p className='text-gray-500 mt-2'>{product.description}</p>
      <p className='text-xl font-bold text-emerald-600 mt-4'>${product.price}</p>
      <p className='text-sm text-gray-400 mt-1'>Rating: {product.rating}</p>
      <p className='text-sm text-gray-400'>Brand: {product.brand}</p>
    </div>
  )
}

export default ProductDetails