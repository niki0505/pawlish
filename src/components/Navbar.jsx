import React from "react";
import { Link, useLocation } from "react-router-dom";
import Paw from "../assets/paw-print.png";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-[#FAEEE7] flex items-center justify-around py-2 fixed top-0 left-0 w-full z-40">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-[#E26764]">
          <img src={Paw} alt="Logo" className="w-25 h-25" />
          <div className="flex flex-col items-center gap-0">
            <p className="text-outline-gradient font-bobbyjones-soft text-5xl">
              Pawlish
            </p>
            <p
              className="text-[#E16162] font-opensans-bold text-1xl"
              style={{ WebkitTextStroke: "0.8px black" }}
            >
              MOBILE PET GROOMING
            </p>
          </div>
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
