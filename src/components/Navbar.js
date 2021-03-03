import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary-dark p-4 lg:p-8">
      <div className="flex justify-between lg:w-4/5 lg:mx-auto">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="text-white text-2xl lg:hidden">&#9776;</div>

        <div className="hidden lg:block">
          <ul className="text-white flex">
            <li className="cursor-pointer ml-8 text-xl font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer ml-8 text-xl font-semibold">
              <Link to="/products">Products</Link>
            </li>
            <li className="cursor-pointer ml-8 text-xl font-semibold">
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
