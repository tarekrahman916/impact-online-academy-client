import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img ">
        <img src={image} className="w-full h-ful" alt="" />
      </div>
      <div className="absolute   transform -translate-y-1/2 left-16 lg:w-1/2 top-1/2">
        <h1 className="lg:text-6xl text-4xl text-white font-bold mb-6">
          <span className="text-red-600">Impact</span> Academy
        </h1>
        <p className="text-white mb-6 hidden lg:block">
          Impact Academy always provides a helpful behavior with clients. We
          ensure that be with impact academy is very much effective for your
          future professional life. We always want & hope a better & bright
          future of yours.
        </p>
        <div className="mb-6">
          <Link to="/courses" className="btn primaryBtn mr-6 text-white">
            See All Courses
          </Link>
          {/* <label htmlFor="apply-modal" className="btn primaryBtn px-10">
            Apply Now
          </label> */}
        </div>
      </div>

      <div className="absolute flex  justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#${prev}`} className="btn btn-circle primaryBtn">
          ❮
        </a>
        <a href={`#${next}`} className="btn btn-circle primaryBtn">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
