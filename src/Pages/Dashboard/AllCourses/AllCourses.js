import React from "react";

const AllCourses = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-6">All Courses</h2>
      <div className="overflow-x-auto">
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
            <tr>
              <th>1</th>
              <td>Etabs</td>
              <td>Zahidul Oli</td>
              <td>
                <button className="btn btn-primary btn-sm mr-4">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourses;
