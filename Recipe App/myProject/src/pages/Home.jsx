import React, { useEffect } from "react";
// import axios from "axios";
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      //  const { data } = await axios.get("https://fakestoreapi.com/products");
      const response = await axios.get("/products");
      // console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("Home.jsx mounted");
    getProduct();

    return () => {
      console.log("Home.jsx ummount");
    };
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Products</button>
    </div>
  );
};

export default Home;
