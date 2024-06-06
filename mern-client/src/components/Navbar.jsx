import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {  } from "react-icons/fa6";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const { user } = useContext(AuthContext);

  //toggle menu
  const toggleMenu = () => {
    setMenuOpen(isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  //navitem here
  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 right-0">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-0">
          {}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex item-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          {/* nav item for large device */}

          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer "
              >
                {link}
              </Link>
            ))}
          </ul>

          {}
          <div className="md:flex space-x-12 hidden lg-flex item-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* {menu btn for mobilr devices} */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* {navitem} */}
        <div
          className={`space-y-4 mt-12 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
