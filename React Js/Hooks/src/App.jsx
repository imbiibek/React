import { Routes, Route } from "react-router-dom"
import CategoriesPage from "./pages/CategoriesPage"
import MealsPage from "./pages/MealsPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoriesPage />} />
      <Route path="/category/:categoryName" element={<MealsPage />} />
    </Routes>
  )
}

export default App