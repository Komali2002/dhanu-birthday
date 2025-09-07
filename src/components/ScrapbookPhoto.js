"use client";
import React from "react";

function ScrapbookPhoto({ src, year }) {
  return (
    <div className="relative w-[260px] mx-auto my-8">
      {/* tape strip top-left */}
      <div className="absolute -top-3 left-6 w-16 h-4 bg-pink-300 rotate-[-10deg] rounded-sm shadow-md opacity-80"></div>
      {/* tape strip top-right */}
      <div className="absolute -top-3 right-6 w-16 h-4 bg-purple-300 rotate-[10deg] rounded-sm shadow-md opacity-80"></div>

      {/* polaroid frame */}
      <div className="bg-white border-4 border-gray-300 rounded-md shadow-lg overflow-hidden">
        {/* photo */}
        <img
          src={src}
          alt={year}
          className="w-full h-[200px] object-cover"
        />
        {/* caption */}
        <div className="p-3 text-center text-gray-700 font-semibold">
          {year}
        </div>
      </div>
    </div>
  );
}

export default ScrapbookPhoto;
