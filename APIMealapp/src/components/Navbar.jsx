import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const debounceRef = useRef(null)

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!value.trim()) {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    setShowSearchResults(true)
    setSearchLoading(true)

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
        )
        setSearchResults(res.data.meals || [])
      } catch (err) {
        console.error(err)
        setSearchResults([])
      } finally {
        setSearchLoading(false)
      }
    }, 400)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
        <span className="text-orange-500">THE</span>
        <span className="text-white">MEAL</span>
        <span className="text-orange-500">DB</span>
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="px-5 py-2 rounded-md bg-red-700 hover:bg-red-800 text-white font-medium transition-colors"
        >
          Home
        </Link>

        <Link
          to="/api"
          className="px-4 py-2 text-gray-200 hover:text-white font-medium"
        >
          API
        </Link>

        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => searchTerm && setShowSearchResults(true)}
            onBlur={() => setTimeout(() => setShowSearchResults(false), 150)}
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {showSearchResults && (
            <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-50">
              {searchLoading ? (
                <p className="text-center text-sm text-gray-500 py-4">Searching...</p>
              ) : searchResults.filter((meal) =>
                  meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase())
                ).length === 0 ? (
                <p className="text-center text-sm text-gray-500 py-4">No meals found</p>
              ) : (
                searchResults
                  .filter((meal) =>
                    meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase())
                  )
                  .map((meal) => (
                    <Link
                      key={meal.idMeal}
                      to={`/meal/${meal.idMeal}`}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setShowSearchResults(false)
                        setSearchTerm('')
                      }}
                    >
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="text-sm text-gray-800">{meal.strMeal}</span>
                    </Link>
                  ))
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar