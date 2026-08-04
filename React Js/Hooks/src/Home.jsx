import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'

const App = () => {
  const [meal, setMeal] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      setMeal(res.data.categories)
    } catch (err) {
      console.error("Error fetching meals:", err)
      setError(err.message || "Failed to load meal categories")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {error && (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Retry
          </button>
        </div>
      )}

      {!error && <Card meal={meal} loading={loading} />}



    </div>
  )
}

export default App