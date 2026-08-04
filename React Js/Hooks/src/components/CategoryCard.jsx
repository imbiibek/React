import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  const shortDescription =
    category.strCategoryDescription.split(" ").slice(0, 15).join(" ") + "..."

  return (
    <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />

      <h2 className="text-xl font-bold text-white mb-2">
        {category.strCategory}
      </h2>

      <p className="text-gray-400 text-sm mb-4">{shortDescription}</p>

      <Link to={`/category/${category.strCategory}`}>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">
          View Details
        </button>
      </Link>
    </div>
  )
}

export default CategoryCard