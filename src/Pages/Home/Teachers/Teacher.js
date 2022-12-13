import React from "react";
import img from "../../../assets/teachers/oli.png";

const Teacher = () => {
  return (
    <div className="hover:mt-[-12px] ease-out duration-300 box">
      <div className="flex flex-col justify-center  p-3 shadow-md rounded-xl  bg-gray-300 hover:bg-orange-600 hover:text-white">
        <img
          src={img}
          alt=""
          className="w-36 h-36 mx-auto  rounded-full bg-white aspect-square border-2 border-x-8 border-primary"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 ">
            <h2 className="text-xl font-semibold ">Engr. Zahidul Islam Oli</h2>
            <p className=" text-xs sm:text-base font-semibold">
              Chief Course Instructor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
