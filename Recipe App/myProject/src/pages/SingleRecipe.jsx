import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const params = useParams();
  const { data } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setdata(JSON.parse(localStorage.getItem("recipes")));
    setdata(copyData);
  };
  const deleteHandler = () => {
    const filerdata = data.filter((r) => r.id != params.id);
    setdata(JSON.parse(localStorage.getItem("recipes")));
    setdata(filterdata);
  };

  return recipe ? (
    <div style={{ display: "flex" }}>
      <div className="left">
        <h1>{recipe.title}</h1>
        <img
          src={recipe.image}
          style={{ height: "300px", width: "300px" }}
          alt=""
        />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <input
            type="url"
            {...register("image")}
            value={recipe.image}
            placeholder="Enter image url"
          />
          <small>This is how the error is shown</small>
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe title"
          />

          <textarea
            {...register("descriptions")}
            placeholder="//Start from here"
          ></textarea>

          <textarea
            {...register("ingredients")}
            placeholder="Write ingredients"
          ></textarea>

          <textarea
            {...register("instructions")}
            placeholder="Write insructions"
          ></textarea>
          <select {...register("category")}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>

          <button>Update Recipe</button>
          <button onClick={deleteHandler}>Delete Recipe</button>
        </form>
      </div>
    </div>
  ) : (
    "loading..."
  );
};

export default SingleRecipe;
