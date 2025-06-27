import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RCard from "../components/RCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const renderrecipes = data.map((recipe) => {
    return <RCard recipe={recipe} key={recipe.id} />;
  });
  return <div>{data.length > 0 ? renderrecipes : "No recipes found"}</div>;
};

export default Recipes;
