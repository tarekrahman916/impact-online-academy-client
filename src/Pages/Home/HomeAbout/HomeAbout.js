import React from "react";
import students from "../../../assets/students.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const HomeAbout = () => {
  return (
    <div className="bg-gray-200">
      <div className="mb-24 lg:mx-28  mx-4   mt-28  shadow-md  rounded-md  ">
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="hidden lg:block">
            <img src={students} alt="" className="rounded-md h-full w-full" />
          </div>
          <div className="my-6 px-6">
            <h2 className="text-6xl font-bold">About us</h2>
            <div className="divider bg-primary border-4 rounded-full lg:w-1/2"></div>
            <p className="font-bold my-6">
              Impact Academy is a sister concern of Impact IT Solutions Limited
              (IISL) to produce skilled technology-based manpower in Bangladesh.
              By connecting students all over Bangladesh to the best
              instructors, Impact Academy is helping individuals reach their
              goals and pursue their dreams. We are one of the leading academy
              in Bangladesh. We introduce essential software that’s skill is
              needed for you. We believe in quality . We follow ” Learning by
              Practicing” method. We believe , we are a family. Hopefully, we
              together to become skillful manpower.
            </p>
            <button className="btn primaryBtn px-5 text-white flex gap-1">
              Learn More
              <ArrowLongRightIcon className="h-6 w-6 text-white " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
