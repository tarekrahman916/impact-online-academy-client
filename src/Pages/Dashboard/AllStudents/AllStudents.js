import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../components/Loader/Loader";

const AllStudents = () => {
  const { data: students, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await fetch(
        `https://impact-online-academy-server.vercel.app/approved-student/Approved`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-4">
      <section className="py-6 bg-gray-800 text-gray-100 min-h-screen">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              All Students
            </h3>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {students.map((student) => (
              <div key={student._id} className="space-y-4 border p-3">
                <img
                  alt=""
                  className="object-cover h-32 w-32 mx-auto mb-4 bg-center rounded-full bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?0"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">{student.name}</h4>
                  <p className="text-sm text-gray-400">{student.email}</p>
                  <p className="text-sm text-gray-400">{student.phone}</p>
                  <div className="flex mt-2 space-x-2">
                    {student.courseName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllStudents;
