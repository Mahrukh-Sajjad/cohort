import React from "react";
import { Link } from "react-router-dom";

const RCard = (props) => {
  const { id, image, title, descriptions, ingredients, category } =
    props.recipe;
  console.log(descriptions);
  return (
    <Link to={`/recipes/details/${id}`}>
      <img src={image} alt="" style={{ height: "300px", width: "300px" }} />
      <h1>{title}</h1>
      <p>
        {descriptions.slice(0, 100)} ... <small>More</small>
      </p>
    </Link>
  );
};

export default RCard;
