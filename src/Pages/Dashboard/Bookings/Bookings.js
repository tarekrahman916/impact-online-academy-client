import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const Bookings = () => {
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `https://impact-online-academy-server.vercel.app/bookings`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleApproved = (id, email) => {
    fetch(`https://impact-online-academy-server.vercel.app/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        updateUser(email);
        refetch();
      });
  };

  const updateUser = (email) => {
    fetch(
      `https://impact-online-academy-server.vercel.app/users?email=${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("approved successfully");
        refetch();
      });
  };

  const handleDelete = (id) => {
    fetch(`https://impact-online-academy-server.vercel.app/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Deleted Successfully");
        refetch();
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Profile</th>

              <th>Course</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                <th>{i + 1}</th>
                <td className="font-bold">
                  <div>{booking.name}</div>
                  <div>{booking.email}</div>
                  <div>{booking.phone}</div>
                </td>

                <td>{booking.courseName}</td>
                <td>{booking.message}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === "Pending" && (
                    <button
                      onClick={() => handleApproved(booking._id, booking.email)}
                      className="btn primaryBtn btn-xs"
                    >
                      Approved
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-error btn-xs mr-3"
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

export default Bookings;
