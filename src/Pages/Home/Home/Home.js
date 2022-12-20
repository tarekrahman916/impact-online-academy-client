import React from "react";
import ApplyModal from "../../../components/ApplyModal/ApplyModal";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeContact from "../HomeContact/HomeContact";
import HomeCourses from "../HomeCourses/HomeCourses";
import NoticeMarquee from "../NoticeMarquee/NoticeMarquee";
import StudentReview from "../StudentReview/StudentReview";
import Teachers from "../Teachers/Teachers";
import Testimonial from "../Testimonial/Testimonial";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <ApplyModal />
      <NoticeMarquee />
      <HomeCourses />
      <HomeAbout />
      <Testimonial />
      <Teachers />
      <StudentReview />

      <HomeContact />
    </div>
  );
};

export default Home;
