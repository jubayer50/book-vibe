import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center font-work">
        <h2 className="text-5xl font-bold">404</h2>
        <NavLink to={"/"}>
          <button className="btn mt-4 bg-[#23BE0A] text-white">Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
