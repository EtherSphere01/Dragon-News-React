import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "/assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Logout successful");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <div className="flex flex-col justify-between md:flex-row  items-center mt-6 gap-4 md:gap-0">
      <div className="">
        {user && (
          <div className="flex items-center gap-5">
            <p className="text-accent font-semibold">{user?.email}</p>
          </div>
        )}
      </div>
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
        <img
          src={user?.photoURL ? user.photoURL : userIcon}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        {user ? (
          <button
            onClick={handleLogout}
            to="/"
            className="btn btn-primary px-10"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
