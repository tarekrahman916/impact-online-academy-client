import { useQuery } from "@tanstack/react-query";
import { refresh } from "aos";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

const AllCourses = () => {
  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(
        "https://impact-online-academy-server.vercel.app/courses"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    fetch(`https://impact-online-academy-server.vercel.app/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Delete Successfully");
        refetch();
      });
  };

  return (
    <div className="">
      <h2 className="text-4xl text-center font-bold my-6">All Courses</h2>
      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, i) => (
              <tr className="" key={course._id}>
                <th>{i + 1}</th>
                <td>{course.name}</td>
                <td>{course.instructor}</td>
                <td>
                  <button className="btn primaryBtn btn-sm mr-4">Edit</button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourses;
