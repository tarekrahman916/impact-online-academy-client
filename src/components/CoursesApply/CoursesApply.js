import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const CoursesApply = () => {
  const { user } = useContext(authContext);
  const course = useLoaderData();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingCourse = {
      courseName: course.name,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
      status: "Pending",
    };

    console.log(bookingCourse);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingCourse),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <div>
      <div className="lg:w-1/2 mx-auto my-8 bg-white shadow-2xl rounded-lg p-4 ">
        <h2 className="text-3xl font-bold my-6">{course.name}</h2>
        <form onSubmit={handleApply}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              value={user?.displayName}
              disabled
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              value={user?.email}
              disabled
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Phone Number</span>
            </label>
            <input
              required
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Short message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-5 px-12">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoursesApply;
