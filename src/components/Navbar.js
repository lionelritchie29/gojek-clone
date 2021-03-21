import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Fragment, useState, useRef } from "react";
import Headroom from "react-headroom";
import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const hamburgerMenu = useRef();
  const navContainer = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
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

  const setMobileNav = () => {
    if (hamburgerMenu.current.classList.contains("hidden")) {
      hamburgerMenu.current.classList.remove("hidden");
      navContainer.current.classList.add("fixed");
    } else {
      hamburgerMenu.current.classList.add("hidden");
      navContainer.current.classList.remove("fixed");
    }

    setIsNavOpen(!isNavOpen);
  };

  return (
    <Fragment>
      <Headroom style={{ zIndex: 999 }}>
        <nav ref={navContainer} className="w-full bg-secondary p-4 lg:p-8 z-10">
          <div className="flex justify-between lg:w-4/5 lg:mx-auto">
            <div>
              <img src={logo} alt="logo" />
            </div>

            <div className="text-white text-2xl lg:hidden">
              <HamburgerMenu
                isOpen={isNavOpen}
                menuClicked={setMobileNav}
                height={18}
                width={21}
                color="#FFF"
              />
            </div>

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

      <ul
        ref={hamburgerMenu}
        className="font-bold text-2xl hidden fixed w-full h-screen bg-secondary text-white z-50 px-5 py-24"
      >
        {links.map((link) => (
          <li key={link.id} className="cursor-pointer mb-5 text-2xl font-bold">
            {link.type === "in" ? (
              <Link className="border-white border-b" to={link.link}>
                {link.title}
              </Link>
            ) : (
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Navbar;
