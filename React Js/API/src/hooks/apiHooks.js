


export const UseApiHooks = () =>{
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

 
}