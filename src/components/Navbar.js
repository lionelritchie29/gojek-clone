import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [links] = useState([
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Products",
      link: "/products",
    },
    {
      id: 3,
      title: "Help",
      link: "/help",
    },
  ]);

  return (
    <nav className="bg-secondary p-4 lg:p-8 z-10 relative">
      <div className="flex justify-between lg:w-4/5 lg:mx-auto">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="text-white text-2xl lg:hidden">&#9776;</div>

        <div className="hidden lg:block">
          <ul className="text-white flex">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer ml-8 text-xl font-semibold hover:underline"
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
