import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Loader from "../../components/Loader/Loader";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://impact-online-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="lg:mx-24 mx-4 my-12">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
