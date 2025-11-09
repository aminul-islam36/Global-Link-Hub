import React from "react";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Testmonial from "../Components/Testmonial";

const productsPromise = fetch("http://localhost:5000/products").then((res) =>
  res.json()
);

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Products productsPromise={productsPromise} />
      <Testmonial />
    </div>
  );
};

export default HomePage;
