import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const Header = () => {
  const cartProducts = useSelector((state) => state.cart.list);
  return (
    <header className="fixed w-full py-4 top-0 z-20 bg-teal-900">
      <div className="flex flex-row justify-between items-center">
        <Link
          to="/"
          className="text-white text-l bg-yellow-500 py-1 px-2 rounded ml-4"
        >
          Home
        </Link>
        <Link to="/cart">
          <p className="absolute right-14 text-3xl text-white">
            {cartProducts.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </p>
          <GrCart className="text-white text-4xl mr-4" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
