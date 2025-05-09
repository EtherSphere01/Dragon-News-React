import React from "react";
import logo from "/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center pt-5 gap-4">
      <img src={logo} alt="" className="w-[80%] md:w-auto" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>
        <span className="font-semibold text-accent">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
