import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyCourses = () => {
  const { user } = useContext(authContext);

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {!courses.length ? (
        <div className="text-center p-6 text-red-500 font-bold">
          <h2 className="text-3xl">No Courses Available</h2>
        </div>
      ) : (
        <div>
          <h2>My Courses</h2>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Course</th>
                    <th>email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, i) => (
                    <tr key={course._id} className="hover">
                      <th>{i + 1}</th>
                      <td>{course.courseName}</td>
                      <td>{course.email}</td>
                      <td className="text-primary font-bold">
                        {course.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
