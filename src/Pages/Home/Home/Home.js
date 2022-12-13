import React from "react";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeContact from "../HomeContact/HomeContact";
import HomeCourses from "../HomeCourses/HomeCourses";
import Teachers from "../Teachers/Teachers";
import Testimonial from "../Testimonial/Testimonial";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <HomeCourses />
      <HomeAbout />
      <Testimonial />
      <Teachers />
      <HomeContact />
    </div>
  );
};

export default Home;
