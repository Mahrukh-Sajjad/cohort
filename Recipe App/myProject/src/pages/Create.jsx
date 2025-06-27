import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New Recipe Created!");
    navigate("/recipes");
    reset();
  };
  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          type="url"
          {...register("image")}
          placeholder="Enter image url"
        />
        <small>This is how the error is shown</small>
        <input {...register("title")} type="text" placeholder="Recipe title" />

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

        <button>Save Recipe</button>
      </form>
    </div>
  );
};

export default Create;
