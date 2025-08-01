import React from "react";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";

const Card = () => {
  return (
    <div className=" fixed w-full h-72 bg-red-400 flex items-center justify-around">
      <div className="card z-10 -bottom-40 left-20 bg-white rounded-2xl shadow-md w-64 h-80 overflow-hidden">
        {/* Image section */}
        <div className=" flex justify-center ">
          <img
            src={poster1}
            alt="Profile"
            className="w-full h-full  object-cover shadow-2xl "
          />
        </div>
      </div>
      <div className="card2 z-10 -bottom-40 left-20 bg-white rounded-2xl shadow-md w-64 h-80 overflow-hidden">
        {/* Image section */}
        <div className=" flex justify-center ">
          <img
            src={poster3}
            alt="Profile"
            className="w-full h-full  object-cover shadow-2xl "
          />
        </div>
      </div>
      <div className="card3 z-10  -bottom-40 left-20 bg-white rounded-2xl shadow-md w-64 h-80 overflow-hidden">
        {/* Image section */}
        <div className=" flex justify-center ">
          <img
            src={poster2}
            alt="Profile"
            className="w-full h-full  object-cover shadow-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
