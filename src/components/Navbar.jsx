import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-[#FAEEE7] flex items-center justify-around py-5 px-32 fixed top-0 left-0 w-full">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-[#E26764]">
          <span>Pawlish</span>
        </span>
      </Link>
      <div className="flex items-center gap-10 ">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "navbar-text-selected" : "navbar-text"
          }
        >
          HOME
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "navbar-text-selected"
              : "navbar-text"
          }
        >
          ABOUT US
        </Link>
        <Link
          to="/services"
          className={
            location.pathname === "/services"
              ? "navbar-text-selected"
              : "navbar-text"
          }
        >
          SERVICES
        </Link>
        <Link
          to="/promotions"
          className={
            location.pathname === "/promotions"
              ? "navbar-text-selected"
              : "navbar-text"
          }
        >
          PROMOTIONS
        </Link>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact"
              ? "navbar-text-selected"
              : "navbar-text"
          }
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
