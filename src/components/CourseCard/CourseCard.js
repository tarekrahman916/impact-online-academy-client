import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, image, name } = course;
  return (
    <div className="box">
      <div className="card h-80  bg-white shadow-xl border-l-8 border-primary ">
        <figure>
          <img src={image} alt="Shoes" className="rounded-lg h-32 w-full " />
        </figure>
        <div className="card-body text-center mb-6">
          <h2 className="text-xl font-bold text-gray-700">{name}</h2>
        </div>
        <div className="flex justify-center">
          <Link
            to={`/courses/${_id}`}
            className="btn btn-primary absolute bottom-[-10px] hover:text-white"
          >
            See Details
            <ArrowLongRightIcon className="h-6 w-6 text-white " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
