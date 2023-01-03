import React from "react";
import Teacher from "./Teacher";
import oli from "../../../assets/teachers/oli.png";
import joti from "../../../assets/teachers/impactacademybdjoti.png";
import abid from "../../../assets/teachers/DSC_0542.jpg";
import sarju from "../../../assets/teachers/pic.jpg";
import profile from "../../../assets/teachers/3135715.png";

const Teachers = () => {
  const teachers = [
    {
      _id: 1,
      name: "Engr. Md. Yeasir Arafat",
      image: sarju,
      position: "Course Instructor",
    },
    {
      _id: 2,
      name: "Engr. Zahidul Islam Oli",
      image: oli,
      position: "Chief Course Instructor",
    },

    {
      _id: 3,
      name: "Engr. Md. Abid Hossain Zoardar",
      image: abid,
      position: "Course Instructor",
    },
    {
      _id: 4,
      name: "Arch. Md. Rizu Mia",
      image: profile,
      position: "Course Instructor",
    },
    {
      _id: 5,
      name: "Engr. Md. Nurunnabi",
      image: profile,
      position: "Course Instructor",
    },
    {
      _id: 6,
      name: "Arch. Farhana Binte Jaman Joty",
      image: joti,
      position: "Course Instructor",
    },
  ];

  return (
    <div className="mb-24 lg:mx-32  mx-4 my-12">
      <h2 className="text-4xl font-semibold text-center  mb-10">
        At a glance our Instructor
      </h2>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center lg:mx-12 mx-4"
      >
        {teachers.map((teacher, i) => (
          <Teacher key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
