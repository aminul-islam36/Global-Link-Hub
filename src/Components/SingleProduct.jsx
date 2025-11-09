import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ singleProduct }) => {
  const { name, rating } = singleProduct;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title"> Product Rating : {rating}</h2>
        <div className="card-actions">
          <Link to={`/details/${singleProduct._id}`}>
            <button className="btn btn-accent">View Deails</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
