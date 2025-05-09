import React from "react";
import swimmingImage from "/assets/swimming.png";
import playground from "/assets/playground.png";
import classImg from "/assets/class.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="flex flex-col justify-around items-center gap-5">
        <img src={swimmingImage} alt="" />
        <img src={classImg} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;
