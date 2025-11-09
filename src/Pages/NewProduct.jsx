import React from "react";
import { toast } from "react-toastify";

const NewProduct = () => {
  const addNewProductHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productRUL = form.productRUL.value;
    const productPrice = form.productPrice.value;
    const originCountry = form.originCountry.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const newProduct = {
      productName,
      productRUL,
      productPrice,
      originCountry,
      rating,
      quantity,
    };
    toast("your Product Added successfull");
    console.log(newProduct);
  };
  return (
    <div>
      <div>
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-120 shrink-0 shadow-2xl">
              <div className="card-body">
                <h2 className="text-center font-semibold text-xl">
                  Add New Product For Selling{" "}
                </h2>
                <form onSubmit={addNewProductHandle}>
                  <fieldset className="fieldset  *:w-full">
                    {/* Email  */}
                    <label className="label">Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="input"
                      placeholder="Product Name..."
                    />
                    {/* Password  */}
                    <label className="label">Product Image</label>
                    <input
                      type="text"
                      name="productRUL"
                      className="input"
                      placeholder="Product Image..."
                    />
                    <label className="label">Product Price</label>
                    <input
                      type="text"
                      name="productPrice"
                      className="input"
                      placeholder="Product Price..."
                    />
                    <label className="label">Origin Country</label>
                    <input
                      type="text"
                      name="originCountry"
                      className="input"
                      placeholder="Origin Country"
                    />
                    <label className="label">Product Rating</label>
                    <input
                      type="text"
                      name="rating"
                      className="input"
                      placeholder="product quality"
                    />
                    <label className="label">Available quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="input"
                      placeholder="Available quantity"
                    />

                    <button className="btn btn-accent text-white mt-4">
                      Add New Product
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
