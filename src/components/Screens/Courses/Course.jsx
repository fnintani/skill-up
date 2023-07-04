import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] border-[2px] border-solid border-blueMain bg-limeSecondary rounded-md">
      <img src={image} alt="" className="max-h-[120px]"/>
      <div className="mt-2 text-xs text-blueMain">{category}</div>
      <div className="text-sm mt-2 font-bold h-[60px]">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-full">
            <AiOutlineUser className="text-pinkAccent" />
          </div>
          <div className="text-sm font-bold">{participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-full">
            <AiOutlineStar className="text-blueMain" />
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">Rp{price}K</div>
      </div>
    </div>
  );
};

export default Course;
