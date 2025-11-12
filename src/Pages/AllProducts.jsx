import React, { useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import { Helmet } from "react-helmet";
import Loading from "../Components/Loading";

const AllProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  useEffect(() => {
    fetch("https://global-link-hub.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const searchValue = (e) => {
    const searchValue = e.target.value;
    setSearchProduct(searchValue);
  };

  const filtaredProducts = products.filter((product) => {
    const searchValue = searchProduct.toLowerCase().trim();
    return product.name.toLowerCase().trim().includes(searchValue);
  });
  return (
    <div className="mx-auto w-11/12">
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <div className="flex gap-5 mt-5 lg:mt-10 flex-col md:flex-row justify-between border-b border-b-accent/30 pb-2">
        <h1 className=" font-bold text-2xl md:text-4xl lg:text-5xl text-accent ">
          All Products : {filtaredProducts.length}
        </h1>
        <input
          className="focus:outline-0 input"
          type="search"
          required
          value={searchProduct}
          onChange={searchValue}
          placeholder="Search"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 ">
        {isLoading ? (
          <Loading />
        ) : filtaredProducts.length > 0 ? (
          filtaredProducts.map((singleProduct) => (
            <SingleProduct
              key={singleProduct._id}
              singleProduct={singleProduct}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3 text-xl">
            No products found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
