import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { image2, name, instructor, desc, Overview, features, who, why } =
    course;
  return (
    <div className="my-6">
      <div className="hero  bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image2}
            className="lg:w-1/2 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <h4 className="text-xl font-bold my-6">
              Instructor: <span className="text-red-700">{instructor}</span>{" "}
            </h4>
            <p className="py-6 text-justify">{desc}</p>
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
      <div className="lg:px-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mt-8 mb-3">Overview</h2>
          <p className="text-justify font-semibold text-gray-600">{Overview}</p>
        </div>

        <div className="mb-6 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mt-8 mb-3">Featured</h2>
            <ul className="list-disc">
              {features.map((feature, i) => (
                <li className="font-bold" key={i}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mt-8 mb-3">
              Who Can Attend this Course?
            </h2>
            <ul className="list-disc">
              {who.map((w, i) => (
                <li className="font-bold" key={i}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
