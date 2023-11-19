import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import Searchbar from "./Searchbar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utilities";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Cake");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query });
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="e.g. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={<BsSearch className="text-gray-600" />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full grid md:grid-cols-3 lg:grid-cols-5 gap-5 py-10 px-8 lg:px-20">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="text-white w-full items-center justify-center py-10">
            <p className="text-center">No Recipe Found</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipes;
