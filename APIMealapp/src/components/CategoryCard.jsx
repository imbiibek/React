import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.strCategory}`} className="text-center block">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-56 object-cover rounded-lg"
      />

      <p className="mt-2 text-orange-500 text-base font-medium">
        {category.strCategory}
      </p>
    </Link>
  )
}

export default CategoryCard