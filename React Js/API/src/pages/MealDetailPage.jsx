import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const MealDetailPage = () => {
  const { mealId } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        )
        setMeal(response.data.meals) 
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMeal()
  }, [mealId])
  console.log(meal)



  if (loading) return <p className="text-white text-center mt-10">Loading...</p>
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>
  if (!meal) return null

  
//   const ingredients = []
//   for (let i = 1; i <= 20; i++) {
//     const ingredient = meal[`strIngredient${i}`]
//     const measure = meal[`strMeasure${i}`]
//     if (ingredient && ingredient.trim() !== "") {
//       ingredients.push(`${measure} ${ingredient}`)
//     }
//   }

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <Link to={-1} className="text-white underline mb-6 inline-block">
           Back
        </Link>
        {meal.map((item) => (
          <div key={item.idMeal}>
            <h1 className="text-3xl font-bold text-white mb-4">{item.strMeal}</h1>
            <img
              src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full max-w-md rounded-lg mb-6"
            />
            <h2 className="text-xl font-semibold text-white mb-2">Ingredients</h2>
            <ul className="text-gray-300 list-disc list-inside mb-6 text-white">
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map((i) => ({
                        ingredient: item[`strIngredient${i}`],
                        measure: item[`strMeasure${i}`],
                    }))
                    .filter(({ ingredient }) => ingredient && ingredient.trim() !== "")
                    .map(({ ingredient, measure }, index) => (
                        <li key={index}>{`${measure} ${ingredient}`}</li>
                    ))}
            </ul>
            <h2 className="text-xl font-semibold text-white mb-2">Instructions</h2>
            <p className="text-gray-300 whitespace-pre-line text-white">{item.strInstructions}</p>
          </div>
        ))}


        {/* <h1 className="text-3xl font-bold text-white mb-4">{meal.strMeal}</h1>
   
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full max-w-md rounded-lg mb-6"
        /> */}

        {/* <h2 className="text-xl font-semibold text-white mb-2">Ingredients</h2> */}
        {/* <ul className="text-gray-300 list-disc list-inside mb-6">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
{/* 
        <h2 className="text-xl font-semibold text-white mb-2">Instructions</h2>
        
        <p className="text-gray-300 whitespace-pre-line">{meal?.strInstructions}</p> */}
      </div>
    </div>
  )
}

export default MealDetailPage