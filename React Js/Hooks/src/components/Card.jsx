import React from 'react'

const Card = ({ meal }) => {
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
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">
            {category.strCategory}
          </h2>
          <p className="text-gray-300 mb-4">
            {category.strCategoryDescription.slice(0, 80)}...
          </p>
        
        </div>
      ))}
    </div>
  )
}

export default Card