import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
import { FaSpinner } from "react-icons/fa";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleCart = (product) => {
    dispatch(add(product));
  };

  if (status === "loading") {
    return (
      <p className="absolute top-[50%] right-[50%] text-red-400 ">
        <FaSpinner className=" text-8xl animate-spin mr-2" />
      </p>
    );
  }

  if (status === "failed") {
    return (
      <p className="absolute top-[50%] md:right-96 text-red-400 text-xl md:text-3xl">
        Failed to load, please check your connection
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1  mt-20">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="relative w-[300px] h-[300px] border-2  shadow-lg border-yellow-600 mx-auto justify-center items-center mb-4  rounded-xl overflow-hidden"
          >
            <img
              src={product.image}
              className="w-full h-[100px] object-contain mt-2"
            />

            <h1 className="text-l font-bold ml-2 mt-4">{product.title}</h1>
            <p className="absolute bottom-2 left-3 text-left pl-4 mt-4">
              ${product.price}
            </p>
            <button
              className="absolute bottom-2 right-3 bg-green-600 text-white text-l px-4 py-2 rounded-xl"
              onClick={() => handleCart(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
