import { Routes, Route } from "react-router-dom"
import CategoriesPage from "./pages/CategoriesPage"
import MealsPage from "./pages/MealsPage"
import MealDetailPage from "./pages/MealDetailPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoriesPage />} />
      <Route path="/category/:categoryName" element={<MealsPage />} />
      <Route path="/meal/:mealId" element={<MealDetailPage />} />
    </Routes>
  )
}

export default App