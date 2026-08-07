import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import logo from "../assets/logo.svg";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [randomMeals, setRandomMeals] = useState([]);
  const [randomLoading, setRandomLoading] = useState(true);

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

    const fetchRandomMeals = async () => {
      try {
        const mealMap = new Map();

        while (mealMap.size < 15) {
          const response = await axios.get(
            "https://www.themealdb.com/api/json/v2/1/randomselection.php"
          );

          response.data.meals.forEach((meal) => {
            mealMap.set(meal.idMeal, meal);
          });
        }

        setRandomMeals(Array.from(mealMap.values()).slice(0, 15));
      } catch (err) {
        console.error(err);
      } finally {
        setRandomLoading(false);
      }
    };

    fetchCategories();
    fetchRandomMeals();
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
          <Link
            to="/"
            className="px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Home
          </Link>

          <Link
            to="/api"
            className="px-4 py-2 rounded-md hover:bg-gray-800"
          >
            API
          </Link>

          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-gray-900 border border-gray-700"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to TheMealDB
        </h1>

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
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Meals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.idCategory}
              category={category}
            />
          ))}
        </div>
      </section>

      {/* Random Meals */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Random Meals
        </h2>

        {randomLoading ? (
          <h2 className="text-center text-xl">Loading...</h2>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {randomMeals.map((meal) => (
              <div key={meal.idMeal} className="text-center">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-72 object-cover rounded"
                />

                <p className="mt-3 text-orange-500 text-lg">
                  {meal.strMeal}
                </p>
              </div>
            ))}
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