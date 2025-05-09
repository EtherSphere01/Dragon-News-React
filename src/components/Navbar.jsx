import React from "react";
import { NavLink } from "react-router";
import user from "/assets/user.png";
const Navbar = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row  items-center mt-6 gap-4 md:gap-0">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/" className={"px-4 py-1"}>
          Home
        </NavLink>
        <NavLink to="/about" className={"px-4 py-1"}>
          About
        </NavLink>
        <NavLink to="/career" className={"px-4 py-1"}>
          Career
        </NavLink>
      </div>
      <div className="login-btn flex gap-5 items-center">
        <img src={user} alt="" className="w-10 h-10 rounded-full" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
