import React from "react";
import "./TopBanner.css";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import BannerItem from "./BannerItem";
import ApplyModal from "../../../components/ApplyModal/ApplyModal";

const bannerData = [
  {
    image: banner1,
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    image: banner2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: banner3,
    prev: 2,
    id: 3,
    next: 1,
  },
];

const TopBanner = () => {
  return (
    <div className="carousel w-full  mb-6 ">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
      
    </div>
  );
};

export default TopBanner;
