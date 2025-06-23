import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : { color: "black" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : { color: "black" };
        }}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : { color: "black" };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/create-recipe"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : { color: "black" };
        }}
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
