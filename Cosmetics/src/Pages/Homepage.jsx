import Card1 from '@/components/Card1'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Homepage = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setData(response.data.products)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Failed to load products. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className='flex flex-wrap gap-4 p-4'>

      {data.map((product) => (
        <Card1
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
        />
      ))}

    </div>
  )
}

export default Homepage