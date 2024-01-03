import React from "react";
import "../css/page1.css";

const Page1 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-500">
      {/* music nav button */}
      <div className="px-10 py-5 rounded-lg flex items-center justify-between bg-white shadow-md w-[300px]">
        {/* Prev Button */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center">
          <span className="triangle prev-icon"></span>
        </button>

        {/* Play/Pause Button */}
        <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="triangle play-icon"></span>
        </button>

        {/* Next Button */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center">
          <span className="triangle next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Page1;
