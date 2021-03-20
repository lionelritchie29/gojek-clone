import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Headroom from "react-headroom";

const Navbar = () => {
  const [links] = useState([
    {
      id: 1,
      title: "Home",
      link: "/",
      type: "in",
    },
    {
      id: 2,
      title: "About",
      link: "https://bylionel.netlify.app",
      type: "out",
    },
  ]);

  return (
    <Headroom style={{ zIndex: 999 }}>
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
                  {link.type === "in" ? (
                    <Link to={link.link}>{link.title}</Link>
                  ) : (
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
