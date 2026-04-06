import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-red-500 font-bold">error</h2>
        <NavLink to={"/"}>
          <button className="btn mt-2">Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
