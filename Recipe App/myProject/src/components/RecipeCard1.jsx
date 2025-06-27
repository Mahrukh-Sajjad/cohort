import React from "react";
import { Link } from "react-router-dom";

const recipeCard = (props) => {
  const [id, image, title, desc, ingr, category] = props.recipe;
  return (
    <Link>
      <img src={image} alt="" />
      <h1>{title}</h1>

      <p>
        {desc.slice(0, 100)} ... <small>More</small>
      </p>
    </Link>
  );
};

export default recipeCard;
