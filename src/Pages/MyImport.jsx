import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { IoIosRemoveCircle } from "react-icons/io";
import Loading from "../Components/Loading";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Helmet } from "react-helmet-async";

const MyImport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const axiosURL = useAxios();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!user?.email) return;

    const getProducts = async () => {
      const res = await axiosURL.get(`/importedProducts?email=${user.email}`);
      setProducts(res.data);
      setIsLoading(false);
    };
    getProducts();
  }, [user?.email, axiosURL]);

  const deleteProductHandle = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    });
    if (result.isConfirmed) {
      const res = await axiosURL.delete(`importedProducts/${id}`);
      if (res.data.deletedCount) {
        const reminingProducts = products.filter((p) => p._id != id);
        setProducts(reminingProducts);
        Swal.fire({
          title: "Removed!",
          text: "Your Product has been Removed.",
          icon: "success",
        });
      }
    }
  };

  return (
    <div className="w-11/12 mx-auto pt-5 overflow-x-hidden">
      <Helmet>
        <title>My Import</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto">
          {products.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-600">
                No Products Available
              </h2>
              <p className="text-gray-500 mt-2">
                You haven't added any products yet. Add a product to see it
                here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="text-center">
                  <tr className="text-2xl text-accent">
                    <th colSpan="4">My All Imports - {products.length}</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {products.map((product) => (
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="500"
                    >
                      <tr
                        key={product._id}
                        className="grid grid-cols-2 md:table"
                      >
                        <td className="lg:max-w-2/12 lg:w-full">
                          <img
                            className="w-full max-w-[250px] h-auto aspect-2/1 rounded-2xl shadow-sm object-cover"
                            src={product.image}
                            alt={product.name}
                          />
                        </td>
                        <td className="lg:max-w-6/12 lg:w-full">
                          <div>
                            <h2 className="font-bold md:text-lg">
                              {product.name}
                            </h2>
                            <h2 className="text-sm">
                              <strong>Origin Country</strong> :
                              {product.origin_country}
                            </h2>
                            <h2 className="flex gap-4 text-sm">
                              <strong>Price</strong> : {product.price}
                            </h2>
                            <h2>
                              <strong>Available quantity</strong> :
                              {product.imported_quantity}
                            </h2>
                            <h2>
                              <strong>Rating</strong> : {product.rating}
                            </h2>
                          </div>
                        </td>
                        <td>
                          <Link to={`/viewDetails/${product._id}`}>
                            <button className="btn btn-success text-white">
                              View Deails
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deleteProductHandle(product._id)}
                            className="btn btn-accent text-white"
                          >
                            Remove <IoIosRemoveCircle />
                          </button>
                        </td>
                      </tr>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyImport;
