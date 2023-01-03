import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import OutLineModal from "../../components/OutlineModal/OutLineModal";
import {
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    _id,
    image,
    name,
    instructor,
    desc,
    overView,
    features,
    video,
    outline,
    classTime,
    duration,
    totalClass,
    price,
  } = course;

  console.log(course);

  return (
    <div className="my-6 ">
      <div className="hero  bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row mb-6">
          <img
            src={image}
            className="lg:w-1/2 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <h4 className="text-xl font-bold my-6">
              Instructor: <span className="text-red-700">{instructor}</span>{" "}
            </h4>
            <p className="py-6 text-justify">{desc}</p>
            <div className="flex">
              <label
                htmlFor="outline-modal"
                className="btn btn-primary btn-outline mr-4"
              >
                See Course Outline
              </label>
              <Link to={`/courses_apply/${_id}`} className="btn primaryBtn">
                Apply Now
                <ArrowRightCircleIcon class="h-6 w-6 text-white ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="p-6 bg-gray-800 text-gray-100">
        <div className="container flex lg:gap-8 gap-2 flex-wrap   lg:justify-center mx-auto text-gray-100">
          <div className="">
            <div className="lg:mb-4 mb-2">
              <h6 className="text-lg">Course Fee: {price} BDT</h6>
            </div>
            <div>
              <h6 className="text-lg">Course Duration: {duration}+ Hours</h6>
            </div>
          </div>
          <div className="divider lg:divider-horizontal lg:border-r-2 border-white"></div>
          <div className="">
            <div className="lg:mb-4 mb:2">
              <h6 className="text-lg">
                Total Class: {totalClass} hours class/Week
              </h6>
            </div>
            <div>
              <h6 className="text-lg">Class Time: {classTime}</h6>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:px-16">
        <div className="mb-6  px-4 lg:px-0">
          <h2 className="text-3xl font-bold mt-8 mb-3">Overview</h2>
          <p className="text-justify font-semibold text-gray-600">{overView}</p>
        </div>

        <div className="mb-6 grid lg:grid-cols-2 gap-8  ">
          <div className="mx-6 lg:mx-0 ">
            <h2 className="text-3xl font-bold mt-8 ">Course Module</h2>
            <p className="">
              What do you learn from this course at IMPACT ACADEMY?
            </p>
            <hr className="mb-6 border-2 border-primary rounded-lg" />
            <ul className="">
              {features.map((feature, i) => (
                <li
                  className="font-semibold flex items-center space-x-3"
                  key={i}
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {video && (
          <div className="flex justify-center">
            <iframe
              className="rounded-md"
              width="560"
              height="315"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
      <OutLineModal outline={outline} />
    </div>
  );
};

export default CourseDetails;
