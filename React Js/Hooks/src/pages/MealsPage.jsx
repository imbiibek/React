import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const MealsPage = () => {
  const { categoryName } = useParams() // reads the :categoryName from the URL
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        )
        setMeals(response.data.meals)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMeals()
  }, [categoryName]) // refetch whenever the category in the URL changes

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-white underline mb-6 inline-block">
          &larr; Back to Categories
        </Link>

        <h1 className="text-3xl font-bold text-white mb-6">{categoryName}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-zinc-900 rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-white font-semibold">{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MealsPage