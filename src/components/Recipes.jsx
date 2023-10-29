import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import Searchbar from "./Searchbar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4">
          <Searchbar
            placeholder="e.g. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Recipes;
