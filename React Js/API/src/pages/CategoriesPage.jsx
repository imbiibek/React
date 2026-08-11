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

      
    </div>
  );
};

export default CategoriesPage;