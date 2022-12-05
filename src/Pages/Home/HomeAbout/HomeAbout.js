import React from "react";
import students from "../../../assets/students.png";

const HomeAbout = () => {
  return (
    <div className="lg:mx-8 mx-auto mb-6 mt-28 bg-white shadow-lg rounded-md  ">
      <div className="grid lg:grid-cols-2 gap-2">
        <div>
          <img src={students} alt="" className="rounded-md mt-[-120px] " />
        </div>
        <div className="my-6 px-6">
          <h2 className="text-6xl font-bold">About us</h2>
          <div className="divider bg-primary border-4 rounded-full lg:w-1/2"></div>
          <p className="font-bold my-6">
            Impact Academy is a sister concern of Impact IT Solutions Limited
            (IISL) to produce skilled technology-based manpower in Bangladesh.
            By connecting students all over Bangladesh to the best instructors,
            Impact Academy is helping individuals reach their goals and pursue
            their dreams. We are one of the leading academy in Bangladesh. We
            introduce essential software that’s skill is needed for you. We
            believe in quality . We follow ” Learning by Practicing” method. We
            believe , we are a family. Hopefully, we together to become skillful
            manpower.
          </p>
          <button className="btn btn-primary px-5 text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
