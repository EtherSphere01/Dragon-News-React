import React from "react";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="container mx-auto bg-base-100 min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
