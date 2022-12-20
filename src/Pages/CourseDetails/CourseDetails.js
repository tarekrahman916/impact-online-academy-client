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
  const { _id, image, name, instructor, desc, overView, features, video } =
    course;

  return (
    <div className="my-6 ">
      <div className="hero  bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row">
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
      <div className="lg:px-16">
        <div className="mb-6  px-4 lg:px-0">
          <h2 className="text-3xl font-bold mt-8 mb-3">Overview</h2>
          <p className="text-justify font-semibold text-gray-600">{overView}</p>
        </div>

        <div className="mb-6 grid lg:grid-cols-2 gap-8  lg:justify-start">
          <div className="mx-6 lg:mx-0">
            <h2 className="text-3xl font-bold mt-8 mb-3">Featured</h2>
            <ul className="list-disc">
              {features.map((feature, i) => (
                <li className="font-bold" key={i}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
      </div>
      <OutLineModal video={video} />
    </div>
  );
};

export default CourseDetails;
