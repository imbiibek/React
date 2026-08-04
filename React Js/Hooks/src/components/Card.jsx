import React from 'react'

const SkeletonCard = () => (
  <div className="w-72 bg-neutral-900 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center text-center animate-pulse">
    <div className="w-40 h-40 rounded-full bg-neutral-700 mb-4" />
    <div className="h-5 w-32 bg-neutral-700 rounded mb-3" />
    <div className="h-3 w-full bg-neutral-700 rounded mb-2" />
    <div className="h-3 w-5/6 bg-neutral-700 rounded mb-4" />
    <div className="h-8 w-24 bg-neutral-700 rounded-lg" />
  </div>
)

const Card = ({ meal, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-black">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (!meal || meal.length === 0) {
    return (
      <div className="flex items-center justify-center p-10">
        <p className="text-gray-400">No categories found.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-black">
      {meal.map((category) => (
        <div
          key={category.idCategory}
          className="w-72 bg-neutral-900 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "https://via.placeholder.com/160?text=No+Image"
            }}
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">
            {category.strCategory}
          </h2>
          <p className="text-gray-300 mb-4">
            {category.strCategoryDescription
              ? category.strCategoryDescription.slice(0, 80) + "..."
              : "No description available."}
          </p>
          <button
           
            className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  )
}

export default Card