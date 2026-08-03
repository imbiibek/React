import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'

const App = () => {
  const [meal, setMeal] = useState([])

  const fetchData = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    setMeal(res.data.categories)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Card meal={meal} />
    </div>
  )
}

export default App