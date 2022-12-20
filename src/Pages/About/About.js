import React from "react";
import Testimonial from "../Home/Testimonial/Testimonial";
import Benefits from "./Benefits";
import Info from "./Info";
import img from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="">
      <div className=" lg:mx-28">
        <div className="hero-content flex-col lg:flex-row flex">
          <img src={img} className=" rounded-lg shadow-2xl lg:w-1/3" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Impact Academy</h1>
            <p className="py-6 text-justify">
              Impact Academy is a sister concern of Impact IT Solutions Limited
              (IISL) to produce skilled technology-based manpower in Bangladesh.
              By connecting students all over Bangladesh to the best
              instructors, Impact Academy is helping individuals reach their
              goals and pursue their dreams.
            </p>
          </div>
        </div>
      </div>

      <Benefits />
      <Info />
      <Testimonial />
    </div>
  );
};

export default About;
