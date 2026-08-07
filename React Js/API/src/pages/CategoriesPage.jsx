import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import logo from "../assets/logo.svg";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [randomMeal, setRandomMeal] = useState(null);
  const [randomLoading, setRandomLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const firstLetter = value.trim().charAt(0);

    if (!firstLetter) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    try {
      setSearchLoading(true);
      setShowSearchResults(true);

      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
      );

      setSearchResults(response.data.meals || []);
    } catch (err) {
      console.error(err);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const fetchRandomMeal = async () => {
    try {
      setRandomLoading(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setRandomMeal(response.data.meals[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setRandomLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchRandomMeal();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10 text-2xl">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center mt-10 text-red-500 text-2xl">
        Error: {error}
      </h2>
    );
  }

  return (
    <div className="bg-[#231f1a] min-h-screen text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="flex items-center gap-4">
          <Link to="/" className="px-4 py-2 rounded-md hover:bg-gray-800">
            Home
          </Link>

          <Link to="/api" className="px-4 py-2 rounded-md hover:bg-gray-800">
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
              className="px-4 py-2 rounded-md bg-gray-900 border border-gray-700 w-64"
            />

            {showSearchResults && (
              <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-zinc-900 border border-gray-700 rounded-md shadow-lg z-50">
                {searchLoading ? (
                  <p className="text-center text-sm text-gray-400 py-4">
                    Searching...
                  </p>
                ) : searchResults.filter((meal) =>
                    meal.strMeal
                      .toLowerCase()
                      .startsWith(searchTerm.toLowerCase())
                  ).length === 0 ? (
                  <p className="text-center text-sm text-gray-400 py-4">
                    No meals found
                  </p>
                ) : (
                  searchResults
                    .filter((meal) =>
                      meal.strMeal
                        .toLowerCase()
                        .startsWith(searchTerm.toLowerCase())
                    )
                    .map((meal) => (
                      <Link
                        key={meal.idMeal}
                        to={`/meal/${meal.idMeal}`}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setShowSearchResults(false);
                          setSearchTerm("");
                        }}
                      >
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="text-sm text-gray-200">
                          {meal.strMeal}
                        </span>
                      </Link>
                    ))
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to TheMealDB</h1>

        <p className="text-gray-400 mb-8">
          Welcome to TheMealDB: An open, crowd-sourced database of recipes from
          around the world.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700">
            Free API
          </button>

          <button className="px-6 py-3 bg-yellow-500 rounded hover:bg-yellow-600">
            Go Premium
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Meals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      </section>

      {/* Random Meal */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-center">Random Meal</h2>

          <button
            onClick={fetchRandomMeal}
            disabled={randomLoading}
            className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-600 disabled:opacity-50 text-sm font-semibold"
          >
            {randomLoading ? "Shuffling..." : "Shuffle"}
          </button>
        </div>

        {randomLoading || !randomMeal ? (
          <h2 className="text-center text-xl">Loading...</h2>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Image */}
            <img
              src={randomMeal.strMealThumb}
              alt={randomMeal.strMeal}
              className="w-full md:w-1/2 h-80 object-cover rounded-lg"
            />

            {/* Right: Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                {randomMeal.strMeal}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {randomMeal.strCategory} • {randomMeal.strArea}
              </p>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-6">
                {randomMeal.strInstructions}
              </p>

              {randomMeal.strYoutube && (
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${
                      randomMeal.strYoutube.split("v=")[1]
                    }`}
                    title={randomMeal.strMeal}
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-300 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-center md:text-left">
            <p>© 2026 TheMealDB</p>
            <p>Proudly built in the UK 🇬🇧</p>
          </div>

          {/* Center: Socials */}
          <div className="flex items-center gap-2">
            <span className="text-sm mr-1">Socials:</span>
            <a href="#" className="p-1 bg-blue-600 rounded">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="#" className="p-1 bg-sky-400 rounded">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.8.1c.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>
            <a href="#" className="p-1 bg-indigo-500 rounded">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 5.6 2 10c0 2.9 2 5.5 5 7-.1.9-.5 2.3-1.5 3.8 0 0 2.6-.3 4.8-2.4.5.1 1.1.1 1.7.1 5.5 0 10-3.6 10-8S17.5 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Refunds</a>
          </div>
        </div>

        {/* Sister sites */}
        <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
          <span className="text-orange-500 font-bold text-lg">
            The<span className="font-extrabold">Cocktail</span>
            <span className="text-white">DB</span>
          </span>
          <span className="text-red-500 font-bold text-lg">
            <span className="text-xs align-top">The</span>
            <span className="text-white">Audio</span>DB
          </span>
          <span className="text-green-500 font-bold text-lg">
            The<span className="font-extrabold">Sports</span>
            <span className="text-white">DB</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default CategoriesPage;