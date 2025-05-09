import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 mt-4">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <p className="font-bold">
        <Marquee className="flex gap-2 md:gap-8" speed={50} pauseOnHover={true}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          veritatis, exercitationem pariatur quasi fugiat quidem dolore corrupti
          nisi quod ducimus?
        </Marquee>
      </p>
    </div>
  );
};

export default LatestNews;
