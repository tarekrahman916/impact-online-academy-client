import React, { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";

const HomeCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="my-10 lg:mx-8  mx-4">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-semibold mb-2">Our Courses</h2>
        <p className="text-gray-600">
          Connection declared vicinity more continue supplied announ
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 lg:grid-cols-3 gap-14 my-16"
      >
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default HomeCourses;
