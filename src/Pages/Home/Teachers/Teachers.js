import React from "react";
import Teacher from "./Teacher";

const Teachers = () => {
  return (
    <div className="lg:mx-8 mx-auto my-12">
      <h2 className="text-4xl font-semibold text-center  mb-10">
        At a glance our Instructor
      </h2>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center lg:mx-12 mx-4"
      >
        {[...Array(6)].map((teacher, i) => (
          <Teacher key={i} />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
