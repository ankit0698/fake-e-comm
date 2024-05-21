import { useDispatch, useSelector } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "./store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.list);

  const handleRemoveProduct = (id) => {
    dispatch(remove({ id }));
  };

  const increaseHandler = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const decreaseHandler = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1  mt-20">
        {cartProducts.map((product) => {
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
              <p className="mt-2 text-bold ml-2 text-l">
                Quantity:{product.quantity}
              </p>
              <div className="flex flex-row -mt-6 justify-center items-center">
                <p
                  className="px-2 py-1 mr-4 bg-gray-700 text-white rounded cursor-pointer "
                  onClick={() => increaseHandler(product.id)}
                >
                  +
                </p>
                <p
                  className="px-2 py-1 bg-red-800 text-white rounded cursor-pointer"
                  onClick={() => decreaseHandler(product.id)}
                >
                  -
                </p>
              </div>
              <p className="absolute bottom-2 left-3 text-left pl-4 mt-4">
                ${product.price}
              </p>

              <button
                className="absolute bottom-2 right-3 bg-red-600 text-white text-l px-4 py-2 rounded-xl"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <p
        className={`text-center border-t-4 ${
          cartProducts.length ? "block" : "hidden"
        } border-yellow-700 text-xl text-bold`}
      >
        Total = $
        {cartProducts.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        )}
      </p>
      {!cartProducts.length && (
        <p className="text-center text-3xl text-bold text-red-600  ">
          No items in cart
        </p>
      )}
    </>
  );
};

export default Cart;
