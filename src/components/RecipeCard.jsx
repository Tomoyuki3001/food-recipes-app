import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];
  return (
    <Link to={`/recipes/${id}`} className="w-full lg:w-full lg:px-8">
      <div className="bg-gradient shadow w-full rounded-lg">
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[200px] md:h-[150px] w-full"
        />

        <div className="p-3">
          <p className="text-white font-semibold">{label}</p>
          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-1 rounded-full mr-3 text-amber-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-1 rounded-full text-amber-500">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
