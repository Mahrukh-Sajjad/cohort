import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
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
          {...register("description")}
          placeholder="//Start from here"
        ></textarea>

        <textarea
          {...register("ingredients")}
          placeholder="Write ingredients"
        ></textarea>

        <textarea
          {...register("instrucions")}
          placeholder="Write insructions"
        ></textarea>
        <select {...register("category")}>
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
        </select>

        <button>Save Recipe</button>
      </form>
    </div>
  );
};

export default Create;
