import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `mr-1 text-lg ${isActive ? "font-semibold border-2 rounded-lg border-[#23BE0A] text-[#23BE0A]" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `mr-1 text-lg ${isActive ? "font-semibold border-2 rounded-lg border-[#23BE0A] text-[#23BE0A]" : ""}`
          }
        >
          List Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/nothing"}
          className={({ isActive }) =>
            `mr-1 text-lg ${isActive ? "font-semibold border-2 rounded-lg border-[#23BE0A] text-[#23BE0A]" : ""}`
          }
        >
          Read to Book
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm font-work">
      <div className="navbar max-w-292.75 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to={"/"}>
            <h2 className="text-[19px] md:text-[28px] font-bold text-[#131313]">
              Book Vibe
            </h2>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 md:gap-4 items-center font-semibold text-lg">
            <a className="btn bg-[#23BE0A] text-white rounded-lg">Button</a>
            <a className="btn bg-[#59C6D2] text-white rounded-lg">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
