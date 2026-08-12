import Card1 from '@/components/Card1'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Homepage = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
  }, [])

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