import React from "react";
import "./Teacher.css";

const Teacher = ({ teacher }) => {
  const { image, name, position } = teacher;
  return (
    <div className="hover:mt-[-12px] ease-out  duration-300 box">
      <div className="flex flex-col justify-center teacher-card h-64 p-3 shadow-2xl shadow-gray-400 rounded-xl  bg-white  hover:text-white">
        <img
          src={image}
          alt=""
          className="w-36 max-h-36 mx-auto  rounded-full  aspect-square border-2 border-x-8 border-primary"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 ">
            <h2 className="text-xl font-semibold ">{name}</h2>
            <p className=" text-xs sm:text-base font-semibold">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
